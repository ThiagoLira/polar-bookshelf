"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const ElectronContextMenu_1 = require("../../contextmenu/electron/ElectronContextMenu");
const Version_1 = require("polar-shared/src/util/Version");
const AppLauncher_1 = require("./AppLauncher");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Promises_1 = require("../../util/Promises");
const Updates_1 = require("../../updates/Updates");
const Platforms_1 = require("polar-shared/src/util/Platforms");
const AnnotationSidebarClient_1 = require("../../annotation_sidebar/AnnotationSidebarClient");
const BrowserWindowRegistry_1 = require("../../electron/framework/BrowserWindowRegistry");
const Menus_1 = require("./Menus");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Directories_1 = require("../../datastore/Directories");
const Messenger_1 = require("../../electron/messenger/Messenger");
const AppUpdates_1 = require("../../updates/AppUpdates");
const log = Logger_1.Logger.create();
const WINDOW_TYPE = 'type';
class MainAppMenu {
    constructor(mainAppController, mode = MainMenuMode.DOC_REPO_APP) {
        this.mainAppController = mainAppController;
        this.mode = mode;
    }
    setup() {
        const menu = electron_1.Menu.buildFromTemplate(this.createMenuTemplate());
        electron_1.Menu.setApplicationMenu(menu);
        new ElectronContextMenu_1.ElectronContextMenu();
        this.registerEventListeners();
    }
    registerEventListeners() {
        electron_1.app.on('browser-window-focus', (event, browserWindow) => {
            const meta = BrowserWindowRegistry_1.BrowserWindowRegistry.get(browserWindow.id);
            const isViewer = Preconditions_1.isPresent(meta) &&
                meta.tags &&
                meta.tags[WINDOW_TYPE] === 'viewer';
            const menu = electron_1.Menu.getApplicationMenu();
            function handleToggleAnnotationSidebar() {
                const viewMenu = Menus_1.Menus.find(menu.items, 'view');
                const viewMenuItems = Menus_1.Menus.submenu(viewMenu);
                const toggleAnnotationSidebar = Menus_1.Menus.find(viewMenuItems, 'toggle-annotation-sidebar');
                Menus_1.Menus.setVisible(toggleAnnotationSidebar, isViewer);
            }
            handleToggleAnnotationSidebar();
            function handleSyncFlashcardsToAnki() {
                const toolsMenu = Menus_1.Menus.find(menu.items, 'tools');
                const toolsMenuItems = Menus_1.Menus.submenu(toolsMenu);
                const syncFlashcardsToAnkiMenuItem = Menus_1.Menus.find(toolsMenuItems, 'sync-flashcards-to-anki');
                Menus_1.Menus.setVisible(syncFlashcardsToAnkiMenuItem, !isViewer);
            }
            handleSyncFlashcardsToAnki();
            const annotateMenu = Menus_1.Menus.find(menu.items, 'annotate');
            if (annotateMenu) {
                const annotateMenuItems = Menus_1.Menus.submenu(annotateMenu);
                annotateMenuItems.forEach(current => {
                    Menus_1.Menus.setEnabled(current, isViewer);
                });
            }
        });
    }
    createMenuTemplate() {
        const menuTemplate = [
            this.createFileMenuTemplate(),
            this.createEditMenuTemplate(),
            this.createViewMenuTemplate(),
            this.createToolsMenuTemplate(),
            this.createWindowMenuTemplate(),
            this.createHelpMenuTemplate()
        ];
        if (Platforms_1.Platforms.get() === Platforms_1.Platform.MACOS) {
            menuTemplate.unshift(this.createMacOSMenuTemplate());
        }
        return menuTemplate;
    }
    createAboutMessage() {
        const dataDir = Directories_1.Directories.getDataDir().path;
        const version = Version_1.Version.get();
        return '' +
            `version:  ${version}\n` +
            `data dir: ${dataDir}\n`;
    }
    createAppMenuTemplate() {
        return {
            label: 'Polar',
            id: 'polar',
            platform: 'darwin',
            submenu: [
                { role: 'about' },
                { type: 'separator' },
                { role: 'hide' },
                { role: 'hideothers' },
                { role: 'unhide' },
                { type: 'separator' },
                { role: 'quit' }
            ]
        };
    }
    createMacOSMenuTemplate() {
        return {
            label: 'Polar',
            submenu: [
                {
                    label: 'About Polar',
                    click: () => this.showHelpAboutDialog()
                },
                {
                    type: 'separator'
                },
                { role: 'hide', label: 'Hide Polar' },
                { role: 'hideOthers' },
                { role: 'unhide' },
                { type: 'separator' },
                {
                    label: 'Quit',
                    accelerator: 'CmdOrCtrl+Q',
                    click: () => this.mainAppController.cmdExit()
                },
            ]
        };
    }
    createFileMenuTemplate() {
        const isMacOS = Platforms_1.Platforms.get() === Platforms_1.Platform.MACOS;
        return {
            label: 'File',
            submenu: [
                {
                    label: 'Import from Disk',
                    accelerator: 'CmdOrCtrl+I',
                    click: () => {
                        this.mainAppController.cmdImport()
                            .catch((err) => log.error("Could not import from disk: ", err));
                    }
                },
                {
                    label: 'Capture Web Page',
                    accelerator: 'CommandOrControl+N',
                    click: () => {
                        this.mainAppController.cmdCaptureWebPageWithBrowser()
                            .catch((err) => log.error("Could not capture page: ", err));
                    }
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Print',
                    accelerator: 'CmdOrCtrl+P',
                    click: (item, focusedWindow) => {
                        if (focusedWindow) {
                            focusedWindow.webContents.print();
                        }
                    }
                },
                {
                    type: 'separator'
                },
                {
                    role: 'quit',
                    label: 'Quit',
                    visible: !isMacOS,
                    accelerator: 'CmdOrCtrl+Q',
                    click: () => this.mainAppController.cmdExit()
                },
            ]
        };
    }
    createEditMenuTemplate() {
        return {
            id: 'edit',
            label: 'Edit',
            submenu: [
                { role: 'undo' },
                { role: 'redo' },
                { type: 'separator' },
                { role: 'cut' },
                { role: 'copy' },
                { role: 'paste' },
                { role: 'pasteandmatchstyle' },
                { role: 'selectall' },
                { type: 'separator' },
            ]
        };
    }
    createAnnotateMenuTemplate() {
        return {
            id: 'annotate',
            label: 'Annotate',
            enabled: false,
            visible: false,
            submenu: [
                { role: 'undo', enabled: false, visible: 'false' },
                { role: 'redo' },
                { type: 'separator' },
                { role: 'cut' },
                { role: 'copy' },
                { role: 'paste' },
                { role: 'pasteandmatchstyle' },
                { role: 'selectall' },
                { type: 'separator' },
            ]
        };
    }
    createViewMenuTemplate() {
        return {
            id: 'view',
            label: 'View',
            submenu: [
                {
                    label: 'Reload',
                    accelerator: 'CmdOrCtrl+R',
                    click: (item, focusedWindow) => {
                        if (focusedWindow) {
                            focusedWindow.webContents.reloadIgnoringCache();
                        }
                    }
                },
                {
                    id: 'toggle-annotation-sidebar',
                    accelerator: 'F10',
                    label: 'Toggle Annotation Sidebar',
                    visible: false,
                    click: () => AnnotationSidebarClient_1.AnnotationSidebarClient.toggleAnnotationSidebar()
                },
                {
                    label: 'Toggle Full Screen',
                    accelerator: (function () {
                        if (process.platform === 'darwin') {
                            return 'Ctrl+Command+F';
                        }
                        else {
                            return 'F11';
                        }
                    })(),
                    click: (item, focusedWindow) => {
                        if (focusedWindow) {
                            focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
                        }
                    }
                },
            ]
        };
    }
    createWindowMenuTemplate() {
        return {
            label: 'Window',
            role: 'window',
            submenu: [
                { role: 'minimize' },
                { role: 'close' },
            ]
        };
    }
    createToolsMenuTemplate() {
        return {
            id: 'tools',
            label: 'Tools',
            submenu: [
                {
                    label: 'Document Repository',
                    click: () => Promises_1.Promises.executeLogged(AppLauncher_1.AppLauncher.launchRepositoryApp)
                },
                {
                    id: 'sync-flashcards-to-anki',
                    label: 'Sync Flashcards to Anki',
                    click: () => {
                        Messenger_1.Messenger.postMessage({
                            message: {
                                type: "start-anki-sync"
                            }
                        }).catch(err => log.error("Could not post message", err));
                    }
                },
                { type: 'separator' },
                {
                    label: 'Toggle Developer Tools',
                    click: this.mainAppController.cmdToggleDevTools
                },
            ]
        };
    }
    createHelpMenuTemplate() {
        return {
            id: 'help',
            label: 'Help',
            role: 'help',
            submenu: [
                {
                    label: 'About',
                    click: () => this.showHelpAboutDialog()
                },
                { label: 'Documentation',
                    click: () => electron_1.shell.openExternal('https://getpolarized.io/docs/') },
                {
                    id: 'check-for-updates',
                    label: 'Check for Updates',
                    visible: AppUpdates_1.AppUpdates.platformSupportsUpdates(),
                    click: (item) => Updates_1.Updates.checkForUpdates(item),
                },
                { type: 'separator' },
                { label: 'Donate',
                    click: () => electron_1.shell.openExternal('https://opencollective.com/polar-bookshelf/donate') },
                { type: 'separator' },
                { label: 'Discord',
                    click: () => electron_1.shell.openExternal('https://discord.gg/GT8MhA6') },
                { label: 'Reddit',
                    click: () => electron_1.shell.openExternal('https://www.reddit.com/r/PolarBookshelf/') },
                { label: 'Learn More',
                    click: () => electron_1.shell.openExternal('https://github.com/burtonator/polar-bookshelf') },
                { type: 'separator' },
                { label: 'Cookie Policy',
                    click: () => electron_1.shell.openExternal('https://getpolarized.io/cookie-policy.html') },
                { label: 'Terms of Service',
                    click: () => electron_1.shell.openExternal('https://getpolarized.io/terms-of-service.html') },
                { label: 'Privacy Policy',
                    click: () => electron_1.shell.openExternal('https://getpolarized.io/privacy-policy.html') },
            ]
        };
    }
    showHelpAboutDialog() {
        electron_1.dialog.showMessageBox(electron_1.BrowserWindow.getFocusedWindow(), {
            type: 'info',
            buttons: ['OK'],
            title: 'Polar',
            message: this.createAboutMessage(),
            detail: '',
        });
    }
}
exports.MainAppMenu = MainAppMenu;
var MainMenuMode;
(function (MainMenuMode) {
    MainMenuMode[MainMenuMode["DOC_REPO_APP"] = 0] = "DOC_REPO_APP";
    MainMenuMode[MainMenuMode["VIEWER_APP"] = 1] = "VIEWER_APP";
})(MainMenuMode = exports.MainMenuMode || (exports.MainMenuMode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkFwcE1lbnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNYWluQXBwTWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHVDQUFpRTtBQUNqRSx3RkFBbUY7QUFDbkYsMkRBQXNEO0FBQ3RELCtDQUEwQztBQUMxQywyREFBc0Q7QUFDdEQsa0RBQTZDO0FBQzdDLG1EQUE4QztBQUM5QywrREFBb0U7QUFDcEUsOEZBQXlGO0FBQ3pGLDBGQUFxRjtBQUNyRixtQ0FBOEI7QUFDOUIsa0VBQXlEO0FBQ3pELDZEQUF3RDtBQUN4RCxrRUFBNkQ7QUFDN0QseURBQW9EO0FBRXBELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUM7QUFFM0IsTUFBYSxXQUFXO0lBS3BCLFlBQVksaUJBQW9DLEVBQ3BDLE9BQXFCLFlBQVksQ0FBQyxZQUFZO1FBRXRELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUMzQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUVyQixDQUFDO0lBRU0sS0FBSztRQUVSLE1BQU0sSUFBSSxHQUFHLGVBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1FBRS9ELGVBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUc5QixJQUFJLHlDQUFtQixFQUFFLENBQUM7UUFFMUIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFFbEMsQ0FBQztJQUtPLHNCQUFzQjtRQUUxQixjQUFHLENBQUMsRUFBRSxDQUFDLHNCQUFzQixFQUFFLENBQUMsS0FBcUIsRUFBRSxhQUE0QixFQUFFLEVBQUU7WUFFbkYsTUFBTSxJQUFJLEdBQUcsNkNBQXFCLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUV6RCxNQUFNLFFBQVEsR0FDUix5QkFB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QUcsRUFBRTtZQUNyRCxJQUFJLEVBQUUsTUFBTTtZQUNaLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQztZQUNmLEtBQUssRUFBRSxPQUFPO1lBQ2QsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUNsQyxNQUFNLEVBQUUsRUFBRTtTQUViLENBQUMsQ0FBQztJQUVQLENBQUM7Q0FFSjtBQXRjRCxrQ0FzY0M7QUFLRCxJQUFZLFlBR1g7QUFIRCxXQUFZLFlBQVk7SUFDcEIsK0RBQVksQ0FBQTtJQUNaLDJEQUFVLENBQUE7QUFDZCxDQUFDLEVBSFcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFHdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01haW5BcHBDb250cm9sbGVyfSBmcm9tICcuL01haW5BcHBDb250cm9sbGVyJztcbmltcG9ydCB7YXBwLCBCcm93c2VyV2luZG93LCBkaWFsb2csIE1lbnUsIHNoZWxsfSBmcm9tIFwiZWxlY3Ryb25cIjtcbmltcG9ydCB7RWxlY3Ryb25Db250ZXh0TWVudX0gZnJvbSAnLi4vLi4vY29udGV4dG1lbnUvZWxlY3Ryb24vRWxlY3Ryb25Db250ZXh0TWVudSc7XG5pbXBvcnQge1ZlcnNpb259IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9WZXJzaW9uJztcbmltcG9ydCB7QXBwTGF1bmNoZXJ9IGZyb20gJy4vQXBwTGF1bmNoZXInO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1Byb21pc2VzfSBmcm9tICcuLi8uLi91dGlsL1Byb21pc2VzJztcbmltcG9ydCB7VXBkYXRlc30gZnJvbSAnLi4vLi4vdXBkYXRlcy9VcGRhdGVzJztcbmltcG9ydCB7UGxhdGZvcm0sIFBsYXRmb3Jtc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL1BsYXRmb3Jtcyc7XG5pbXBvcnQge0Fubm90YXRpb25TaWRlYmFyQ2xpZW50fSBmcm9tICcuLi8uLi9hbm5vdGF0aW9uX3NpZGViYXIvQW5ub3RhdGlvblNpZGViYXJDbGllbnQnO1xuaW1wb3J0IHtCcm93c2VyV2luZG93UmVnaXN0cnl9IGZyb20gJy4uLy4uL2VsZWN0cm9uL2ZyYW1ld29yay9Ccm93c2VyV2luZG93UmVnaXN0cnknO1xuaW1wb3J0IHtNZW51c30gZnJvbSAnLi9NZW51cyc7XG5pbXBvcnQge2lzUHJlc2VudH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7RGlyZWN0b3JpZXN9IGZyb20gJy4uLy4uL2RhdGFzdG9yZS9EaXJlY3Rvcmllcyc7XG5pbXBvcnQge01lc3Nlbmdlcn0gZnJvbSAnLi4vLi4vZWxlY3Ryb24vbWVzc2VuZ2VyL01lc3Nlbmdlcic7XG5pbXBvcnQge0FwcFVwZGF0ZXN9IGZyb20gJy4uLy4uL3VwZGF0ZXMvQXBwVXBkYXRlcyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuY29uc3QgV0lORE9XX1RZUEUgPSAndHlwZSc7XG5cbmV4cG9ydCBjbGFzcyBNYWluQXBwTWVudSB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IG1haW5BcHBDb250cm9sbGVyOiBNYWluQXBwQ29udHJvbGxlcjtcbiAgICBwcml2YXRlIG1vZGU6IE1haW5NZW51TW9kZTtcblxuICAgIGNvbnN0cnVjdG9yKG1haW5BcHBDb250cm9sbGVyOiBNYWluQXBwQ29udHJvbGxlcixcbiAgICAgICAgICAgICAgICBtb2RlOiBNYWluTWVudU1vZGUgPSBNYWluTWVudU1vZGUuRE9DX1JFUE9fQVBQKSB7XG5cbiAgICAgICAgdGhpcy5tYWluQXBwQ29udHJvbGxlciA9IG1haW5BcHBDb250cm9sbGVyO1xuICAgICAgICB0aGlzLm1vZGUgPSBtb2RlO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHNldHVwKCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IG1lbnUgPSBNZW51LmJ1aWxkRnJvbVRlbXBsYXRlKHRoaXMuY3JlYXRlTWVudVRlbXBsYXRlKCkpO1xuXG4gICAgICAgIE1lbnUuc2V0QXBwbGljYXRpb25NZW51KG1lbnUpO1xuXG4gICAgICAgIC8vIG5vaW5zcGVjdGlvbiBUc0xpbnRcbiAgICAgICAgbmV3IEVsZWN0cm9uQ29udGV4dE1lbnUoKTtcblxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGV2ZW50IGxpc3RlbmVycyBzbyB3ZSBjYW4gaGlkZS9kaXNhYmxlL2V0YyBtZW51cy5cbiAgICAgKi9cbiAgICBwcml2YXRlIHJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKSB7XG5cbiAgICAgICAgYXBwLm9uKCdicm93c2VyLXdpbmRvdy1mb2N1cycsIChldmVudDogRWxlY3Ryb24uRXZlbnQsIGJyb3dzZXJXaW5kb3c6IEJyb3dzZXJXaW5kb3cpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgbWV0YSA9IEJyb3dzZXJXaW5kb3dSZWdpc3RyeS5nZXQoYnJvd3NlcldpbmRvdy5pZCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGlzVmlld2VyOiBib29sZWFuXG4gICAgICAgICAgICAgICAgPSBpc1ByZXNlbnQobWV0YSkgJiZcbiAgICAgICAgICAgICAgICBtZXRhIS50YWdzICYmXG4gICAgICAgICAgICAgICAgbWV0YSEudGFnc1tXSU5ET1dfVFlQRV0gPT09ICd2aWV3ZXInO1xuXG4gICAgICAgICAgICBjb25zdCBtZW51ID0gTWVudS5nZXRBcHBsaWNhdGlvbk1lbnUoKSE7XG5cbiAgICAgICAgICAgIC8vICoqKiogaGFuZGxlIHRvZ2dsZS1hbm5vdGF0aW9uLXNpZGViYXJcblxuICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlVG9nZ2xlQW5ub3RhdGlvblNpZGViYXIoKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgdmlld01lbnUgPSBNZW51cy5maW5kKG1lbnUuaXRlbXMsICd2aWV3Jyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgdmlld01lbnVJdGVtcyA9IE1lbnVzLnN1Ym1lbnUodmlld01lbnUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZ2dsZUFubm90YXRpb25TaWRlYmFyID0gTWVudXMuZmluZCh2aWV3TWVudUl0ZW1zLCAndG9nZ2xlLWFubm90YXRpb24tc2lkZWJhcicpO1xuXG4gICAgICAgICAgICAgICAgTWVudXMuc2V0VmlzaWJsZSh0b2dnbGVBbm5vdGF0aW9uU2lkZWJhciEsIGlzVmlld2VyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaGFuZGxlVG9nZ2xlQW5ub3RhdGlvblNpZGViYXIoKTtcblxuICAgICAgICAgICAgLy8gKioqKiBoYW5kbGUgc3luYy1mbGFzaGNhcmRzLXRvLWFua2lcblxuICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlU3luY0ZsYXNoY2FyZHNUb0Fua2koKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0b29sc01lbnUgPSBNZW51cy5maW5kKG1lbnUuaXRlbXMsICd0b29scycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb2xzTWVudUl0ZW1zID0gTWVudXMuc3VibWVudSh0b29sc01lbnUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN5bmNGbGFzaGNhcmRzVG9BbmtpTWVudUl0ZW0gPSBNZW51cy5maW5kKHRvb2xzTWVudUl0ZW1zLCAnc3luYy1mbGFzaGNhcmRzLXRvLWFua2knKTtcblxuICAgICAgICAgICAgICAgIE1lbnVzLnNldFZpc2libGUoc3luY0ZsYXNoY2FyZHNUb0Fua2lNZW51SXRlbSEsICEgaXNWaWV3ZXIpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhhbmRsZVN5bmNGbGFzaGNhcmRzVG9BbmtpKCk7XG5cbiAgICAgICAgICAgIC8vICoqKiogaGFuZGxlIGFubm90YXRlIG1lbnVcblxuICAgICAgICAgICAgY29uc3QgYW5ub3RhdGVNZW51ID0gTWVudXMuZmluZChtZW51Lml0ZW1zLCAnYW5ub3RhdGUnKTtcblxuICAgICAgICAgICAgaWYgKGFubm90YXRlTWVudSkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYW5ub3RhdGVNZW51SXRlbXMgPSBNZW51cy5zdWJtZW51KGFubm90YXRlTWVudSEpITtcblxuICAgICAgICAgICAgICAgIGFubm90YXRlTWVudUl0ZW1zLmZvckVhY2goY3VycmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIE1lbnVzLnNldEVuYWJsZWQoY3VycmVudCwgaXNWaWV3ZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZU1lbnVUZW1wbGF0ZSgpOiBhbnkge1xuXG4gICAgICAgIGNvbnN0IG1lbnVUZW1wbGF0ZTogYW55W10gPSBbXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUZpbGVNZW51VGVtcGxhdGUoKSxcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRWRpdE1lbnVUZW1wbGF0ZSgpLFxuICAgICAgICAgICAgLy8gdGhpcy5jcmVhdGVBbm5vdGF0ZU1lbnVUZW1wbGF0ZSgpLFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3TWVudVRlbXBsYXRlKCksXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVRvb2xzTWVudVRlbXBsYXRlKCksXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVdpbmRvd01lbnVUZW1wbGF0ZSgpLFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVIZWxwTWVudVRlbXBsYXRlKClcbiAgICAgICAgXTtcblxuICAgICAgICBpZiAoUGxhdGZvcm1zLmdldCgpID09PSBQbGF0Zm9ybS5NQUNPUykge1xuICAgICAgICAgICAgbWVudVRlbXBsYXRlLnVuc2hpZnQodGhpcy5jcmVhdGVNYWNPU01lbnVUZW1wbGF0ZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtZW51VGVtcGxhdGU7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUFib3V0TWVzc2FnZSgpIHtcblxuICAgICAgICBjb25zdCBkYXRhRGlyID0gRGlyZWN0b3JpZXMuZ2V0RGF0YURpcigpLnBhdGg7XG4gICAgICAgIGNvbnN0IHZlcnNpb24gPSBWZXJzaW9uLmdldCgpO1xuXG4gICAgICAgIHJldHVybiAnJyArXG4gICAgICAgICAgICBgdmVyc2lvbjogICR7dmVyc2lvbn1cXG5gICtcbiAgICAgICAgICAgIGBkYXRhIGRpcjogJHtkYXRhRGlyfVxcbmBcbiAgICAgICAgICAgIDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVkIGZvciBNYWNPUyBzbyB0aGF0IHdlIGhhdmUgYSAnUG9sYXInIG1lbnUgYmVmb3JlICdGaWxlJyB3aXRoIE1hY09TXG4gICAgICogc3BlY2lmaWMgYWN0aW9ucyBsaWtlICdoaWRlJ1xuICAgICAqXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVBcHBNZW51VGVtcGxhdGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxhYmVsOiAnUG9sYXInLFxuICAgICAgICAgICAgaWQ6ICdwb2xhcicsXG4gICAgICAgICAgICBwbGF0Zm9ybTogJ2RhcndpbicsXG4gICAgICAgICAgICBzdWJtZW51OiBbXG5cbiAgICAgICAgICAgICAgICB7cm9sZTogJ2Fib3V0J30sXG4gICAgICAgICAgICAgICAge3R5cGU6ICdzZXBhcmF0b3InfSxcbiAgICAgICAgICAgICAgICB7cm9sZTogJ2hpZGUnfSxcbiAgICAgICAgICAgICAgICB7cm9sZTogJ2hpZGVvdGhlcnMnfSxcbiAgICAgICAgICAgICAgICB7cm9sZTogJ3VuaGlkZSd9LFxuICAgICAgICAgICAgICAgIHt0eXBlOiAnc2VwYXJhdG9yJ30sXG4gICAgICAgICAgICAgICAge3JvbGU6ICdxdWl0J31cblxuICAgICAgICAgICAgXVxuXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZU1hY09TTWVudVRlbXBsYXRlKCkge1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsYWJlbDogJ1BvbGFyJyxcbiAgICAgICAgICAgIHN1Ym1lbnU6IFtcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdBYm91dCBQb2xhcicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB0aGlzLnNob3dIZWxwQWJvdXREaWFsb2coKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2VwYXJhdG9yJ1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICB7IHJvbGU6ICdoaWRlJywgbGFiZWw6ICdIaWRlIFBvbGFyJyB9LFxuICAgICAgICAgICAgICAgIHsgcm9sZTogJ2hpZGVPdGhlcnMnIH0sXG4gICAgICAgICAgICAgICAgeyByb2xlOiAndW5oaWRlJyB9LFxuICAgICAgICAgICAgICAgIHsgdHlwZTogJ3NlcGFyYXRvcid9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdRdWl0JyxcbiAgICAgICAgICAgICAgICAgICAgYWNjZWxlcmF0b3I6ICdDbWRPckN0cmwrUScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB0aGlzLm1haW5BcHBDb250cm9sbGVyLmNtZEV4aXQoKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUZpbGVNZW51VGVtcGxhdGUoKSB7XG5cbiAgICAgICAgY29uc3QgaXNNYWNPUyA9IFBsYXRmb3Jtcy5nZXQoKSA9PT0gUGxhdGZvcm0uTUFDT1M7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxhYmVsOiAnRmlsZScsXG4gICAgICAgICAgICAvLyBhY2NlbGVyYXRvcjogJ0N0cmwrRicsXG4gICAgICAgICAgICBzdWJtZW51OiBbXG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnSW1wb3J0IGZyb20gRGlzaycsXG4gICAgICAgICAgICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ21kT3JDdHJsK0knLFxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluQXBwQ29udHJvbGxlci5jbWRJbXBvcnQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4gbG9nLmVycm9yKFwiQ291bGQgbm90IGltcG9ydCBmcm9tIGRpc2s6IFwiLCBlcnIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQ2FwdHVyZSBXZWIgUGFnZScsXG4gICAgICAgICAgICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ29tbWFuZE9yQ29udHJvbCtOJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbkFwcENvbnRyb2xsZXIuY21kQ2FwdHVyZVdlYlBhZ2VXaXRoQnJvd3NlcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiBsb2cuZXJyb3IoXCJDb3VsZCBub3QgY2FwdHVyZSBwYWdlOiBcIiwgZXJyKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzZXBhcmF0b3InXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdQcmludCcsXG4gICAgICAgICAgICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ21kT3JDdHJsK1AnLFxuICAgICAgICAgICAgICAgICAgICBjbGljazogKGl0ZW06IEVsZWN0cm9uLk1lbnVJdGVtLCBmb2N1c2VkV2luZG93OiBCcm93c2VyV2luZG93KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9jdXNlZFdpbmRvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzZWRXaW5kb3cud2ViQ29udGVudHMucHJpbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy8geyByb2xlOiAnaGlkZScsIHZpc2libGU6IGlzTWFjT1MgfSxcbiAgICAgICAgICAgICAgICAvLyB7IHJvbGU6ICdoaWRlT3RoZXJzJywgdmlzaWJsZTogaXNNYWNPUyB9LFxuICAgICAgICAgICAgICAgIC8vIHsgcm9sZTogJ3VuaGlkZScsIHZpc2libGU6IGlzTWFjT1MgfSxcbiAgICAgICAgICAgICAgICAvLyB7IHR5cGU6ICdzZXBhcmF0b3InLCB2aXNpYmxlOiBpc01hY09TfSxcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3NlcGFyYXRvcidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcm9sZTogJ3F1aXQnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1F1aXQnLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiAhIGlzTWFjT1MsXG4gICAgICAgICAgICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ21kT3JDdHJsK1EnLFxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gdGhpcy5tYWluQXBwQ29udHJvbGxlci5jbWRFeGl0KClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuXG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGNyZWF0ZUVkaXRNZW51VGVtcGxhdGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogJ2VkaXQnLFxuICAgICAgICAgICAgbGFiZWw6ICdFZGl0JyxcbiAgICAgICAgICAgIHN1Ym1lbnU6IFtcbiAgICAgICAgICAgICAgICB7IHJvbGU6ICd1bmRvJyB9LFxuICAgICAgICAgICAgICAgIHsgcm9sZTogJ3JlZG8nIH0sXG4gICAgICAgICAgICAgICAgLy8geyB0eXBlOiAnc2VwYXJhdG9yJyB9LFxuICAgICAgICAgICAgICAgIC8vIHsgbGFiZWw6ICdGaW5kJywgYWNjZWxlcmF0b3I6ICdDbWRPckN0cmwrZicsIGNsaWNrOiAoKSA9PlxuICAgICAgICAgICAgICAgIC8vIEluUGFnZVNlYXJjaC5leGVjdXRlKCkgfSxcbiAgICAgICAgICAgICAgICB7IHR5cGU6ICdzZXBhcmF0b3InIH0sXG4gICAgICAgICAgICAgICAgeyByb2xlOiAnY3V0J30sXG4gICAgICAgICAgICAgICAgeyByb2xlOiAnY29weScgfSxcbiAgICAgICAgICAgICAgICB7IHJvbGU6ICdwYXN0ZScgfSxcbiAgICAgICAgICAgICAgICB7IHJvbGU6ICdwYXN0ZWFuZG1hdGNoc3R5bGUnIH0sXG4gICAgICAgICAgICAgICAgeyByb2xlOiAnc2VsZWN0YWxsJyB9LFxuICAgICAgICAgICAgICAgIHsgdHlwZTogJ3NlcGFyYXRvcicgfSxcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGxhYmVsOiAnQ2hhbmdlIFBhZ2VtYXJrIENvbHVtbiBUeXBlJyxcbiAgICAgICAgICAgICAgICAvLyAgICAgc3VibWVudTogW1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgeyBsYWJlbDogJ1NpbmdsZScsIH0sXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB7IGxhYmVsOiAnRG91YmxlJywgfSxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHsgbGFiZWw6ICdUcmlwbGUnLCB9LFxuICAgICAgICAgICAgICAgIC8vICAgICBdXG4gICAgICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUFubm90YXRlTWVudVRlbXBsYXRlKCkge1xuXG4gICAgICAgIC8vIFRPRE86IGNyZWF0ZSBwYWdlbWFya1xuICAgICAgICAvLyAgICAgICBNYXJrIGN1cnJlbnQgcGFnZSByZWFkXG4gICAgICAgIC8vICAgICAgIENyZWF0ZSBuZXcgcGFnZW1hcmtcbiAgICAgICAgLy9cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICBpZDogJ2Fubm90YXRlJyxcbiAgICAgICAgICAgbGFiZWw6ICdBbm5vdGF0ZScsXG4gICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgc3VibWVudTogW1xuICAgICAgICAgICAgICAgIHsgcm9sZTogJ3VuZG8nLCBlbmFibGVkOiBmYWxzZSwgdmlzaWJsZTogJ2ZhbHNlJ30sXG4gICAgICAgICAgICAgICAgeyByb2xlOiAncmVkbycgfSxcbiAgICAgICAgICAgICAgICAvLyB7IHR5cGU6ICdzZXBhcmF0b3InIH0sXG4gICAgICAgICAgICAgICAgLy8geyBsYWJlbDogJ0ZpbmQnLCBhY2NlbGVyYXRvcjogJ0NtZE9yQ3RybCtmJywgY2xpY2s6ICgpID0+XG4gICAgICAgICAgICAgICAgLy8gSW5QYWdlU2VhcmNoLmV4ZWN1dGUoKSB9LFxuICAgICAgICAgICAgICAgIHsgdHlwZTogJ3NlcGFyYXRvcicgfSxcbiAgICAgICAgICAgICAgICB7IHJvbGU6ICdjdXQnfSxcbiAgICAgICAgICAgICAgICB7IHJvbGU6ICdjb3B5JyB9LFxuICAgICAgICAgICAgICAgIHsgcm9sZTogJ3Bhc3RlJyB9LFxuICAgICAgICAgICAgICAgIHsgcm9sZTogJ3Bhc3RlYW5kbWF0Y2hzdHlsZScgfSxcbiAgICAgICAgICAgICAgICB7IHJvbGU6ICdzZWxlY3RhbGwnIH0sXG4gICAgICAgICAgICAgICAgeyB0eXBlOiAnc2VwYXJhdG9yJyB9LFxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgbGFiZWw6ICdDaGFuZ2UgUGFnZW1hcmsgQ29sdW1uIFR5cGUnLFxuICAgICAgICAgICAgICAgIC8vICAgICBzdWJtZW51OiBbXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB7IGxhYmVsOiAnU2luZ2xlJywgfSxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHsgbGFiZWw6ICdEb3VibGUnLCB9LFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgeyBsYWJlbDogJ1RyaXBsZScsIH0sXG4gICAgICAgICAgICAgICAgLy8gICAgIF1cbiAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBjcmVhdGVWaWV3TWVudVRlbXBsYXRlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6ICd2aWV3JyxcbiAgICAgICAgICAgIGxhYmVsOiAnVmlldycsXG4gICAgICAgICAgICBzdWJtZW51OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1JlbG9hZCcsXG4gICAgICAgICAgICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ21kT3JDdHJsK1InLFxuICAgICAgICAgICAgICAgICAgICBjbGljazogKGl0ZW06IEVsZWN0cm9uLk1lbnVJdGVtLCBmb2N1c2VkV2luZG93OiBCcm93c2VyV2luZG93KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9jdXNlZFdpbmRvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzZWRXaW5kb3cud2ViQ29udGVudHMucmVsb2FkSWdub3JpbmdDYWNoZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGxhYmVsOiAnQW5ub3RhdGlvbnMgU2lkZWJhcicsXG4gICAgICAgICAgICAgICAgLy8gICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgICAgICAgICAgLy8gICAgIGNsaWNrOiAoaXRlbTogRWxlY3Ryb24uTWVudUl0ZW0sIGZvY3VzZWRXaW5kb3c6XG4gICAgICAgICAgICAgICAgLy8gQnJvd3NlcldpbmRvdykgPT4geyBpZiAoZm9jdXNlZFdpbmRvdykge1xuICAgICAgICAgICAgICAgIC8vIGZvY3VzZWRXaW5kb3cuc2V0RnVsbFNjcmVlbighZm9jdXNlZFdpbmRvdy5pc0Z1bGxTY3JlZW4oKSk7XG4gICAgICAgICAgICAgICAgLy8gfSB9IH0sXG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAndG9nZ2xlLWFubm90YXRpb24tc2lkZWJhcicsXG4gICAgICAgICAgICAgICAgICAgIGFjY2VsZXJhdG9yOiAnRjEwJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdUb2dnbGUgQW5ub3RhdGlvbiBTaWRlYmFyJyxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiBBbm5vdGF0aW9uU2lkZWJhckNsaWVudC50b2dnbGVBbm5vdGF0aW9uU2lkZWJhcigpXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdUb2dnbGUgRnVsbCBTY3JlZW4nLFxuICAgICAgICAgICAgICAgICAgICBhY2NlbGVyYXRvcjogKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICdkYXJ3aW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdDdHJsK0NvbW1hbmQrRic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnRjExJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkoKSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IChpdGVtOiBFbGVjdHJvbi5NZW51SXRlbSwgZm9jdXNlZFdpbmRvdzogQnJvd3NlcldpbmRvdykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvY3VzZWRXaW5kb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c2VkV2luZG93LnNldEZ1bGxTY3JlZW4oIWZvY3VzZWRXaW5kb3cuaXNGdWxsU2NyZWVuKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVdpbmRvd01lbnVUZW1wbGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxhYmVsOiAnV2luZG93JyxcbiAgICAgICAgICAgIHJvbGU6ICd3aW5kb3cnLFxuICAgICAgICAgICAgc3VibWVudTogW1xuICAgICAgICAgICAgICAgIHsgcm9sZTogJ21pbmltaXplJyB9LFxuICAgICAgICAgICAgICAgIHsgcm9sZTogJ2Nsb3NlJyB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlVG9vbHNNZW51VGVtcGxhdGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogJ3Rvb2xzJyxcbiAgICAgICAgICAgIGxhYmVsOiAnVG9vbHMnLFxuICAgICAgICAgICAgc3VibWVudTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdEb2N1bWVudCBSZXBvc2l0b3J5JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IFByb21pc2VzLmV4ZWN1dGVMb2dnZWQoQXBwTGF1bmNoZXIubGF1bmNoUmVwb3NpdG9yeUFwcClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdzeW5jLWZsYXNoY2FyZHMtdG8tYW5raScsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnU3luYyBGbGFzaGNhcmRzIHRvIEFua2knLFxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgTWVzc2VuZ2VyLnBvc3RNZXNzYWdlKCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdGFydC1hbmtpLXN5bmNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIkNvdWxkIG5vdCBwb3N0IG1lc3NhZ2VcIiwgZXJyKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHt0eXBlOiAnc2VwYXJhdG9yJ30sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1RvZ2dsZSBEZXZlbG9wZXIgVG9vbHMnLFxuICAgICAgICAgICAgICAgICAgICBjbGljazogdGhpcy5tYWluQXBwQ29udHJvbGxlci5jbWRUb2dnbGVEZXZUb29sc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUhlbHBNZW51VGVtcGxhdGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogJ2hlbHAnLFxuICAgICAgICAgICAgbGFiZWw6ICdIZWxwJyxcbiAgICAgICAgICAgIHJvbGU6ICdoZWxwJyxcblxuICAgICAgICAgICAgc3VibWVudTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdBYm91dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB0aGlzLnNob3dIZWxwQWJvdXREaWFsb2coKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogJ0RvY3VtZW50YXRpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gc2hlbGwub3BlbkV4dGVybmFsKCdodHRwczovL2dldHBvbGFyaXplZC5pby9kb2NzLycpIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ2NoZWNrLWZvci11cGRhdGVzJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdDaGVjayBmb3IgVXBkYXRlcycsXG4gICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgc2hvdyBvbiBXaW5kb3dzIGFuZCBNYWNPUyBhcyBhbGwgb3RoZXIgcGxhdGZvcm1zXG4gICAgICAgICAgICAgICAgICAgIC8vIGhhdmUgdGhlaXIgb3duIGRpc3Qgc3lzdGVtIChmb3Igbm93KS5cbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogQXBwVXBkYXRlcy5wbGF0Zm9ybVN1cHBvcnRzVXBkYXRlcygpLFxuICAgICAgICAgICAgICAgICAgICBjbGljazogKGl0ZW06IEVsZWN0cm9uLk1lbnVJdGVtKSA9PiBVcGRhdGVzLmNoZWNrRm9yVXBkYXRlcyhpdGVtKSxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAge3R5cGU6ICdzZXBhcmF0b3InfSxcblxuICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdEb25hdGUnLFxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gc2hlbGwub3BlbkV4dGVybmFsKCdodHRwczovL29wZW5jb2xsZWN0aXZlLmNvbS9wb2xhci1ib29rc2hlbGYvZG9uYXRlJykgfSxcblxuICAgICAgICAgICAgICAgIHt0eXBlOiAnc2VwYXJhdG9yJ30sXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogJ0Rpc2NvcmQnLFxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gc2hlbGwub3BlbkV4dGVybmFsKCdodHRwczovL2Rpc2NvcmQuZ2cvR1Q4TWhBNicpIH0sXG5cbiAgICAgICAgICAgICAgICB7IGxhYmVsOiAnUmVkZGl0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHNoZWxsLm9wZW5FeHRlcm5hbCgnaHR0cHM6Ly93d3cucmVkZGl0LmNvbS9yL1BvbGFyQm9va3NoZWxmLycpIH0sXG5cbiAgICAgICAgICAgICAgICB7IGxhYmVsOiAnTGVhcm4gTW9yZScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiBzaGVsbC5vcGVuRXh0ZXJuYWwoJ2h0dHBzOi8vZ2l0aHViLmNvbS9idXJ0b25hdG9yL3BvbGFyLWJvb2tzaGVsZicpIH0sXG4gICAgICAgICAgICAgICAge3R5cGU6ICdzZXBhcmF0b3InfSxcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiAnQ29va2llIFBvbGljeScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiBzaGVsbC5vcGVuRXh0ZXJuYWwoJ2h0dHBzOi8vZ2V0cG9sYXJpemVkLmlvL2Nvb2tpZS1wb2xpY3kuaHRtbCcpIH0sXG5cbiAgICAgICAgICAgICAgICB7IGxhYmVsOiAnVGVybXMgb2YgU2VydmljZScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiBzaGVsbC5vcGVuRXh0ZXJuYWwoJ2h0dHBzOi8vZ2V0cG9sYXJpemVkLmlvL3Rlcm1zLW9mLXNlcnZpY2UuaHRtbCcpIH0sXG5cbiAgICAgICAgICAgICAgICB7IGxhYmVsOiAnUHJpdmFjeSBQb2xpY3knLFxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gc2hlbGwub3BlbkV4dGVybmFsKCdodHRwczovL2dldHBvbGFyaXplZC5pby9wcml2YWN5LXBvbGljeS5odG1sJykgfSxcblxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgc2hvd0hlbHBBYm91dERpYWxvZygpIHtcblxuICAgICAgICBkaWFsb2cuc2hvd01lc3NhZ2VCb3goQnJvd3NlcldpbmRvdy5nZXRGb2N1c2VkV2luZG93KCkhLCB7XG4gICAgICAgICAgICB0eXBlOiAnaW5mbycsXG4gICAgICAgICAgICBidXR0b25zOiBbJ09LJ10sXG4gICAgICAgICAgICB0aXRsZTogJ1BvbGFyJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMuY3JlYXRlQWJvdXRNZXNzYWdlKCksXG4gICAgICAgICAgICBkZXRhaWw6ICcnLFxuICAgICAgICAgICAgLy8gaWNvbjogQVBQX0lDT05cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cblxuXG4vLyBUT0RPOiB0aGlzIGlzIGEgc2hvcnQgdGVybSB3b3JrIGFyb3VuZCB0byBlbmFibGUgc2VsZWN0ZWQgb3B0aW9ucyBmcm9tIEpVU1Rcbi8vIHRoZSBlZGl0b3Igd2luZG93LlxuZXhwb3J0IGVudW0gTWFpbk1lbnVNb2RlIHtcbiAgICBET0NfUkVQT19BUFAsXG4gICAgVklFV0VSX0FQUFxufVxuIl19