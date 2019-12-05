"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
class Styles {
}
Styles.entries = {
    display: 'table',
    width: '100%'
};
Styles.entry = {
    display: 'table-row',
    width: '100%'
};
Styles.idx = {
    display: 'table-cell',
    fontWeight: 'bold',
    marginRight: '5px',
    fontSize: '22px',
    textAlign: 'right'
};
Styles.link = {
    display: 'table-cell',
    fontSize: '22px',
    textAlign: 'left',
    paddingLeft: '5px'
};
class TopPDFExample extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        for (const entry of entries) {
            entry.download = FilePaths_1.FilePaths.basename(entry.link);
        }
        let idx = 0;
        return React.createElement("div", { style: Styles.entries }, entries.map(entry => React.createElement("div", { key: idx++, style: Styles.entry },
            React.createElement("div", { style: Styles.idx },
                idx,
                "."),
            React.createElement("div", { style: Styles.link },
                React.createElement("a", { href: entry.link, download: entry.download }, entry.title)))));
    }
}
exports.TopPDFExample = TopPDFExample;
const entries = [
    {
        "title": "Norwegian Consumer Council report on how tech companies use dark patterns [pdf]",
        "score": 661,
        "link": "https:\/\/fil.forbrukerradet.no\/wp-content\/uploads\/2018\/06\/2018-06-27-deceived-by-design-final.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17406186"
    },
    {
        "title": "Assembly Language for Beginners [pdf]",
        "score": 590,
        "link": "https:\/\/yurichev.com\/writings\/AL4B-EN.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17549050"
    },
    {
        "title": "The Periodic Table of Data Structures [pdf]",
        "score": 534,
        "link": "https:\/\/stratos.seas.harvard.edu\/files\/stratos\/files\/periodictabledatastructures.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18314555"
    },
    {
        "title": "Competitive Programmer's Handbook (2017) [pdf]",
        "score": 514,
        "link": "https:\/\/cses.fi\/book.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16952222"
    },
    {
        "title": "DEF CON report on vulnerabilities in US election infrastructure [pdf]",
        "score": 509,
        "link": "https:\/\/defcon.org\/images\/defcon-26\/DEF%20CON%2026%20voting%20village%20report.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18112172"
    },
    {
        "title": "Original Source code for the Furby [pdf]",
        "score": 480,
        "link": "http:\/\/www.seanriddle.com\/furbysource.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17751599"
    },
    {
        "title": "Programming Paradigms for Dummies: What Every Programmer Should Know (2009) [pdf]",
        "score": 439,
        "link": "https:\/\/www.info.ucl.ac.be\/~pvr\/VanRoyChapter.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18381640"
    },
    {
        "title": "Selected Essays of Richard M. Stallman [pdf]",
        "score": 355,
        "link": "https:\/\/www.gnu.org\/philosophy\/fsfs\/rms-essays.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16927154"
    },
    {
        "title": "The Site Reliability Workbook: Practical Ways to Implement SRE [pdf]",
        "score": 351,
        "link": "https:\/\/services.google.com\/fh\/files\/misc\/the-site-reliability-workbook-next18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17614907"
    },
    {
        "title": "Intel Analysis of Speculative Execution Side Channels [pdf]",
        "score": 346,
        "link": "https:\/\/newsroom.intel.com\/wp-content\/uploads\/sites\/11\/2018\/01\/Intel-Analysis-of-Speculative-Execution-Side-Channels.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16079910"
    },
    {
        "title": "Vipassana for Hackers [pdf]",
        "score": 345,
        "link": "https:\/\/github.com\/deobald\/vipassana-for-hackers\/blob\/master\/vipassana-for-hackers.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16842040"
    },
    {
        "title": "Writing Network Drivers in Rust [pdf]",
        "score": 326,
        "link": "https:\/\/www.net.in.tum.de\/fileadmin\/bibtex\/publications\/theses\/2018-ixy-rust.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18405515"
    },
    {
        "title": "NSA posters from the 50s and 60s [pdf]",
        "score": 322,
        "link": "http:\/\/www.governmentattic.org\/28docs\/NSAsecurityPosters_1950s-60s.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17222827"
    },
    {
        "title": "iOS 11 Security [pdf]",
        "score": 321,
        "link": "https:\/\/www.apple.com\/business\/docs\/iOS_Security_Guide.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16140418"
    },
    {
        "title": "Cognitive Distortions of People Who Get Stuff Done (2012) [pdf]",
        "score": 318,
        "link": "https:\/\/pdfs.semanticscholar.org\/presentation\/1a59\/7a9ca8b03d86ae9a2f86dd90e7bbff481fab.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17532360"
    },
    {
        "title": "Apple T2 Security Chip: Security Overview [pdf]",
        "score": 317,
        "link": "https:\/\/www.apple.com\/mac\/docs\/Apple_T2_Security_Chip_Overview.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18337825"
    },
    {
        "title": "Uber Self-Driving Car That Struck Pedestrian Wasn\u2019t Set to Stop in an Emergency",
        "score": 314,
        "link": "https:\/\/www.ntsb.gov\/investigations\/AccidentReports\/Reports\/HWY18MH010-prelim.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17144160"
    },
    {
        "title": "The Awk Programming Language (1988) [pdf]",
        "score": 314,
        "link": "https:\/\/ia802309.us.archive.org\/25\/items\/pdfy-MgN0H1joIoDVoIC7\/The_AWK_Programming_Language.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17140934"
    },
    {
        "title": "The $25B eigenvector (2006) [pdf]",
        "score": 311,
        "link": "https:\/\/www.rose-hulman.edu\/~bryan\/googleFinalVersionFixed.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16091646"
    },
    {
        "title": "Teach Yourself Logic: A Study Guide [pdf]",
        "score": 307,
        "link": "https:\/\/www.logicmatters.net\/resources\/pdfs\/TeachYourselfLogic2017.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18757972"
    },
    {
        "title": "A C89 compiler that produces executables that are also valid ASCII text files [pdf]",
        "score": 297,
        "link": "http:\/\/www.cs.cmu.edu\/~tom7\/abc\/paper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16312317"
    },
    {
        "title": "Software-Defined Radio for Engineers [pdf]",
        "score": 292,
        "link": "http:\/\/www.analog.com\/media\/en\/training-seminars\/design-handbooks\/Software-Defined-Radio-for-Engineers-2018\/SDR4Engineers.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17399554"
    },
    {
        "title": "Notes on Discrete Mathematics (2017) [pdf]",
        "score": 287,
        "link": "http:\/\/www.cs.yale.edu\/homes\/aspnes\/classes\/202\/notes.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17391580"
    },
    {
        "title": "Set Theory and Algebra in CS: Introduction to Mathematical Modeling (2013) [pdf]",
        "score": 281,
        "link": "https:\/\/pdfs.semanticscholar.org\/d106\/6b6de601c1d7d5af25af3f7091bc7ad3ad51.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17840717"
    },
    {
        "title": "Testimony of Mark Zuckerberg \u2013 Hearing Before US House of Representatives [pdf]",
        "score": 280,
        "link": "http:\/\/docs.house.gov\/meetings\/IF\/IF00\/20180411\/108090\/HHRG-115-IF00-Wstate-ZuckerbergM-20180411.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16794058"
    },
    {
        "title": "Socioeconomic group classification based on user features [pdf]",
        "score": 279,
        "link": "http:\/\/pimg-faiw.uspto.gov\/fdd\/83\/2018\/28\/003\/0.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16866292"
    },
    {
        "title": " Apple Supplier List \u2013 Top 200 [pdf]",
        "score": 274,
        "link": "https:\/\/www.apple.com\/supplier-responsibility\/pdf\/Apple-Supplier-List.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18199170"
    },
    {
        "title": "Stellar Protocol: A Federated Model for Internet-Level Consensus (2016) [pdf]",
        "score": 263,
        "link": "https:\/\/www.stellar.org\/papers\/stellar-consensus-protocol.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16125920"
    },
    {
        "title": "How to Write a Technical Paper [pdf]",
        "score": 261,
        "link": "https:\/\/pdfs.semanticscholar.org\/441f\/ac7c2020e1c8f0d32adffca697bbb8a198a1.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18225197"
    },
    {
        "title": "The Making of Prince of Persia (2011) [pdf]",
        "score": 261,
        "link": "http:\/\/www.jordanmechner.com\/downloads\/makpopsample.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17845937"
    },
    {
        "title": "PID Without a PhD (2016) [pdf]",
        "score": 260,
        "link": "http:\/\/www.wescottdesign.com\/articles\/pid\/pidWithoutAPhd.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16257156"
    },
    {
        "title": "Principles of Algorithmic Problem Solving (2017) [pdf]",
        "score": 256,
        "link": "https:\/\/www.csc.kth.se\/~jsannemo\/slask\/main.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18287355"
    },
    {
        "title": "Public.resource.org wins appeal on right to publish the law [pdf]",
        "score": 248,
        "link": "https:\/\/www.cadc.uscourts.gov\/internet\/opinions.nsf\/533D47AF883C8194852582CD0052B8D4\/$file\/17-7035.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17579742"
    },
    {
        "title": "MIT Career Development Handbook [pdf]",
        "score": 248,
        "link": "https:\/\/gecd.mit.edu\/sites\/default\/files\/about\/files\/career-handbook.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17331316"
    },
    {
        "title": "Seven Puzzles You Think You Must Not Have Heard Correctly (2006) [pdf]",
        "score": 234,
        "link": "https:\/\/www.math.dartmouth.edu\/~pw\/solutions.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16998823"
    },
    {
        "title": "L-theanine, a constituent in tea, and its effect on mental state (2008) [pdf]",
        "score": 233,
        "link": "http:\/\/apjcn.nhri.org.tw\/server\/APJCN\/17%20Suppl%201\/\/167.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17644204"
    },
    {
        "title": "Self-Awareness for Introverts [pdf]",
        "score": 225,
        "link": "http:\/\/cliffc.org\/blog\/wp-content\/uploads\/2018\/05\/AWarOfWords.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17010199"
    },
    {
        "title": "House Oversight Committee Report on Equifax Breach [pdf]",
        "score": 221,
        "link": "https:\/\/oversight.house.gov\/wp-content\/uploads\/2018\/12\/Equifax-Report.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18651676"
    },
    {
        "title": "Apple File System Reference [pdf]",
        "score": 220,
        "link": "https:\/\/developer.apple.com\/support\/apple-file-system\/Apple-File-System-Reference.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18040742"
    },
    {
        "title": "The original pitch for Diablo (1994) [pdf]",
        "score": 219,
        "link": "http:\/\/www.graybeardgames.com\/download\/diablo_pitch.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16685795"
    },
    {
        "title": "Senator requests better https compliance at US Department of Defense [pdf]",
        "score": 216,
        "link": "https:\/\/www.wyden.senate.gov\/imo\/media\/doc\/wyden-web-encryption-letter-to-dod-cio.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17129093"
    },
    {
        "title": "Berkshire Hathaway 2017 Annual Letter [pdf]",
        "score": 216,
        "link": "http:\/\/www.berkshirehathaway.com\/letters\/2017ltr.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16453150"
    },
    {
        "title": "How to Be a Programmer: A Short, Comprehensive, and Personal Summary (2002) [pdf]",
        "score": 215,
        "link": "https:\/\/www.doc.ic.ac.uk\/~susan\/475\/HowToBeAProgrammer.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18742199"
    },
    {
        "title": "It Takes Two Neurons to Ride a Bicycle (2004)",
        "score": 212,
        "link": "http:\/\/paradise.caltech.edu\/~cook\/papers\/TwoNeurons.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16215130"
    },
    {
        "title": "United States v. Microsoft Corp. Dismissed [pdf]",
        "score": 207,
        "link": "https:\/\/www.supremecourt.gov\/opinions\/17pdf\/17-2_1824.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16858597"
    },
    {
        "title": "StarCraft: Remastered \u2013 Emulating a buffer overflow for fun and profit [pdf]",
        "score": 205,
        "link": "http:\/\/0xeb.net\/wp-content\/uploads\/2018\/02\/StarCraft_EUD_Emulator.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16305769"
    },
    {
        "title": "How to find hidden cameras (2002) [pdf]",
        "score": 203,
        "link": "http:\/\/www.tentacle.franken.de\/papers\/hiddencams.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16381592"
    },
    {
        "title": "The Evolution of C Programming Practices: A Study of Unix (2016) [pdf]",
        "score": 203,
        "link": "https:\/\/www2.dmst.aueb.gr\/dds\/pubs\/conf\/2016-ICSE-ProgEvol\/html\/SLK16.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17046332"
    },
    {
        "title": "Blockchains from a Distributed Computing Perspective [pdf]",
        "score": 202,
        "link": "http:\/\/cs.brown.edu\/courses\/csci2952-a\/papers\/perspective.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16191506"
    },
    {
        "title": "How to Architect a Query Compiler, Revisited [pdf]",
        "score": 201,
        "link": "https:\/\/www.cs.purdue.edu\/homes\/rompf\/papers\/tahboub-sigmod18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17851941"
    },
    {
        "title": "Foundations of Data Science [pdf]",
        "score": 198,
        "link": "http:\/\/www.cs.cornell.edu\/jeh\/book.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17131941"
    },
    {
        "title": "A Wandering Mind Is an Unhappy Mind (2010) [pdf]",
        "score": 197,
        "link": "https:\/\/greatergood.berkeley.edu\/images\/application_uploads\/KILLINGSWORTH-WanderingMind.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16797947"
    },
    {
        "title": "Comparing Languages for Engineering Server Software: Erlang, Go, and Scala\/Akka [pdf]",
        "score": 194,
        "link": "http:\/\/www.dcs.gla.ac.uk\/~trinder\/papers\/sac-18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17342276"
    },
    {
        "title": "Bumper Sticker Computer Science (1985) [pdf]",
        "score": 193,
        "link": "http:\/\/www.bowdoin.edu\/~ltoma\/teaching\/cs340\/spring05\/coursestuff\/Bentley_BumperSticker.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17794507"
    },
    {
        "title": "Facebook Q1 2018 Earnings Slides [pdf]",
        "score": 191,
        "link": "https:\/\/investor.fb.com\/files\/doc_financials\/2018\/Q1\/Q1-2018-Earnings-Presentation-(1).pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16925671"
    },
    {
        "title": "Introduction to OS Abstractions Using Plan 9 from Bell Labs (2007) [pdf]",
        "score": 191,
        "link": "https:\/\/lsub.org\/who\/nemo\/9.intro.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16253193"
    },
    {
        "title": "Microsoft Word for Windows 1.0 Postmortem (1989) [pdf]",
        "score": 190,
        "link": "http:\/\/antitrust.slated.org\/www.iowaconsumercase.org\/011607\/8000\/PX08875.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18764790"
    },
    {
        "title": "Architecture of a Database System (2007) [pdf]",
        "score": 189,
        "link": "http:\/\/db.cs.berkeley.edu\/papers\/fntdb07-architecture.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17190947"
    },
    {
        "title": "Money creation in the modern economy (2014) [pdf]",
        "score": 189,
        "link": "https:\/\/www.bankofengland.co.uk\/-\/media\/boe\/files\/quarterly-bulletin\/2014\/money-creation-in-the-modern-economy.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16604251"
    },
    {
        "title": "Exploiting modern microarchitectures: Meltdown, Spectre, and other attacks [pdf]",
        "score": 189,
        "link": "http:\/\/people.redhat.com\/jcm\/talks\/FOSDEM_2018.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16304460"
    },
    {
        "title": "Bayes\u2019 Theorem in the 21st Century (2013) [pdf]",
        "score": 185,
        "link": "http:\/\/web.ipac.caltech.edu\/staff\/fmasci\/home\/astro_refs\/Science-2013-Efron.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18213117"
    },
    {
        "title": "How to scale a distributed system [pdf]",
        "score": 184,
        "link": "https:\/\/cdn.oreillystatic.com\/en\/assets\/1\/event\/244\/How%20to%20scale%20a%20distributed%20system%20Presentation.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17529780"
    },
    {
        "title": "How to write Mathematics (1970) [pdf]",
        "score": 182,
        "link": "http:\/\/www.math.utah.edu\/~pa\/3000\/halmos.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16829440"
    },
    {
        "title": "How Rust Is Tilde\u2019s Competitive Advantage [pdf]",
        "score": 177,
        "link": "https:\/\/www.rust-lang.org\/pdfs\/Rust-Tilde-Whitepaper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16317722"
    },
    {
        "title": "Rendered Insecure: GPU Side Channel Attacks Are Practical [pdf]",
        "score": 174,
        "link": "http:\/\/www.cs.ucr.edu\/~zhiyunq\/pub\/ccs18_gpu_side_channel.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18449672"
    },
    {
        "title": "The Rate of Return on Everything, 1870\u20132015 [pdf]",
        "score": 168,
        "link": "https:\/\/www.frbsf.org\/economic-research\/files\/wp2017-25.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16078059"
    },
    {
        "title": "Speech and Language Processing, 3rd Edition [pdf]",
        "score": 167,
        "link": "https:\/\/web.stanford.edu\/~jurafsky\/slp3\/ed3book.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16104868"
    },
    {
        "title": "MtGox: Announcement of Commencement of Civil Rehabilitation Proceedings [pdf]",
        "score": 167,
        "link": "https:\/\/www.mtgox.com\/img\/pdf\/20180622_announcement_en.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17373857"
    },
    {
        "title": "Towards a Type System for Containers and AWS Lambda to Avoid Failures [pdf]",
        "score": 167,
        "link": "http:\/\/christophermeiklejohn.com\/publications\/hotedge-2018-containers-preprint.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16746315"
    },
    {
        "title": "Alphabet Announces Second Quarter 2018 Results [pdf]",
        "score": 166,
        "link": "https:\/\/abc.xyz\/investor\/pdf\/2018Q2_alphabet_earnings_release.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17595510"
    },
    {
        "title": "Evolution of Emacs Lisp [pdf]",
        "score": 165,
        "link": "https:\/\/www.iro.umontreal.ca\/~monnier\/hopl-4-emacs-lisp.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18267285"
    },
    {
        "title": "Kademlia: A Peer-To-peer Information System Based on the XOR Metric (2002) [pdf]",
        "score": 165,
        "link": "https:\/\/pdos.csail.mit.edu\/~petar\/papers\/maymounkov-kademlia-lncs.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18711980"
    },
    {
        "title": "Deep image reconstruction from human brain activity [pdf]",
        "score": 165,
        "link": "https:\/\/www.biorxiv.org\/content\/biorxiv\/early\/2017\/12\/30\/240317.full.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16140054"
    },
    {
        "title": "A Lisp Way to Type Theory and Formal Proofs (2017) [pdf]",
        "score": 164,
        "link": "https:\/\/www.european-lisp-symposium.org\/static\/2017\/peschanski.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18383654"
    },
    {
        "title": "Computer Science I [pdf]",
        "score": 163,
        "link": "http:\/\/cse.unl.edu\/~cbourke\/ComputerScienceOne.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16053015"
    },
    {
        "title": "IEEE Position Statement in Support of Strong Encryption [pdf]",
        "score": 162,
        "link": "http:\/\/globalpolicy.ieee.org\/wp-content\/uploads\/2018\/06\/IEEE18006.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17408494"
    },
    {
        "title": "The Economic Limits of Bitcoin and the Blockchain [pdf]",
        "score": 161,
        "link": "http:\/\/faculty.chicagobooth.edu\/eric.budish\/research\/Economic-Limits-Bitcoin-Blockchain.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17394262"
    },
    {
        "title": "Show HN: Software Architecture, all you need to know [pdf]",
        "score": 161,
        "link": "https:\/\/share.composieux.fr\/white-book-software-architecture.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18761609"
    },
    {
        "title": "Math from Three to Seven: The Story of a Mathematical Circle for Preschoolers [pdf]",
        "score": 161,
        "link": "http:\/\/www.msri.org\/people\/staff\/levy\/files\/MCL\/Zvonkin.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17018583"
    },
    {
        "title": "Breakout implemented in JavaScript in a PDF",
        "score": 160,
        "link": "https:\/\/rawgit.com\/osnr\/horrifying-pdf-experiments\/master\/breakout.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17915296"
    },
    {
        "title": "The Mathematics of Quantum Mechanics [pdf]",
        "score": 160,
        "link": "https:\/\/uwaterloo.ca\/institute-for-quantum-computing\/sites\/ca.institute-for-quantum-computing\/files\/uploads\/files\/mathematics_qm_v21.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18046343"
    },
    {
        "title": "Going IPv6 Only [pdf]",
        "score": 158,
        "link": "https:\/\/pc.nanog.org\/static\/published\/meetings\/NANOG73\/1645\/20180625_Lagerholm_T-Mobile_S_Journey_To_v1.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17399884"
    },
    {
        "title": "The Basic Ideas in Neural Networks (1994) [pdf]",
        "score": 155,
        "link": "http:\/\/www-isl.stanford.edu\/~widrow\/papers\/j1994thebasic.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16112464"
    },
    {
        "title": "NIST: Blockchain Technology Overview [pdf]",
        "score": 154,
        "link": "https:\/\/nvlpubs.nist.gov\/nistpubs\/ir\/2018\/NIST.IR.8202.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18157363"
    },
    {
        "title": "Do you need a blockchain?",
        "score": 153,
        "link": "https:\/\/eprint.iacr.org\/2017\/375.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16315456"
    },
    {
        "title": "Writing Network Drivers in Go [pdf]",
        "score": 152,
        "link": "https:\/\/www.net.in.tum.de\/fileadmin\/bibtex\/publications\/theses\/2018-ixy-go.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18399389"
    },
    {
        "title": "Introduction to Functional Programming (1988) [pdf]",
        "score": 150,
        "link": "http:\/\/usi-pl.github.io\/lc\/sp-2015\/doc\/Bird_Wadler.%20Introduction%20to%20Functional%20Programming.1ed.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16471372"
    },
    {
        "title": "DeepLog: Anomaly Detection and Diagnosis from System Logs (2017) [pdf]",
        "score": 149,
        "link": "https:\/\/acmccs.github.io\/papers\/p1285-duA.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17506265"
    },
    {
        "title": "Firefox: The Effect of Ad Blocking on User Engagement with the Web [pdf]",
        "score": 149,
        "link": "https:\/\/research.mozilla.org\/files\/2018\/04\/The-Effect-of-Ad-Blocking-on-User-Engagement-with-the-Web.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18105375"
    },
    {
        "title": "Setting Up a Cayman Islands Company [pdf]",
        "score": 147,
        "link": "https:\/\/www.stuartslaw.com\/cms\/document\/Setting_up_a_Cayman_Islands_Company.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16807765"
    },
    {
        "title": "The Jury Is In: Monolithic OS Design Is Flawed [pdf]",
        "score": 147,
        "link": "http:\/\/ts.data61.csiro.au\/publications\/csiro_full_text\/Biggs_LH_18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17767060"
    },
    {
        "title": "Modern Code Review: A Case Study at Google [pdf]",
        "score": 146,
        "link": "https:\/\/sback.it\/publications\/icse2018seip.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18035548"
    },
    {
        "title": "Analysis of USB fan given to journalists at North Korea-Singapore Summit [pdf]",
        "score": 145,
        "link": "http:\/\/www.cl.cam.ac.uk\/~sps32\/usb_fan_report.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17459041"
    },
    {
        "title": "Email exchange between MIT Media Lab and the IOTA Foundation [pdf]",
        "score": 144,
        "link": "http:\/\/www.tangleblog.com\/wp-content\/uploads\/2018\/02\/letters.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16457120"
    },
    {
        "title": "Linear logic and deep learning [pdf]",
        "score": 142,
        "link": "http:\/\/therisingsea.org\/notes\/talk-lldl-transcript.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16255612"
    },
    {
        "title": "Reviving Smalltalk-78 (2014) [pdf]",
        "score": 142,
        "link": "http:\/\/freudenbergs.de\/bert\/publications\/Ingalls-2014-Smalltalk78.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17055960"
    },
    {
        "title": "Bandit Algorithms Book [pdf]",
        "score": 141,
        "link": "http:\/\/downloads.tor-lattimore.com\/banditbook\/book.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17642564"
    },
    {
        "title": "Why Philosophers Should Care About Computational Complexity (2011) [pdf]",
        "score": 140,
        "link": "https:\/\/www.scottaaronson.com\/papers\/philos.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17573142"
    },
    {
        "title": "Log(Graph): A Near-Optimal High-Performance Graph Representation (2018) [pdf]",
        "score": 140,
        "link": "https:\/\/people.csail.mit.edu\/jshun\/papers\/loggraph.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18081978"
    },
    {
        "title": "Seven Pillars of Causal Reasoning with Reflections on Machine Learning [pdf]",
        "score": 140,
        "link": "http:\/\/ftp.cs.ucla.edu\/pub\/stat_ser\/r481.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17187306"
    },
    {
        "title": "The physics of baking good pizza [pdf]",
        "score": 140,
        "link": "https:\/\/arxiv.org\/ftp\/arxiv\/papers\/1806\/1806.08790.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17437229"
    },
    {
        "title": "Get Billions of Correct Digits of Pi from a Wrong Formula (1999) [pdf]",
        "score": 140,
        "link": "https:\/\/academics.rowan.edu\/csm\/departments\/math\/facultystaff\/faculty\/osler\/Billions_pi_digits.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18040630"
    },
    {
        "title": "Advanced Data Analysis from an Elementary Point of View (2017) [pdf]",
        "score": 139,
        "link": "http:\/\/www.stat.cmu.edu\/~cshalizi\/ADAfaEPoV\/ADAfaEPoV.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16410936"
    },
    {
        "title": "Freenet: A Distributed Anonymous Information Storage and Retrieval System (2000) [pdf]",
        "score": 138,
        "link": "http:\/\/snap.stanford.edu\/class\/cs224w-readings\/clarke00freenet.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18709383"
    },
    {
        "title": "The Simple Essence of Automatic Differentiation [pdf]",
        "score": 137,
        "link": "http:\/\/conal.net\/papers\/essence-of-ad\/essence-of-ad-icfp.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18306860"
    },
    {
        "title": "Programming Paradigms and Beyond [pdf]",
        "score": 137,
        "link": "http:\/\/cs.brown.edu\/~sk\/Publications\/Papers\/Published\/kf-prog-paradigms-and-beyond\/paper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17382365"
    },
    {
        "title": "Alphabet Q1 2018 Earnings [pdf]",
        "score": 135,
        "link": "https:\/\/abc.xyz\/investor\/pdf\/2018Q1_alphabet_earnings_release.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16907007"
    },
    {
        "title": "State of Multicore OCaml [pdf]",
        "score": 135,
        "link": "http:\/\/kcsrk.info\/slides\/mcocaml_gallium.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17416797"
    },
    {
        "title": "The Meta-Problem of Consciousness [pdf]",
        "score": 131,
        "link": "https:\/\/philpapers.org\/archive\/CHATMO-32.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16360199"
    },
    {
        "title": "What do Stanford CS PhD students think of their PhD program? [pdf]",
        "score": 130,
        "link": "https:\/\/archive.org\/download\/phd_student_survey_summary_report_0a5c\/phd_student_survey_summary_report_0a5c.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17493963"
    },
    {
        "title": "The weird and wonderful world of constructive mathematics (2017) [pdf]",
        "score": 130,
        "link": "https:\/\/home.sandiego.edu\/~shulman\/papers\/rabbithole.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18411935"
    },
    {
        "title": "Low-Latency Video Processing Using Thousands of Tiny Threads [pdf]",
        "score": 130,
        "link": "https:\/\/www.usenix.org\/system\/files\/conference\/nsdi17\/nsdi17-fouladi.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16197253"
    },
    {
        "title": "Self-encrypting deception: weaknesses in the encryption of solid state drives [pdf]",
        "score": 129,
        "link": "https:\/\/www.ru.nl\/publish\/pages\/909275\/draft-paper_1.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18382975"
    },
    {
        "title": "C++ Core Coroutines Proposal [pdf]",
        "score": 128,
        "link": "http:\/\/www.open-std.org\/jtc1\/sc22\/wg21\/docs\/papers\/2018\/p1063r0.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18036748"
    },
    {
        "title": "Power Laws and Rich-Get-Richer Phenomena (2010) [pdf]",
        "score": 127,
        "link": "http:\/\/www.cs.cornell.edu\/home\/kleinber\/networks-book\/networks-book-ch18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17199766"
    },
    {
        "title": "A Taste of Linear Logic (1993) [pdf]",
        "score": 126,
        "link": "https:\/\/homepages.inf.ed.ac.uk\/wadler\/papers\/lineartaste\/lineartaste-revised.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17641476"
    },
    {
        "title": "An Analysis of the Impact of Arbitrary Blockchain Content on Bitcoin [pdf]",
        "score": 125,
        "link": "https:\/\/fc18.ifca.ai\/preproceedings\/6.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16617136"
    },
    {
        "title": "PolarFS: Alibaba Distributed File System for Shared Storage Cloud Database [pdf]",
        "score": 122,
        "link": "http:\/\/www.vldb.org\/pvldb\/vol11\/p1849-cao.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17814185"
    },
    {
        "title": "Notation as a Tool of Thought (1979) [pdf]",
        "score": 121,
        "link": "http:\/\/www.eecg.toronto.edu\/~jzhu\/csc326\/readings\/iverson.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16842378"
    },
    {
        "title": "Mindfulness Meditation Impairs Task Motivation but Not Performance [pdf]",
        "score": 120,
        "link": "https:\/\/sci-hub.tw\/downloads\/2310\/10.1016@j.obhdp.2018.05.001.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17342639"
    },
    {
        "title": "Fallacies of Distributed Computing Explained (2006) [pdf]",
        "score": 119,
        "link": "http:\/\/www.rgoarchitects.com\/Files\/fallacies.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17505927"
    },
    {
        "title": "Fuzzing the OpenBSD Kernel [pdf]",
        "score": 119,
        "link": "https:\/\/www.openbsd.org\/papers\/fuzz-slides.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17929234"
    },
    {
        "title": "The conceptual origins of Maxwell's equations and gauge theory (2014) [pdf]",
        "score": 117,
        "link": "http:\/\/www.physics.umd.edu\/grt\/taj\/675e\/OriginsofMaxwellandGauge.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16325605"
    },
    {
        "title": "The Birth of Prolog (1992) [pdf]",
        "score": 117,
        "link": "https:\/\/web.stanford.edu\/class\/linguist289\/p37-colmerauer.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18178215"
    },
    {
        "title": "Is IPv6 only for the Rich? [pdf]",
        "score": 116,
        "link": "https:\/\/ripe76.ripe.net\/presentations\/9-2018-05-17-ipv6-reasons.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17060437"
    },
    {
        "title": "One parameter is always enough [pdf]",
        "score": 116,
        "link": "http:\/\/colala.bcs.rochester.edu\/papers\/piantadosi2018one.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17161032"
    },
    {
        "title": "A Plan 9 C compiler for RISC-V [pdf]",
        "score": 115,
        "link": "https:\/\/www.geeklan.co.uk\/files\/oshug69-Miller-criscv.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18308255"
    },
    {
        "title": "Security Analysis of WireGuard [pdf]",
        "score": 115,
        "link": "https:\/\/courses.csail.mit.edu\/6.857\/2018\/project\/He-Xu-Xu-WireGuard.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17883269"
    },
    {
        "title": "Automatic Differentiation in Machine Learning: A Survey [pdf]",
        "score": 114,
        "link": "http:\/\/jmlr.org\/papers\/volume18\/17-468\/17-468.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18491208"
    },
    {
        "title": "Pledge and Unveil in OpenBSD [pdf]",
        "score": 114,
        "link": "https:\/\/www.openbsd.org\/papers\/BeckPledgeUnveilBSDCan2018.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17277067"
    },
    {
        "title": "Using Prediction Markets to Track Information Flows:  Evidence from Google [pdf]",
        "score": 113,
        "link": "https:\/\/www.stat.berkeley.edu\/users\/aldous\/157\/Papers\/GooglePredictionMarketPaper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17015055"
    },
    {
        "title": "There\u2019s a Hole in the Bottom of the C: Effectiveness of Allocation Protection [pdf]",
        "score": 113,
        "link": "http:\/\/web.mit.edu\/ha22286\/www\/papers\/SecDev18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18442578"
    },
    {
        "title": "NetSpectre: Read Arbitrary Memory Over Network [pdf]",
        "score": 112,
        "link": "https:\/\/misc0110.net\/web\/files\/netspectre.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17621823"
    },
    {
        "title": "The Byzantine Generals Problem (1982) [pdf]",
        "score": 112,
        "link": "https:\/\/lamport.azurewebsites.net\/pubs\/byz.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17702640"
    },
    {
        "title": "A plea for lean software (1995) [pdf]",
        "score": 111,
        "link": "https:\/\/cr.yp.to\/bib\/1995\/wirth.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17872400"
    },
    {
        "title": "Abstract of the NTSB Report on Air Canada flight 759's taxiway overflight at SFO [pdf]",
        "score": 111,
        "link": "https:\/\/ntsb.gov\/news\/events\/Documents\/DCA17IA148-Abstract.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18071966"
    },
    {
        "title": "Motorola M68000 Family Programmer\u2019s Reference Manual (1992) [pdf]",
        "score": 110,
        "link": "http:\/\/cache.nxp.com\/docs\/en\/reference-manual\/M68000PM.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17076962"
    },
    {
        "title": "Dissecting QNX [pdf]",
        "score": 110,
        "link": "https:\/\/www.blackhat.com\/docs\/asia-18\/asia-18-Wetzels_Abassi_dissecting_qnx__WP.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18013158"
    },
    {
        "title": "The Foundations of Mathematics (2007) [pdf]",
        "score": 109,
        "link": "https:\/\/www.math.wisc.edu\/~miller\/old\/m771-10\/kunen770.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16078514"
    },
    {
        "title": "Oberon System Implemented on a Low-Cost FPGA Board (2015) [pdf]",
        "score": 109,
        "link": "https:\/\/pdfs.semanticscholar.org\/2c11\/7c1456eb96bbea19aa3c8b018de4fc9387bc.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17933881"
    },
    {
        "title": "Why Minimal Guidance During Instruction Does Not Work (2006) [pdf]",
        "score": 109,
        "link": "http:\/\/www.cogtech.usc.edu\/publications\/kirschner_Sweller_Clark.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18217245"
    },
    {
        "title": "Efficient Methods and Hardware for Deep Learning [pdf]",
        "score": 109,
        "link": "http:\/\/cs231n.stanford.edu\/slides\/2017\/cs231n_2017_lecture15.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17617870"
    },
    {
        "title": "Google\u2019s secret and Linear Algebra (2004) [pdf]",
        "score": 107,
        "link": "http:\/\/verso.mat.uam.es\/~pablo.fernandez\/ems63-pablo-fernandez_final.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18298608"
    },
    {
        "title": "The Art of Approximation in Science and Engineering [pdf]",
        "score": 106,
        "link": "http:\/\/web.mit.edu\/6.055\/book\/book-draft.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18099596"
    },
    {
        "title": "Towards an optical FPGA \u2013 Programmable silicon photonic circuits [pdf]",
        "score": 106,
        "link": "https:\/\/arxiv.org\/ftp\/arxiv\/papers\/1807\/1807.01656.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17488838"
    },
    {
        "title": "Pythran: Crossing the Python Frontier [pdf]",
        "score": 105,
        "link": "https:\/\/www.computer.org\/csdl\/mags\/cs\/2018\/02\/mcs2018020083.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16910446"
    },
    {
        "title": "What's hidden in the hidden layers? (1989) [pdf]",
        "score": 105,
        "link": "https:\/\/www.cs.cmu.edu\/~dst\/pubs\/byte-hiddenlayer-1989.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16048710"
    },
    {
        "title": "The Haskell School of Music \u2013 From Signals to Symphonies (2014) [pdf]",
        "score": 105,
        "link": "http:\/\/haskell.cs.yale.edu\/wp-content\/uploads\/2015\/03\/HSoM.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17517285"
    },
    {
        "title": "Giftedness and Genius: Crucial Differences (1996) [pdf]",
        "score": 105,
        "link": "https:\/\/www.gwern.net\/docs\/iq\/1996-jensen.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16350293"
    },
    {
        "title": "Sketchpad: A man-machine graphical communication system (1963) [pdf]",
        "score": 104,
        "link": "https:\/\/www.cl.cam.ac.uk\/techreports\/UCAM-CL-TR-574.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17354764"
    },
    {
        "title": "The Future of Computing: Logic or Biology (2003) [pdf]",
        "score": 104,
        "link": "https:\/\/lamport.azurewebsites.net\/pubs\/future-of-computing.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17457213"
    },
    {
        "title": "Predicting Price Changes in Ethereum (2017) [pdf]",
        "score": 104,
        "link": "http:\/\/cs229.stanford.edu\/proj2017\/final-reports\/5244039.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17272328"
    },
    {
        "title": "An Introduction to Mathematical Optimal Control Theory [pdf]",
        "score": 103,
        "link": "https:\/\/math.berkeley.edu\/~evans\/control.course.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17585777"
    },
    {
        "title": "Mindstorms: Children, Computers, and Powerful Ideas (1980) [pdf]",
        "score": 103,
        "link": "http:\/\/worrydream.com\/refs\/Papert%20-%20Mindstorms%201st%20ed.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18361665"
    },
    {
        "title": "Functional Bits: Lambda-calculus based algorithmic information theory [pdf]",
        "score": 103,
        "link": "https:\/\/tromp.github.io\/cl\/LC.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17726545"
    },
    {
        "title": "The Effects of Computer Use on Eye Health and Vision (1997) [pdf]",
        "score": 102,
        "link": "https:\/\/www.aoa.org\/Documents\/optometrists\/effects-of-computer-use.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16146106"
    },
    {
        "title": "Actor Model of Computation (2010) [pdf]",
        "score": 102,
        "link": "https:\/\/arxiv.org\/vc\/arxiv\/papers\/1008\/1008.1459v8.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17667323"
    },
    {
        "title": "Exploiting URL Parser in Programming Languages (2017) [pdf]",
        "score": 102,
        "link": "https:\/\/www.blackhat.com\/docs\/us-17\/thursday\/us-17-Tsai-A-New-Era-Of-SSRF-Exploiting-URL-Parser-In-Trending-Programming-Languages.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17955626"
    },
    {
        "title": "Border Search of Electronic Devices \u2013 CBP Directive [pdf]",
        "score": 101,
        "link": "https:\/\/www.cbp.gov\/sites\/default\/files\/assets\/documents\/2018-Jan\/cbp-directive-3340-049a-border-search-electronic-media.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16084820"
    },
    {
        "title": "Physics as a Way of Thinking (1936) [pdf]",
        "score": 101,
        "link": "https:\/\/kb.osu.edu\/dspace\/bitstream\/handle\/1811\/72567\/OSLJ_V2N3_0241.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17396205"
    },
    {
        "title": "Web Prolog and the Programmable Prolog Web [pdf]",
        "score": 100,
        "link": "https:\/\/github.com\/Web-Prolog\/swi-web-prolog\/blob\/master\/web-client\/apps\/swish\/web-prolog.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17288493"
    },
    {
        "title": "Fifty Years of Shannon Theory (1998) [pdf]",
        "score": 100,
        "link": "https:\/\/www.princeton.edu\/~verdu\/reprints\/IT44.6.2057-2078.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16130297"
    },
    {
        "title": "Unskilled and Unaware of It (1999) [pdf]",
        "score": 99,
        "link": "http:\/\/psych.colorado.edu\/~vanboven\/teaching\/p7536_heurbias\/p7536_readings\/kruger_dunning.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16125060"
    },
    {
        "title": "Non-Recursive Make Considered Harmful: Build Systems at Scale (2016) [pdf]",
        "score": 99,
        "link": "https:\/\/ndmitchell.com\/downloads\/paper-non_recursive_make_considered_harmful-22_sep_2016.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17088328"
    },
    {
        "title": "Debugging across pipes and sockets with strace [pdf]",
        "score": 98,
        "link": "https:\/\/github.com\/nh2\/strace-pipes-presentation\/blob\/master\/presentation\/Debugging%20across%20pipes%20and%20sockets%20with%20strace.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16708392"
    },
    {
        "title": "A History of the Erlang VM (2011) [pdf]",
        "score": 97,
        "link": "http:\/\/www.erlang-factory.com\/upload\/presentations\/389\/EFSF11-ErlangVM.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16214996"
    },
    {
        "title": "How to do with probabilities what people say you can\u2019t (1985) [pdf]",
        "score": 97,
        "link": "https:\/\/ftp.cs.ucla.edu\/pub\/stat_ser\/r49.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18663223"
    },
    {
        "title": "Police Use of Force: An Examination of Modern Policing Practices [pdf]",
        "score": 97,
        "link": "https:\/\/www.usccr.gov\/pubs\/2018\/11-15-Police-Force.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18546038"
    },
    {
        "title": "Single-decryption EM-based attack reveals private keys from Android phones [pdf]",
        "score": 97,
        "link": "https:\/\/www.usenix.org\/system\/files\/conference\/usenixsecurity18\/sec18-alam.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17817966"
    },
    {
        "title": "Efficient Hot-Water Piping (2013) [pdf]",
        "score": 95,
        "link": "http:\/\/www.garykleinassociates.com\/PDFs\/15%20-%20Efficient%20Hot-Water%20Piping-JLC.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16540802"
    },
    {
        "title": "Scientists warn of potential serious health effects of 5G (2017) [pdf]",
        "score": 95,
        "link": "https:\/\/ehtrust.org\/wp-content\/uploads\/Scientist-5G-appeal-2017.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17967372"
    },
    {
        "title": "A micro manual for Lisp \u2013 Not the whole truth (1978) [pdf]",
        "score": 95,
        "link": "http:\/\/www.ee.ryerson.ca\/~elf\/pub\/misc\/micromanualLISP.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17958413"
    },
    {
        "title": "Everything You Wanted to Know About Synchronization (2013) [pdf]",
        "score": 95,
        "link": "http:\/\/sigops.org\/sosp\/sosp13\/papers\/p33-david.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16859719"
    },
    {
        "title": "The Strong Free Will Theorem (2009) [pdf]",
        "score": 94,
        "link": "http:\/\/www.ams.org\/notices\/200902\/rtx090200226p.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18392040"
    },
    {
        "title": "The art of Virtual Analog filter design [pdf]",
        "score": 93,
        "link": "https:\/\/www.native-instruments.com\/fileadmin\/ni_media\/downloads\/pdf\/VAFilterDesign_2.1.0.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18346463"
    },
    {
        "title": "Human-Centric Tools for Navigating Code [pdf]",
        "score": 93,
        "link": "http:\/\/web.eecs.utk.edu\/~azh\/pubs\/Henley2018bDissertation.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18648580"
    },
    {
        "title": "Every Good Regulator of a System Must Be a Model of That System (1970) [pdf]",
        "score": 92,
        "link": "http:\/\/pespmc1.vub.ac.be\/books\/Conant_Ashby.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16545537"
    },
    {
        "title": "Case Studies Where Phase 2 and Phase 3 Trials had Divergent Results [pdf]",
        "score": 92,
        "link": "https:\/\/www.fda.gov\/downloads\/AboutFDA\/ReportsManualsForms\/Reports\/UCM535780.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17568712"
    },
    {
        "title": "802.11 with Multiple Antennas for Dummies (2009) [pdf]",
        "score": 92,
        "link": "https:\/\/djw.cs.washington.edu\/papers\/mimo_for_dummies.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17290302"
    },
    {
        "title": "Self-Regulated Learning: Beliefs, Techniques, and Illusions [pdf]",
        "score": 92,
        "link": "http:\/\/www.excaliburtsa.org.uk\/wp-content\/uploads\/2017\/11\/Self-regulated-learning-Bjork.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17462633"
    },
    {
        "title": "Scikit-learn user guide (2017) [pdf]",
        "score": 92,
        "link": "http:\/\/scikit-learn.org\/stable\/_downloads\/scikit-learn-docs.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17430673"
    },
    {
        "title": "$vau: the ultimate abstraction (2010) [pdf]",
        "score": 92,
        "link": "https:\/\/web.wpi.edu\/Pubs\/ETD\/Available\/etd-090110-124904\/unrestricted\/jshutt.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18405014"
    },
    {
        "title": "Design of a low-level C++ template SIMD library [pdf]",
        "score": 91,
        "link": "https:\/\/www.ti.uni-bielefeld.de\/downloads\/publications\/templateSIMD.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16050021"
    },
    {
        "title": "A Template for Understanding How the Economic Machine Works (2011) [pdf]",
        "score": 91,
        "link": "https:\/\/media.economist.com\/sites\/default\/files\/pdfs\/A_Template_for_Understanding_-_Ray_Dalio__Bridgewater.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17962136"
    },
    {
        "title": "Do Developers Understand IEEE Floating Point? [pdf]",
        "score": 91,
        "link": "http:\/\/pdinda.org\/Papers\/ipdps18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18761944"
    },
    {
        "title": "Collective hallucination and inefficient markets: The Railway Mania of the 1840s [pdf]",
        "score": 91,
        "link": "http:\/\/www.dtc.umn.edu\/~odlyzko\/doc\/hallucinations.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16145157"
    },
    {
        "title": "Newton\u2019s Financial Misadventures in the South Sea Bubble [pdf]",
        "score": 91,
        "link": "http:\/\/www.dtc.umn.edu\/~odlyzko\/doc\/mania13.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16245284"
    },
    {
        "title": "MeltdownPrime, SpectrePrime: Exploiting Invalidation-Based Coherence Protocols",
        "score": 90,
        "link": "https:\/\/arxiv.org\/pdf\/1802.03802.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16430215"
    },
    {
        "title": "JITing PostgreSQL using LLVM [pdf]",
        "score": 90,
        "link": "http:\/\/anarazel.de\/talks\/fosdem-2018-02-03\/jit.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16299632"
    },
    {
        "title": "The Evolution of Bitcoin Hardware [pdf]",
        "score": 89,
        "link": "http:\/\/cseweb.ucsd.edu\/~mbtaylor\/papers\/Taylor_Bitcoin_IEEE_Computer_2017.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16289074"
    },
    {
        "title": "Everything You Always Wanted to Know About Optical Networking [pdf]",
        "score": 89,
        "link": "https:\/\/www.nanog.org\/sites\/default\/files\/Steenbergen.Everything_You_Need.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18099304"
    },
    {
        "title": "Cross-Platform Language Design [pdf]",
        "score": 89,
        "link": "http:\/\/lampwww.epfl.ch\/~doeraene\/thesis\/doeraene-thesis-2018-cross-platform-language-design.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18640515"
    },
    {
        "title": "The Evolution of Operating Systems (2000) [pdf]",
        "score": 88,
        "link": "http:\/\/www.brinch-hansen.net\/papers\/2001b.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17581530"
    },
    {
        "title": "The Z Garbage Collector: An Introduction [pdf]",
        "score": 88,
        "link": "https:\/\/fosdem.org\/2018\/schedule\/event\/zgc\/attachments\/slides\/2211\/export\/events\/attachments\/zgc\/slides\/2211\/ZGC_FOSDEM_2018.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16405852"
    },
    {
        "title": "Nagini: A Static Verifier for Python [pdf]",
        "score": 87,
        "link": "http:\/\/pm.inf.ethz.ch\/publications\/getpdf.php?bibname=Own&id=EilersMueller18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17535752"
    },
    {
        "title": "Mininet on OpenBSD: Interactive SDN Testing and Development [pdf]",
        "score": 86,
        "link": "https:\/\/www.openbsd.org\/papers\/bsdcan2018-mininet.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17301835"
    },
    {
        "title": "Design and Implementation of a 256-Core BrainFuck Computer [pdf]",
        "score": 86,
        "link": "http:\/\/sigtbd.csail.mit.edu\/pubs\/veryconference-paper2.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16866435"
    },
    {
        "title": "Logic is Metaphysics (2011) [pdf]",
        "score": 85,
        "link": "https:\/\/philpapers.org\/archive\/ALVLIM-3.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17246944"
    },
    {
        "title": "On the rheology of cats (2014) [pdf]",
        "score": 85,
        "link": "https:\/\/www.drgoulu.com\/wp-content\/uploads\/2017\/09\/Rheology-of-cats.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18540550"
    },
    {
        "title": "What you get is what you C: Controlling side effects in mainstream C compilers [pdf]",
        "score": 85,
        "link": "http:\/\/www.cl.cam.ac.uk\/~rja14\/Papers\/whatyouc.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16911185"
    },
    {
        "title": "TensorFlow: Machine Learning on Heterogeneous Distributed Systems (2015) [pdf]",
        "score": 85,
        "link": "https:\/\/static.googleusercontent.com\/media\/research.google.com\/en\/\/pubs\/archive\/45166.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17028631"
    },
    {
        "title": "LegoOS: Disseminated, Distributed OS for Hardware Resource Disaggregation [pdf]",
        "score": 85,
        "link": "https:\/\/www.usenix.org\/system\/files\/osdi18-shan.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18488292"
    },
    {
        "title": "The usefulness of useless knowledge (1939) [pdf]",
        "score": 84,
        "link": "https:\/\/library.ias.edu\/files\/UsefulnessHarpers.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18683298"
    },
    {
        "title": "An FPGA-based In-line Accelerator for Memcached (2013) [pdf]",
        "score": 84,
        "link": "https:\/\/www.hotchips.org\/wp-content\/uploads\/hc_archives\/hc25\/HC25.50-FPGA-epub\/HC25.27.530-Memcached-Lavasani-UTexas.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17175135"
    },
    {
        "title": "US Surgeon General Declares E-cigarette Epidemic Among Youth [pdf]",
        "score": 84,
        "link": "https:\/\/e-cigarettes.surgeongeneral.gov\/documents\/surgeon-generals-advisory-on-e-cigarette-use-among-youth-2018.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18716016"
    },
    {
        "title": "Practical Examples in Data Oriented Design (2013) [pdf]",
        "score": 83,
        "link": "http:\/\/gamedevs.org\/uploads\/practical-examples-in-data-oriented-design.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16047380"
    },
    {
        "title": "An Introduction to Quantum Computation and Quantum Communication (2000) [pdf]",
        "score": 83,
        "link": "http:\/\/herpolhode.com\/rob\/qcintro.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18422415"
    },
    {
        "title": "FlureeDB, a Practical Decentralized Database (2017) [pdf]",
        "score": 82,
        "link": "https:\/\/flur.ee\/assets\/pdf\/flureedb_whitepaper_v1.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17056315"
    },
    {
        "title": "Communicating Sequential Processes (1978) [pdf]",
        "score": 82,
        "link": "https:\/\/www.cs.cmu.edu\/~crary\/819-f09\/Hoare78.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18607031"
    },
    {
        "title": "Pallene: A statically typed companion language for Lua [pdf]",
        "score": 82,
        "link": "http:\/\/www.inf.puc-rio.br\/~roberto\/docs\/pallene-sblp.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18038619"
    },
    {
        "title": "PoC||GTFO-18 [pdf]",
        "score": 81,
        "link": "https:\/\/www.alchemistowl.org\/pocorgtfo\/pocorgtfo18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17413610"
    },
    {
        "title": "Loss of Locational Privacy While Traveling in Your Automobile (2013) [pdf]",
        "score": 81,
        "link": "https:\/\/www.defcon.org\/images\/defcon-21\/dc-21-presentations\/Pukingmonkey\/DEFCON-21-Pukingmonkey-The-Road-Less-Surreptitiously-Traveled-Updated.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16251396"
    },
    {
        "title": "A Formal Security Analysis of the Signal Messaging Protocol (2017) [pdf]",
        "score": 81,
        "link": "https:\/\/eprint.iacr.org\/2016\/1013.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17107149"
    },
    {
        "title": "Exploring C Semantics and Pointer Provenance [pdf]",
        "score": 81,
        "link": "https:\/\/www.cl.cam.ac.uk\/~pes20\/cerberus\/top-Cerberus-draft.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18328328"
    },
    {
        "title": "The Battle of the Schedulers: FreeBSD ULE vs. Linux CFS [pdf]",
        "score": 81,
        "link": "https:\/\/www.usenix.org\/system\/files\/conference\/atc18\/atc18-bouron.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17508403"
    },
    {
        "title": "Optimal Time-Inconsistent Beliefs: Misplanning, Procrastination, and Commitment [pdf]",
        "score": 80,
        "link": "https:\/\/scholar.princeton.edu\/sites\/default\/files\/TimeInconsistentBeliefs_0.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18294159"
    },
    {
        "title": "Linear types can change the world (1990) [pdf]",
        "score": 80,
        "link": "http:\/\/www.cs.ioc.ee\/ewscs\/2010\/mycroft\/linear-2up.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16100840"
    },
    {
        "title": "Designing and building a distributed data store in Go [pdf]",
        "score": 80,
        "link": "https:\/\/fosdem.org\/2018\/schedule\/event\/datastore\/attachments\/slides\/2618\/export\/events\/attachments\/datastore\/slides\/2618\/designing_distributed_datastore_in_go_timbala.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17524879"
    },
    {
        "title": "How does a GPU shader core work? [pdf]",
        "score": 79,
        "link": "http:\/\/aras-p.info\/texts\/files\/2018Academy%20-%20GPU.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18504470"
    },
    {
        "title": "Outlier Detection Techniques (2010) [pdf]",
        "score": 79,
        "link": "https:\/\/archive.siam.org\/meetings\/sdm10\/tutorial3.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18410647"
    },
    {
        "title": "UnicodeMath \u2013 A Nearly Plain-Text Encoding of Mathematics (2016) [pdf]",
        "score": 79,
        "link": "https:\/\/www.unicode.org\/notes\/tn28\/UTN28-PlainTextMath-v3.1.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18513897"
    },
    {
        "title": "Option Pricing with Fourier Transform and Exponential L\u00e9vy Models [pdf]",
        "score": 79,
        "link": "http:\/\/maxmatsuda.com\/Papers\/2004\/Matsuda%20Intro%20FT%20Pricing.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18298775"
    },
    {
        "title": "The Quantum Theory and Reality (1979) [pdf]",
        "score": 79,
        "link": "https:\/\/www.scientificamerican.com\/media\/pdf\/197911_0158.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16254297"
    },
    {
        "title": "Zero overhead deterministic failure: A unified mechanism for C and C++ [pdf]",
        "score": 79,
        "link": "http:\/\/www.open-std.org\/jtc1\/sc22\/wg14\/www\/docs\/n2289.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17922715"
    },
    {
        "title": "Model-Free, Model-Based, and General Intelligence [pdf]",
        "score": 78,
        "link": "https:\/\/www.ijcai.org\/proceedings\/2018\/0002.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17591361"
    },
    {
        "title": "The Algorithmic Foundations of Differential Privacy (2014) [pdf]",
        "score": 78,
        "link": "https:\/\/www.cis.upenn.edu\/~aaroth\/Papers\/privacybook.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16671955"
    },
    {
        "title": "History of Lisp (1979) [pdf]",
        "score": 77,
        "link": "http:\/\/jmc.stanford.edu\/articles\/lisp\/lisp.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17846522"
    },
    {
        "title": "Threads Cannot Be Implemented as a Library (2005) [pdf]",
        "score": 77,
        "link": "https:\/\/cs.nyu.edu\/~mwalfish\/classes\/14fa\/ref\/boehm05threads.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18483717"
    },
    {
        "title": "How Developers Use Dynamic Features of Programming Languages: Smalltalk [pdf]",
        "score": 77,
        "link": "https:\/\/users.dcc.uchile.cl\/~rrobbes\/p\/EMSE-features.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17114406"
    },
    {
        "title": "Why Systolic Architectures? (1982) [pdf]",
        "score": 77,
        "link": "http:\/\/www.eecs.harvard.edu\/~htk\/publication\/1982-kung-why-systolic-architecture.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18620841"
    },
    {
        "title": "The Next 700 Programming Languages (1965) [pdf]",
        "score": 77,
        "link": "http:\/\/homepages.inf.ed.ac.uk\/wadler\/papers\/papers-we-love\/landin-next-700.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16090761"
    },
    {
        "title": "Opening the Hood of a Word Processor (1984) [pdf]",
        "score": 77,
        "link": "http:\/\/worrydream.com\/refs\/Kay%20-%20Opening%20the%20Hood%20of%20a%20Word%20Processor.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16352020"
    },
    {
        "title": "The Red Wedding Problem: Write Spikes at the Edge and a Mitigation Strategy [pdf]",
        "score": 76,
        "link": "http:\/\/christophermeiklejohn.com\/publications\/hotedge-2018-preprint.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16643959"
    },
    {
        "title": "Canopy: An End-to-End Performance Tracing And Analysis System [pdf]",
        "score": 76,
        "link": "https:\/\/cs.brown.edu\/~jcmace\/papers\/kaldor2017canopy.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16592303"
    },
    {
        "title": "Building Robust Systems (2008) [pdf]",
        "score": 76,
        "link": "https:\/\/groups.csail.mit.edu\/mac\/users\/gjs\/6.945\/readings\/robust-systems.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16890498"
    },
    {
        "title": "Software Updates for IoT Devices and the Hidden Costs of Homegrown Updaters [pdf]",
        "score": 75,
        "link": "https:\/\/mender.io\/resources\/guides-and-whitepapers\/_resources\/Mender%2520White%2520Paper%2520_%2520Hidden%2520Costs%2520of%2520Homegrown.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16181051"
    },
    {
        "title": "Fantastic Timers: High-Resolution Microarchitectural Attacks in JS (2017) [pdf]",
        "score": 75,
        "link": "https:\/\/gruss.cc\/files\/fantastictimers.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16080235"
    },
    {
        "title": "Comprehensive and biased comparison of OpenBSD and FreeBSD (2017) [pdf]",
        "score": 75,
        "link": "https:\/\/www.bsdfrog.org\/pub\/events\/my_bsd_sucks_less_than_yours-AsiaBSDCon2017-paper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18667179"
    },
    {
        "title": "Design and Evaluation of FPGA-Based Gigabit Ethernet Network Card (2004) [pdf]",
        "score": 73,
        "link": "https:\/\/pdfs.semanticscholar.org\/8bfe\/8988c14703302ebd2d567924b27a5cb10c57.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17029454"
    },
    {
        "title": "An Empirical Study of Programmers\u2019 Acquisition of New Programming Languages [pdf]",
        "score": 73,
        "link": "http:\/\/cs242.stanford.edu\/assets\/projects\/2017\/parastoo-gdietz44.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17950588"
    },
    {
        "title": "Ghostbuster: Detecting the Presence of Hidden Eavesdroppers [pdf]",
        "score": 73,
        "link": "https:\/\/synrg.csl.illinois.edu\/papers\/ghostbuster-mobicom18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18082384"
    },
    {
        "title": "Low-Level Thinking in High-Level Shading Languages (2013) [pdf]",
        "score": 73,
        "link": "http:\/\/www.humus.name\/Articles\/Persson_LowLevelThinking.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16223651"
    },
    {
        "title": "William Stein on the struggle for open source funding in pure mathematics [pdf]",
        "score": 73,
        "link": "http:\/\/www.ams.org\/journals\/notices\/201805\/rnoti-p540.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16940726"
    },
    {
        "title": "Logic Programming and Compiler Writing (1980) [pdf]",
        "score": 72,
        "link": "http:\/\/sovietov.com\/tmp\/warren1980.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17674859"
    },
    {
        "title": "A survey of attacks against Intel x86 over last 10 years (2015) [pdf]",
        "score": 72,
        "link": "https:\/\/blog.invisiblethings.org\/papers\/2015\/x86_harmful.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17588822"
    },
    {
        "title": "Typed Clojure in Theory and Practice [pdf]",
        "score": 72,
        "link": "http:\/\/ambrosebs.com\/talks\/proposal.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17772922"
    },
    {
        "title": "How to Subvert Backdoored Encryption [pdf]",
        "score": 71,
        "link": "https:\/\/eprint.iacr.org\/2018\/212.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16763365"
    },
    {
        "title": "Who Are These Economists, Anyway? (2009) [pdf]",
        "score": 71,
        "link": "http:\/\/www.levyinstitute.org\/pubs\/Thought_Action.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17008291"
    },
    {
        "title": "Computing Higher Order Derivatives of Matrix and Tensor Expressions [pdf]",
        "score": 71,
        "link": "http:\/\/www.matrixcalculus.org\/matrixcalculus.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18464003"
    },
    {
        "title": "A Pedagogical Analysis of Online Coding Tutorials [pdf]",
        "score": 71,
        "link": "https:\/\/faculty.washington.edu\/ajko\/papers\/Kim2017CodingTutorialEvaluation.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16961716"
    },
    {
        "title": "Unix: Building a Development Environment from Scratch (2016) [pdf]",
        "score": 71,
        "link": "http:\/\/minnie.tuhs.org\/Y5\/wkt_hapop_paper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16402165"
    },
    {
        "title": "Alchemy: A Language and Compiler for Homomorphic Encryption Made Easy [pdf]",
        "score": 71,
        "link": "http:\/\/web.eecs.umich.edu\/~cpeikert\/pubs\/alchemy.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18265948"
    },
    {
        "title": "Naked mole-rat mortality rates defy Gompertzian laws by not increasing with age [pdf]",
        "score": 70,
        "link": "https:\/\/www.ncbi.nlm.nih.gov\/pmc\/articles\/PMC5783610\/pdf\/elife-31157.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18109533"
    },
    {
        "title": "A First Course in Design and Analysis of Experiments (2010) [pdf]",
        "score": 70,
        "link": "http:\/\/users.stat.umn.edu\/~gary\/book\/fcdae.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18096685"
    },
    {
        "title": "Galois Field in Cryptography (2012) [pdf]",
        "score": 69,
        "link": "https:\/\/sites.math.washington.edu\/~morrow\/336_12\/papers\/juan.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16351068"
    },
    {
        "title": "USDZ File Format Specification [pdf]",
        "score": 69,
        "link": "https:\/\/graphics.pixar.com\/usd\/files\/USDZFileFormatSpecification.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17229971"
    },
    {
        "title": "Austerity and the rise of the Nazi party [pdf]",
        "score": 69,
        "link": "https:\/\/www.anderson.ucla.edu\/Documents\/areas\/fac\/gem\/nazi_austerity.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16558832"
    },
    {
        "title": "Sinking of the US Cargo Vessel El Faro: Illustrated digest [pdf]",
        "score": 68,
        "link": "https:\/\/www.ntsb.gov\/investigations\/AccidentReports\/Reports\/SPC1801.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17160396"
    },
    {
        "title": "This architecture tastes like microarchitecture [pdf]",
        "score": 68,
        "link": "http:\/\/wp3workshop.website\/pdfs\/WP3_dunham.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16560064"
    },
    {
        "title": "Parsing with Derivatives: A Functional Pearl (2011) [pdf]",
        "score": 68,
        "link": "http:\/\/matt.might.net\/papers\/might2011derivatives.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17391071"
    },
    {
        "title": "The Consistency of Arithmetic [pdf]",
        "score": 68,
        "link": "http:\/\/timothychow.net\/consistent.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18440115"
    },
    {
        "title": "The Potentiometer Handbook (1975) [pdf]",
        "score": 68,
        "link": "https:\/\/www.bourns.com\/docs\/technical-documents\/technical-library\/corporate\/OnlinePotentiometerHandbook.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18391076"
    },
    {
        "title": "A visual history of the future (2014) [pdf]",
        "score": 68,
        "link": "https:\/\/assets.publishing.service.gov.uk\/government\/uploads\/system\/uploads\/attachment_data\/file\/360814\/14-814-future-cities-visual-history.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17742726"
    },
    {
        "title": "The Computer for the 21st Cenury (1991) [pdf]",
        "score": 67,
        "link": "https:\/\/www.lri.fr\/~mbl\/Stanford\/CS477\/papers\/Weiser-SciAm.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17029179"
    },
    {
        "title": "High Performance Computing: Are We Just Getting Wrong Answers Faster? (1998) [pdf]",
        "score": 67,
        "link": "https:\/\/www3.nd.edu\/~markst\/cast-award-speech.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18049509"
    },
    {
        "title": "Notes on Landauer's principle, reversible computation, Maxwell's Demon (2003) [pdf]",
        "score": 67,
        "link": "https:\/\/www.cs.princeton.edu\/courses\/archive\/fall06\/cos576\/papers\/bennett03.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18267000"
    },
    {
        "title": "Leisure Luxuries and the Labor Supply of Young Men [pdf]",
        "score": 66,
        "link": "https:\/\/scholar.princeton.edu\/sites\/default\/files\/maguiar\/files\/leisure-luxuries-labor-june-2017.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16393903"
    },
    {
        "title": "How did software get so reliable without proof? (1996) [pdf]",
        "score": 65,
        "link": "http:\/\/www.gwern.net\/docs\/math\/1996-hoare.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18050706"
    },
    {
        "title": "Understanding Simpson\u2019s Paradox (2013) [pdf]",
        "score": 65,
        "link": "https:\/\/ftp.cs.ucla.edu\/pub\/stat_ser\/r414.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17728954"
    },
    {
        "title": "F1 Query: Declarative Querying at Google Scale [pdf]",
        "score": 65,
        "link": "http:\/\/www.vldb.org\/pvldb\/vol11\/p1835-samwel.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17719916"
    },
    {
        "title": "How to Print Floating-Point Numbers Accurately (1990) [pdf]",
        "score": 64,
        "link": "https:\/\/lists.nongnu.org\/archive\/html\/gcl-devel\/2012-10\/pdfkieTlklRzN.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17277560"
    },
    {
        "title": "Defeating Modern Secure Boot Using Second-Order Pulsed EM Fault Injection [pdf]",
        "score": 64,
        "link": "https:\/\/www.usenix.org\/system\/files\/conference\/woot17\/woot17-paper-cui.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17895781"
    },
    {
        "title": "Foundations for Efficient and Expressive Differentiable Programming [pdf]",
        "score": 64,
        "link": "http:\/\/papers.nips.cc\/paper\/8221-backpropagation-with-callbacks-foundations-for-efficient-and-expressive-differentiable-programming.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18747767"
    },
    {
        "title": "APL\\3000 \u2013 HP Journal \u2013 July 1977 [pdf]",
        "score": 64,
        "link": "http:\/\/www.hpl.hp.com\/hpjournal\/pdfs\/IssuePDFs\/1977-07.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17506789"
    },
    {
        "title": "On Intelligence in Cells: The Case for Whole Cell Biology (2009) [pdf]",
        "score": 64,
        "link": "http:\/\/www.brianjford.com\/a-ISR_Ford.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17317323"
    },
    {
        "title": "GraalSqueak: A Fast Smalltalk Bytecode Interpreter [pdf]",
        "score": 64,
        "link": "https:\/\/fniephaus.com\/2018\/icooolps18-graalsqueak.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17470767"
    },
    {
        "title": "Towards Stealthy Manipulation of Road Navigation Systems [pdf]",
        "score": 64,
        "link": "https:\/\/people.cs.vt.edu\/gangwang\/sec18-gps.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17581755"
    },
    {
        "title": "Monoid machines: a O(log n) parser for regular languages (2006) [pdf]",
        "score": 64,
        "link": "http:\/\/www.dcc.fc.up.pt\/~acm\/semigr.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17512574"
    },
    {
        "title": "A Relational Model of Data for Large Shared Data Banks (1970) [pdf]",
        "score": 64,
        "link": "https:\/\/cs.uwaterloo.ca\/~david\/cs848s14\/codd-relational.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18088951"
    },
    {
        "title": "BleedingBit: The hidden attack surface within BLE chips [pdf]",
        "score": 64,
        "link": "https:\/\/go.armis.com\/hubfs\/BLEEDINGBIT%20-%20Technical%20White%20Paper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18621070"
    },
    {
        "title": "2018 Deloitte Millennial Survey [pdf]",
        "score": 63,
        "link": "https:\/\/www2.deloitte.com\/content\/dam\/Deloitte\/global\/Documents\/About-Deloitte\/gx-2018-millennial-survey-report.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17631670"
    },
    {
        "title": "Adopting Lessons from Offline Ray-Tracing to Real-Time Ray-Tracing [pdf]",
        "score": 63,
        "link": "http:\/\/advances.realtimerendering.com\/s2018\/Pharr%20-%20Advances%20in%20RTR%20-%20Real-time%20Ray%20Tracing.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18364825"
    },
    {
        "title": "Huygens: Scalable, Fine-grained Clock Synchronization [pdf]",
        "score": 63,
        "link": "https:\/\/www.usenix.org\/system\/files\/conference\/nsdi18\/nsdi18-geng.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17428655"
    },
    {
        "title": "The Case for Shared Nothing (1986) [pdf]",
        "score": 63,
        "link": "http:\/\/db.cs.berkeley.edu\/papers\/hpts85-nothing.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17391376"
    },
    {
        "title": "\u201cLittle Languages\u201d by Jon Bentley (1986) [pdf]",
        "score": 63,
        "link": "http:\/\/staff.um.edu.mt\/afra1\/seminar\/little-languages.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17881705"
    },
    {
        "title": "Optimizing Paxos with batching and pipelining (2012) [pdf]",
        "score": 63,
        "link": "https:\/\/pdfs.semanticscholar.org\/a0d0\/cdd2e8af1945c03cfaf2cb451f71f208d0c9.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16952649"
    },
    {
        "title": "The Structure of \u201cUnstructured\u201d Decision Processes (1976) [pdf]",
        "score": 63,
        "link": "http:\/\/media.corporate-ir.net\/media_files\/irol\/97\/97664\/reports\/Mintzberg.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16513405"
    },
    {
        "title": "Modeling Potential Income and Welfare \u2013 Benefits in Illinois (2014) [pdf]",
        "score": 62,
        "link": "https:\/\/d2dv7hze646xr.cloudfront.net\/wp-content\/uploads\/2014\/12\/Welfare_Report_finalfinal.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17484212"
    },
    {
        "title": "Building a Self-Healing Operating System (2007) [pdf]",
        "score": 62,
        "link": "http:\/\/choices.cs.illinois.edu\/selfhealing.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17745990"
    },
    {
        "title": "Static Program Analysis [pdf]",
        "score": 62,
        "link": "https:\/\/cs.au.dk\/~amoeller\/spa\/spa.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17915563"
    },
    {
        "title": "Evidence for biological shaping of hair ice (2015) [pdf]",
        "score": 62,
        "link": "https:\/\/www.biogeosciences.net\/12\/4261\/2015\/bg-12-4261-2015.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17305994"
    },
    {
        "title": "Security Chasms of WASM [pdf]",
        "score": 62,
        "link": "https:\/\/i.blackhat.com\/us-18\/Thu-August-9\/us-18-Lukasiewicz-WebAssembly-A-New-World-of-Native_Exploits-On-The-Web-wp.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17834675"
    },
    {
        "title": "IRS: Review of the System Failure That Led to the Tax Day Outage [pdf]",
        "score": 62,
        "link": "https:\/\/www.treasury.gov\/tigta\/auditreports\/2018reports\/201820065fr.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18062405"
    },
    {
        "title": "The CONS microprocessor (1974) [pdf]",
        "score": 61,
        "link": "https:\/\/dspace.mit.edu\/bitstream\/handle\/1721.1\/41115\/AI_WP_080.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18531352"
    },
    {
        "title": "Setting, Elaborating, Reflecting on Goals Improves Academic Performance (2010) [pdf]",
        "score": 61,
        "link": "http:\/\/individual.utoronto.ca\/jacobhirsh\/publications\/GoalSettingJAP2010.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18206472"
    },
    {
        "title": "Live Coding in Sporth: A Stack-Based Language for Audio Synthesis [pdf]",
        "score": 61,
        "link": "https:\/\/iclc.livecodenetwork.org\/2017\/cameraReady\/sporth.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17118237"
    },
    {
        "title": "On the Detection of Kernel-Level Rootkits Using Hardware Performance Counters [pdf]",
        "score": 61,
        "link": "http:\/\/www.cs.binghamton.edu\/~devtyushkin\/asiaccs-2017.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17161886"
    },
    {
        "title": "The Socratic Method in an Age of Trauma (2017) [pdf]",
        "score": 61,
        "link": "https:\/\/harvardlawreview.org\/wp-content\/uploads\/2017\/10\/2320-2347_Online.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18050207"
    },
    {
        "title": "To Kill a Centrifuge (2013) [pdf]",
        "score": 60,
        "link": "https:\/\/www.langner.com\/wp-content\/uploads\/2017\/03\/to-kill-a-centrifuge.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17133329"
    },
    {
        "title": "Deep Learning: A Critical Appraisal [pdf]",
        "score": 60,
        "link": "https:\/\/arxiv.org\/ftp\/arxiv\/papers\/1801\/1801.00631.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16083469"
    },
    {
        "title": "Design case history: the Commodore 64 (1985) [pdf]",
        "score": 60,
        "link": "https:\/\/spectrum.ieee.org\/ns\/pdfs\/commodore64_mar1985.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17438106"
    },
    {
        "title": "Sulong: Finding Errors in C Programs [pdf]",
        "score": 60,
        "link": "http:\/\/ssw.jku.at\/General\/Staff\/ManuelRigger\/ASPLOS18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16536013"
    },
    {
        "title": "A Stall-Free Real-Time Garbage Collector for Reconfigurable Hardware (2012) [pdf]",
        "score": 60,
        "link": "https:\/\/researcher.watson.ibm.com\/researcher\/files\/us-bacon\/Bacon12AndThen.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16347624"
    },
    {
        "title": "Chipforge opensource foundry [pdf]",
        "score": 59,
        "link": "https:\/\/github.com\/leviathanch\/SITCON\/blob\/master\/ORConf-20180921.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18104362"
    },
    {
        "title": "Introduction to the Mumps Language (2017) [pdf]",
        "score": 59,
        "link": "https:\/\/www.cs.uni.edu\/~okane\/source\/MUMPS-MDH\/MumpsTutorial.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16309237"
    },
    {
        "title": "Dangerous Optimizations and the Loss of Causality in C and C++ (2010) [pdf]",
        "score": 59,
        "link": "https:\/\/pubweb.eng.utah.edu\/~cs5785\/slides-f10\/Dangerous+Optimizations.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17399228"
    },
    {
        "title": "The next 700 programming languages (1966) [pdf]",
        "score": 59,
        "link": "http:\/\/fsl.cs.illinois.edu\/images\/e\/ef\/P157-landin.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17718158"
    },
    {
        "title": "Detecting Consciousness (2017) [pdf]",
        "score": 58,
        "link": "https:\/\/www.alleninstitute.org\/media\/filer_public\/3e\/7a\/3e7aabb0-5da7-4915-b4b6-2aa896c8faee\/2017_11_howtomakeaconsciousnessmeter.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16300280"
    },
    {
        "title": "Cure53: Browser Security Whitepaper (2017) [pdf]",
        "score": 58,
        "link": "https:\/\/cure53.de\/browser-security-whitepaper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16406663"
    },
    {
        "title": "How to Catch When Proxies Lie [pdf]",
        "score": 57,
        "link": "https:\/\/www.andrew.cmu.edu\/user\/nicolasc\/publications\/Weinberg-IMC18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18336283"
    },
    {
        "title": "Bringup is Hard [pdf]",
        "score": 57,
        "link": "http:\/\/www.garbled.net\/tmp\/bringup.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17435512"
    },
    {
        "title": "Functional Pearl: Enumerating the Rationals [pdf]",
        "score": 56,
        "link": "https:\/\/www.cs.ox.ac.uk\/jeremy.gibbons\/publications\/rationals.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18515413"
    },
    {
        "title": "Computation and State Machines (2008) [pdf]",
        "score": 56,
        "link": "https:\/\/lamport.azurewebsites.net\/pubs\/state-machine.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18012672"
    },
    {
        "title": "All Your IOPS Are Belong to Us: Case Study in Performance Optimization (2015) [pdf]",
        "score": 56,
        "link": "https:\/\/www.percona.com\/live\/mysql-conference-2015\/sites\/default\/files\/slides\/all_your_iops_are_belong_to_usPLMCE2015.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16252986"
    },
    {
        "title": "TCP and BBR [pdf]",
        "score": 56,
        "link": "https:\/\/ripe76.ripe.net\/presentations\/10-2018-05-15-bbr.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17063582"
    },
    {
        "title": "Reverse-Engineering WebAssembly [pdf]",
        "score": 56,
        "link": "https:\/\/www.pnfsoftware.com\/reversing-wasm.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17507767"
    },
    {
        "title": "Still All on One Server: Perforce at Scale (2011) [pdf]",
        "score": 56,
        "link": "http:\/\/info.perforce.com\/rs\/perforce\/images\/GoogleWhitePaper-StillAllonOneServer-PerforceatScale.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17607457"
    },
    {
        "title": "Ambit: In-Memory Accelerator for Bulk Bitwise Operations Using Commodity DRAM [pdf]",
        "score": 56,
        "link": "https:\/\/people.inf.ethz.ch\/omutlu\/pub\/ambit-bulk-bitwise-dram_micro17.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16085778"
    },
    {
        "title": "Specializing Ropes for Ruby [pdf]",
        "score": 56,
        "link": "https:\/\/chrisseaton.com\/truffleruby\/ropes-manlang.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17971920"
    },
    {
        "title": "Programming in an Interactive Environment: The \u201cLisp\u201d Experience (1978) [pdf]",
        "score": 55,
        "link": "http:\/\/www.softwarepreservation.org\/projects\/interactive_c\/bib\/Sandewall-1978.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17736959"
    },
    {
        "title": "Prolog as Description and Implementation Language in CS Teaching (2004) [pdf]",
        "score": 55,
        "link": "http:\/\/www.ep.liu.se\/ecp\/012\/004\/ecp012004.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18174191"
    },
    {
        "title": "Why Threads Are a Bad Idea (1995) [pdf]",
        "score": 55,
        "link": "https:\/\/www.cc.gatech.edu\/classes\/AY2010\/cs4210_fall\/papers\/ousterhout-threads.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17297325"
    },
    {
        "title": "Compiler Construction: The Art of Niklaus Wirth (2000) [pdf]",
        "score": 54,
        "link": "https:\/\/pdfs.semanticscholar.org\/036f\/c4effda4bbbe9f6a9ee762df717bd0af1324.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16609360"
    },
    {
        "title": "Understanding, finding, and eliminating ground loops (2003) [pdf]",
        "score": 54,
        "link": "http:\/\/web.mit.edu\/jhawk\/tmp\/p\/EST016_Ground_Loops_handout.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17640674"
    },
    {
        "title": "Fuzzy Logic in Agent-Based Game Design [pdf]",
        "score": 54,
        "link": "https:\/\/web.northeastern.edu\/magy\/courses\/AI\/FuzzyLogicGames.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17265862"
    },
    {
        "title": "No Causal Effect of Music Practice on Ability (2014) [pdf]",
        "score": 54,
        "link": "https:\/\/www.gwern.net\/docs\/genetics\/correlation\/2014-mosing.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16348727"
    },
    {
        "title": "Dynamic Automatic Differentiation of GPU Broadcast Kernels [pdf]",
        "score": 53,
        "link": "http:\/\/www.mit.edu\/~jvielma\/publications\/Dynamic-Automatic-Differentiation.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18404201"
    },
    {
        "title": "The Problem with Threads (2006) [pdf]",
        "score": 53,
        "link": "https:\/\/www2.eecs.berkeley.edu\/Pubs\/TechRpts\/2006\/EECS-2006-1.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16996668"
    },
    {
        "title": "Inside the Windows 95 File System (1997) [pdf]",
        "score": 53,
        "link": "http:\/\/www.tenox.net\/books\/Microsoft_Windows\/Inside_the_Windows95_File_System.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17391526"
    },
    {
        "title": "Computational Complexity of Air Travel Planning (2003) [pdf]",
        "score": 53,
        "link": "http:\/\/www.demarcken.org\/carl\/papers\/ITA-software-travel-complexity\/ITA-software-travel-complexity.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17642263"
    },
    {
        "title": "Racklog: Prolog Style Logic Programming [pdf]",
        "score": 53,
        "link": "https:\/\/plt.eecs.northwestern.edu\/snapshots\/current\/pdf-doc\/racklog.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18767708"
    },
    {
        "title": "A Failure of Academic Quality Control [pdf]",
        "score": 53,
        "link": "http:\/\/journalofpositivesexuality.org\/wp-content\/uploads\/2018\/08\/Failure-of-Academic-Quality-Control-Technology-of-Orgasm-Lieberman-Schatzberg.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17897753"
    },
    {
        "title": "An Empirical Study of the Reliability of Unix Utilities (1989) [pdf]",
        "score": 52,
        "link": "http:\/\/ftp.cs.wisc.edu\/paradyn\/technical_papers\/fuzz.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16324063"
    },
    {
        "title": "American Gut: An Open Platform for Citizen Science Microbiome Research [pdf]",
        "score": 52,
        "link": "http:\/\/msystems.asm.org\/content\/msys\/3\/3\/e00031-18.full.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17434948"
    },
    {
        "title": "How the Reformulation of OxyContin Ignited the Heroin Epidemic [pdf]",
        "score": 52,
        "link": "https:\/\/www3.nd.edu\/~elieber\/research\/ELP.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16792052"
    },
    {
        "title": "Basic Cave Diving: A Blueprint for Survival (1986) [pdf]",
        "score": 52,
        "link": "https:\/\/nsscds.org\/wp-content\/uploads\/2018\/05\/Blueprint-for-Survival.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17483339"
    },
    {
        "title": "CFTC and SEC Testimony on Cryptocurrencies [pdf]",
        "score": 52,
        "link": "https:\/\/www.banking.senate.gov\/public\/_cache\/files\/a5e72ac6-4f8a-473f-9c9c-e2894573d57d\/BF62433A09A9B95A269A29E1FF13D2BA.clayton-testimony-2-6-18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16312025"
    },
    {
        "title": "Zero-overhead deterministic exceptions: Throwing values [pdf]",
        "score": 51,
        "link": "http:\/\/www.open-std.org\/jtc1\/sc22\/wg21\/docs\/papers\/2018\/p0709r0.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17059297"
    },
    {
        "title": "Cryptographically Certified Hypothesis Testing [pdf]",
        "score": 51,
        "link": "http:\/\/sachaservanschreiber.com\/thesis.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18692982"
    },
    {
        "title": "A History of Capacity Challenges in Computer Science [pdf]",
        "score": 51,
        "link": "https:\/\/cs.stanford.edu\/people\/eroberts\/CSCapacity.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16334968"
    },
    {
        "title": "Mach-O Tricks [pdf]",
        "score": 51,
        "link": "http:\/\/iokit.racing\/machotricks.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17378829"
    },
    {
        "title": "Exploiting Coroutines to Attack the \u201cKiller Nanoseconds\u201d [pdf]",
        "score": 50,
        "link": "http:\/\/www.vldb.org\/pvldb\/vol11\/p1702-jonathan.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18420950"
    },
    {
        "title": "Pycket: A Tracing JIT For a Functional Language (2015) [pdf]",
        "score": 50,
        "link": "http:\/\/homes.sice.indiana.edu\/samth\/pycket-draft.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18005734"
    },
    {
        "title": "Systems Software Research is Irrelevant (2000) [pdf]",
        "score": 50,
        "link": "http:\/\/doc.cat-v.org\/bell_labs\/utah2000\/utah2000.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18207317"
    },
    {
        "title": "Welcome to DNS, or Saving the DNS Camel [pdf]",
        "score": 50,
        "link": "https:\/\/indico.dns-oarc.net\/event\/29\/contributions\/658\/attachments\/641\/1039\/Welcome_to_DNS-final.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18255619"
    },
    {
        "title": "The Dark (Patterns) Side of UX Design [pdf]",
        "score": 50,
        "link": "http:\/\/colingray.me\/wp-content\/uploads\/2018_Grayetal_CHI_DarkPatternsUXDesign.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17962469"
    },
    {
        "title": "Monads for functional programming (1995) [pdf]",
        "score": 49,
        "link": "http:\/\/homepages.inf.ed.ac.uk\/wadler\/papers\/marktoberdorf\/baastad.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17002554"
    },
    {
        "title": "Online Tracking: A 1M-site Measurement and Analysis [pdf]",
        "score": 49,
        "link": "http:\/\/randomwalker.info\/publications\/OpenWPM_1_million_site_tracking_measurement.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18771494"
    },
    {
        "title": "SEC settles with EtherDelta founder for running an unlicensed exchange [pdf]",
        "score": 49,
        "link": "https:\/\/www.sec.gov\/litigation\/admin\/2018\/34-84553.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18410483"
    },
    {
        "title": "Naming and Synchronization in a Decentralized Computer System (1979) [pdf]",
        "score": 49,
        "link": "http:\/\/www.dtic.mil\/dtic\/tr\/fulltext\/u2\/a061407.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18267022"
    },
    {
        "title": "Methods for Studying Coincidences (1989) [pdf]",
        "score": 49,
        "link": "http:\/\/www.math.uchicago.edu\/~fcale\/CCC\/DC.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16297067"
    },
    {
        "title": "To Explain or to Predict? (2010) [pdf]",
        "score": 49,
        "link": "http:\/\/www.galitshmueli.com\/system\/files\/Stat%20Science%20published.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17509407"
    },
    {
        "title": "The Intel 80x86 Process Architecture: Pitfalls for Secure Systems (1995) [pdf]",
        "score": 49,
        "link": "https:\/\/pdfs.semanticscholar.org\/2209\/42809262c17b6631c0f6536c91aaf7756857.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16101719"
    },
    {
        "title": "Imperfect Forward Secrecy: How Diffie-Hellman Fails in Practice",
        "score": 49,
        "link": "https:\/\/jhalderm.com\/pub\/papers\/weakdh-cacm19.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18725824"
    },
    {
        "title": "Froid: Optimization of Imperative Programs in a Relational Database [pdf]",
        "score": 49,
        "link": "http:\/\/www.vldb.org\/pvldb\/vol11\/p432-ramachandra.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18747807"
    },
    {
        "title": "Succincter [pdf]",
        "score": 49,
        "link": "http:\/\/people.csail.mit.edu\/mip\/papers\/succinct\/succinct.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18701540"
    },
    {
        "title": "An FPGA Implementation of a Distributed Virtual Machine [pdf]",
        "score": 48,
        "link": "https:\/\/www.cs.unm.edu\/~williams\/fpga-ucnc18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17760267"
    },
    {
        "title": "The Trouble with Macroeconomics (2016) [pdf]",
        "score": 48,
        "link": "https:\/\/paulromer.net\/wp-content\/uploads\/2016\/09\/WP-Trouble.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18179989"
    },
    {
        "title": "Clascal Reference Manual for the Lisa (1983) [pdf]",
        "score": 48,
        "link": "http:\/\/www.mirrorservice.org\/sites\/www.bitsavers.org\/pdf\/apple\/lisa\/toolkit_university\/Clascal_Reference_Manual_Mar83.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17591728"
    },
    {
        "title": "Self-Censorship in Public Discourse: A Theory of 'Political Correctness' (1994) [pdf]",
        "score": 47,
        "link": "https:\/\/www.brown.edu\/Departments\/Economics\/Faculty\/Glenn_Loury\/louryhomepage\/papers\/Loury_Political_Correctness.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16442347"
    },
    {
        "title": "The Scheme Machine (1994) [pdf]",
        "score": 47,
        "link": "http:\/\/burgerrg.github.io\/TR413.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17702420"
    },
    {
        "title": "Mathematics in the 20th century \u2013 Sir Michael Atiyah [pdf]",
        "score": 47,
        "link": "http:\/\/www.math.tamu.edu\/~rojas\/atiyah20thcentury.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18730436"
    },
    {
        "title": "Why Echo Chambers Are Useful [pdf]",
        "score": 47,
        "link": "https:\/\/www.economics.ox.ac.uk\/materials\/jm_papers\/921\/echochambers.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18375409"
    },
    {
        "title": "Building a Bw-Tree Takes More Than Just Buzz Words [pdf]",
        "score": 47,
        "link": "https:\/\/db.cs.cmu.edu\/papers\/2018\/mod342-wangA.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17041616"
    },
    {
        "title": "The History, Controversy, and Evolution of the Goto Statement [pdf]",
        "score": 46,
        "link": "http:\/\/web.sonoma.edu\/users\/l\/luvisi\/goto\/goto.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18484221"
    },
    {
        "title": "Automated PCB Reverse Engineering (2017) [pdf]",
        "score": 46,
        "link": "https:\/\/www.usenix.org\/system\/files\/conference\/woot17\/woot17-paper-kleber.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18082465"
    },
    {
        "title": "New Hardware for Massive Neural Networks (1988) [pdf]",
        "score": 46,
        "link": "https:\/\/papers.nips.cc\/paper\/22-new-hardware-for-massive-neural-networks.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18372953"
    },
    {
        "title": "Entity Component Systems and Data Oriented Design [pdf]",
        "score": 46,
        "link": "http:\/\/aras-p.info\/texts\/files\/2018Academy%20-%20ECS-DoD.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18202308"
    },
    {
        "title": "Testing Theories of American Politics: Elites, Interest Groups, Citizens (2014) [pdf]",
        "score": 46,
        "link": "https:\/\/scholar.princeton.edu\/sites\/default\/files\/mgilens\/files\/gilens_and_page_2014_-testing_theories_of_american_politics.doc.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18324592"
    },
    {
        "title": "Technological Change and Obsolete Skills: Evidence from Men\u2019s Pro Tennis (2017) [pdf]",
        "score": 46,
        "link": "http:\/\/individual.utoronto.ca\/jhall\/documents\/TennisTechChange.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16720468"
    },
    {
        "title": "Flare: An Approach to Routing in Lightning Network (2016) [pdf]",
        "score": 45,
        "link": "http:\/\/bitfury.com\/content\/downloads\/whitepaper_flare_an_approach_to_routing_in_lightning_network_7_7_2016.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17057441"
    },
    {
        "title": "Bicycle Technology (1973) [pdf]",
        "score": 45,
        "link": "http:\/\/veterancycleclublibrary.org.uk\/ncl\/pics\/Bicycle%20Technology%20Scientific%20American%20March%201973%20(V-CC%20Library).pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17968267"
    },
    {
        "title": "How Browsers\u2019 Explanations Impact Misconceptions About Private Browsing [pdf]",
        "score": 45,
        "link": "https:\/\/www.blaseur.com\/papers\/www18privatebrowsing.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17456047"
    },
    {
        "title": "Overload Control for Scaling WeChat Microservices [pdf]",
        "score": 45,
        "link": "https:\/\/www.cs.columbia.edu\/~ruigu\/papers\/socc18-final100.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18691462"
    },
    {
        "title": "Popularity Dynamics and Intrinsic Quality in Reddit and Hacker News (2015) [pdf]",
        "score": 45,
        "link": "https:\/\/pdfs.semanticscholar.org\/ccf6\/0d08bdd989ea3595bbbda132dedd71c47acf.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18290904"
    },
    {
        "title": "Show HN: A Root Cause Analysis EBook [pdf]",
        "score": 45,
        "link": "http:\/\/www.sologic.com\/sites\/default\/files\/pdf\/RCA-ebook-my-boss-told-me-to-do-rca.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16483762"
    },
    {
        "title": "Survival in the first hours of the Cenozoic (2004) [pdf]",
        "score": 44,
        "link": "http:\/\/uahost.uantwerpen.be\/funmorph\/raoul\/macroevolutie\/Robertson2004.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17748995"
    },
    {
        "title": "The Discoveries of Continuations (1993) [pdf]",
        "score": 44,
        "link": "http:\/\/www.math.bas.bg\/~bantchev\/place\/iswim\/conti-disco.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18457914"
    },
    {
        "title": "Oral History of John Backus (2006) [pdf]",
        "score": 44,
        "link": "http:\/\/archive.computerhistory.org\/resources\/access\/text\/2013\/05\/102657970-05-01-acc.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17564186"
    },
    {
        "title": "Peeking Behind the Curtains of Serverless Platforms [pdf]",
        "score": 44,
        "link": "http:\/\/pages.cs.wisc.edu\/~liangw\/pub\/atc18-final298.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17686223"
    },
    {
        "title": "A Mathematician\u2019s Apology (1940) [pdf]",
        "score": 44,
        "link": "http:\/\/www.math.ualberta.ca\/~mss\/misc\/A%20Mathematician%27s%20Apology.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18037550"
    },
    {
        "title": "LHD: Improving Cache Hit Rate by Maximizing Hit Density [pdf]",
        "score": 44,
        "link": "http:\/\/www.cs.cmu.edu\/~beckmann\/publications\/papers\/2018.nsdi.lhd.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16825931"
    },
    {
        "title": "Direction for ISO C++ [pdf]",
        "score": 43,
        "link": "http:\/\/www.open-std.org\/JTC1\/SC22\/WG21\/docs\/papers\/2018\/p0939r0.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16394041"
    },
    {
        "title": "Fortifying Macros (2010) [pdf]",
        "score": 43,
        "link": "https:\/\/www2.ccs.neu.edu\/racket\/pubs\/icfp10-cf.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18372103"
    },
    {
        "title": "Deprecating the Observer Pattern (2010) [pdf]",
        "score": 43,
        "link": "https:\/\/infoscience.epfl.ch\/record\/148043\/files\/DeprecatingObserversTR2010.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17845341"
    },
    {
        "title": "Compiler Fuzzing Through Deep Learning [pdf]",
        "score": 43,
        "link": "http:\/\/homepages.inf.ed.ac.uk\/hleather\/publications\/2018_deepfuzzing_issta.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18748193"
    },
    {
        "title": "You Could Have Invented Spectral Sequences (2006) [pdf]",
        "score": 43,
        "link": "http:\/\/timothychow.net\/spectral02.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18063999"
    },
    {
        "title": "Relationship Between Practice and Performance in Sports: A Meta-Analysis (2016) [pdf]",
        "score": 43,
        "link": "https:\/\/artscimedia.case.edu\/wp-content\/uploads\/sites\/141\/2016\/09\/14214856\/Macnamara-Moreau-Hambrick-2016.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17874069"
    },
    {
        "title": "Herbert Simon: The Architecture of Complexity (1962) [pdf]",
        "score": 42,
        "link": "http:\/\/ecoplexity.org\/files\/uploads\/Simon.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16392223"
    },
    {
        "title": "Reminiscences of the VLSI Revolution (2012) [pdf]",
        "score": 42,
        "link": "http:\/\/worrydream.com\/refs\/Conway%20-%20Reminiscences%20of%20the%20VLSI%20Revolution.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18140297"
    },
    {
        "title": "Finger Printing Data [pdf]",
        "score": 42,
        "link": "https:\/\/eprint.iacr.org\/2018\/503.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17162619"
    },
    {
        "title": "Quantitative analysis of family trees with millions of relatives (2017) [pdf]",
        "score": 42,
        "link": "https:\/\/www.biorxiv.org\/content\/biorxiv\/early\/2017\/02\/07\/106427.1.full.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16499241"
    },
    {
        "title": "CloudKit: Structured Storage for Mobile Applications [pdf]",
        "score": 42,
        "link": "http:\/\/www.vldb.org\/pvldb\/vol11\/p540-shraer.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16281270"
    },
    {
        "title": "Thirty Years Later: Lessons from the Multics Security Evaluation (2002) [pdf]",
        "score": 42,
        "link": "https:\/\/www.acsac.org\/2002\/papers\/classic-multics.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16956386"
    },
    {
        "title": "Hints for Computer System Design (1983) [pdf]",
        "score": 41,
        "link": "https:\/\/www.microsoft.com\/en-us\/research\/wp-content\/uploads\/2016\/02\/acrobat-17.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17587748"
    },
    {
        "title": "The Computer and the Brain (1958) [pdf]",
        "score": 41,
        "link": "https:\/\/ia800800.us.archive.org\/4\/items\/TheComputerAndTheBrain\/The%20Computer%20and%20The%20Brain_text.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17461152"
    },
    {
        "title": "Natural Sounding Artificial Reverberation (1962) [pdf]",
        "score": 41,
        "link": "http:\/\/charlesames.net\/pdf\/MRSchroeder\/artificial-reverb.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16304354"
    },
    {
        "title": "Self-reference and Logic (2005) [pdf]",
        "score": 41,
        "link": "http:\/\/www.imm.dtu.dk\/~tobo\/essay.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17845288"
    },
    {
        "title": "Techniques of Systems Analysis (1957) [pdf]",
        "score": 40,
        "link": "https:\/\/www.rand.org\/content\/dam\/rand\/pubs\/research_memoranda\/2006\/RM1829-1.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16355886"
    },
    {
        "title": "Implementing SIP Telephony in Python (2008) [pdf]",
        "score": 40,
        "link": "http:\/\/39peers.net\/download\/doc\/report.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17757737"
    },
    {
        "title": "Practical Memory Safety with Random Embedded Secret Tokens [pdf]",
        "score": 40,
        "link": "http:\/\/www.cs.columbia.edu\/~simha\/preprint_isca18_REST_memory_safety.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16891319"
    },
    {
        "title": "Scalable 10 Gbps TCP\/IP Stack Architecture for Reconfigurable Hardware (2015) [pdf]",
        "score": 39,
        "link": "http:\/\/davidsidler.ch\/files\/fccm2015-tcpip.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17994713"
    },
    {
        "title": "Understand and Eliminate JVM Warm-Up Overhead in Data-Parallel Systems (2016) [pdf]",
        "score": 39,
        "link": "https:\/\/www.usenix.org\/system\/files\/conference\/osdi16\/osdi16-lion.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17995055"
    },
    {
        "title": "The Tyranny of the Clock (2012) [pdf]",
        "score": 39,
        "link": "http:\/\/www.eng.auburn.edu\/~uguin\/teaching\/READING\/E6200\/Sutherland_Tyranny_o_Clock.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17577677"
    },
    {
        "title": "Bfloat16 \u2013 Hardware Numerics Definition [pdf]",
        "score": 39,
        "link": "https:\/\/software.intel.com\/sites\/default\/files\/managed\/40\/8b\/bf16-hardware-numerics-definition-white-paper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18475575"
    },
    {
        "title": "Compiling a Subset of APL into a Typed Intermediate Language (2014) [pdf]",
        "score": 39,
        "link": "http:\/\/hiperfit.dk\/pdf\/array14_final.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16230067"
    },
    {
        "title": "Genetic Predisposition to Obesity and Medicare Expenditures [pdf]",
        "score": 39,
        "link": "https:\/\/www.gwern.net\/docs\/genetics\/selection\/2017-wehby.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16434697"
    },
    {
        "title": "Imperfect Forward Secrecy: How Diffie-Hellman Fails in Practice (2015)",
        "score": 39,
        "link": "https:\/\/weakdh.org\/imperfect-forward-secrecy-ccs15.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18725824"
    },
    {
        "title": "Mathematical Metaphysics (2015) [pdf]",
        "score": 38,
        "link": "http:\/\/shelf1.library.cmu.edu\/HSS\/2015\/a1626190.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17462947"
    },
    {
        "title": "Retpoline: A Branch Target Injection Mitigation [pdf]",
        "score": 38,
        "link": "https:\/\/software.intel.com\/sites\/default\/files\/managed\/1d\/46\/Retpoline-A-Branch-Target-Injection-Mitigation.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16423401"
    },
    {
        "title": "Essentials of Metaheuristics (2015) [pdf]",
        "score": 38,
        "link": "https:\/\/cs.gmu.edu\/~sean\/book\/metaheuristics\/Essentials.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18491274"
    },
    {
        "title": "Verifying Concurrent Programs Using Contracts (2017) [pdf]",
        "score": 38,
        "link": "http:\/\/www.fit.vutbr.cz\/~vojnar\/Publications\/icst17-contracts.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18403244"
    },
    {
        "title": "The TX-2 Computer and Sketchpad (2012) [pdf]",
        "score": 38,
        "link": "https:\/\/www.ll.mit.edu\/publications\/labnotes\/LookingBack_19_1.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16058966"
    },
    {
        "title": "Ground: A Data Context Service [pdf]",
        "score": 38,
        "link": "https:\/\/rise.cs.berkeley.edu\/wp-content\/uploads\/2017\/03\/CIDR17.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18415456"
    },
    {
        "title": "SoC it to EM: EM side-channel attacks on a complex SoC [pdf]",
        "score": 38,
        "link": "https:\/\/www.iacr.org\/archive\/ches2015\/92930599\/92930599.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17220660"
    },
    {
        "title": "ICANN seeking input on ceding control of WHOIS privacy to governments [pdf]",
        "score": 38,
        "link": "https:\/\/www.icann.org\/en\/system\/files\/files\/proposed-interim-model-gdpr-compliance-summary-description-28feb18-en.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16491566"
    },
    {
        "title": "NIST Uncertainty Machine \u2013 User\u2019s Manual [pdf]",
        "score": 37,
        "link": "https:\/\/uncertainty.nist.gov\/NISTUncertaintyMachine-UserManual.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17008705"
    },
    {
        "title": "Three Generations of Asynchronous Microprocessors (2003) [pdf]",
        "score": 37,
        "link": "http:\/\/mail.async.caltech.edu\/Pubs\/PDF\/2003_threegen.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17546731"
    },
    {
        "title": "Insider Accounts of Computing and Life at BBN: A sixty-year report (2011) [pdf]",
        "score": 37,
        "link": "http:\/\/walden-family.com\/bbn\/bbn-print2.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17166680"
    },
    {
        "title": "Mill CPU is Immune to Spectre, Meltdown [pdf]",
        "score": 37,
        "link": "https:\/\/millcomputing.com\/blog\/wp-content\/uploads\/2018\/01\/Spectre.03.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16153570"
    },
    {
        "title": "Why Johnny Doesn\u2019t Use Two Factor \u2013 A Study of the FIDO U2F Security Key [pdf]",
        "score": 37,
        "link": "https:\/\/fc18.ifca.ai\/preproceedings\/111.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17732460"
    },
    {
        "title": "Contracts in OpenBSD (2010) [pdf]",
        "score": 36,
        "link": "http:\/\/kindsoftware.com\/documents\/reports\/Torlakcik10.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17939799"
    },
    {
        "title": "House of Commons committee re-invites to Mark Zuckerburg to appear [pdf]",
        "score": 36,
        "link": "https:\/\/www.parliament.uk\/documents\/commons-committees\/culture-media-and-sport\/180501-Chair-to-Rebecca-Stimson-Facebook-re-oral-evidence-follow-up.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16966882"
    },
    {
        "title": "Science and Linguistics (1940)",
        "score": 36,
        "link": "http:\/\/web.mit.edu\/allanmc\/www\/whorf.scienceandlinguistics.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16072798"
    },
    {
        "title": "Gray Failure: The Achilles' Heel of Cloud-Scale Systems [pdf]",
        "score": 36,
        "link": "https:\/\/www.cs.jhu.edu\/~huang\/paper\/grayfailure-hotos17.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16253405"
    },
    {
        "title": "KLEAK: Practical Kernel Memory Disclosure Detection [pdf]",
        "score": 36,
        "link": "https:\/\/netbsd.org\/gallery\/presentations\/maxv\/kleak.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18648060"
    },
    {
        "title": "The Design and Implementation of Hyperupcalls [pdf]",
        "score": 36,
        "link": "https:\/\/www.usenix.org\/system\/files\/conference\/atc18\/atc18-amit.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17513530"
    },
    {
        "title": "On the Work of Edward Witten (1990) [pdf]",
        "score": 35,
        "link": "http:\/\/bohr.physics.berkeley.edu\/reinsch\/phys105spr2014\/files\/Witten_Atiyah.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16453163"
    },
    {
        "title": "The function of dream sleep (1983) [pdf]",
        "score": 35,
        "link": "https:\/\/profiles.nlm.nih.gov\/ps\/access\/scbcdk.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18405810"
    },
    {
        "title": "Recollections of Early Chip Development at Intel [pdf]",
        "score": 34,
        "link": "https:\/\/lark.tu-sofia.bg\/ntt\/eusku\/readings\/art_1.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18624722"
    },
    {
        "title": "The tragedy of the commons in evolutionary biology (2007) [pdf]",
        "score": 34,
        "link": "http:\/\/www.kokkonuts.org\/wp-content\/uploads\/Rankin_ToC.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18557657"
    },
    {
        "title": "How News Aggregators Help Development Communities Shape and Share Knowledge [pdf]",
        "score": 34,
        "link": "https:\/\/ctreude.files.wordpress.com\/2018\/02\/icse18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17057859"
    },
    {
        "title": "Unique IPv6 prefix per host [pdf]",
        "score": 34,
        "link": "https:\/\/ripe76.ripe.net\/presentations\/143-rfc8273-v5.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17091176"
    },
    {
        "title": "Pepper's Cone: An Inexpensive Do-It-Yourself 3D Display [pdf]",
        "score": 34,
        "link": "http:\/\/grail.cs.washington.edu\/wp-content\/uploads\/2017\/10\/luo2017pca.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16051078"
    },
    {
        "title": "BaSiX \u2013 A Basic interpreter written in TeX (1990) [pdf]",
        "score": 34,
        "link": "http:\/\/www.tug.org\/TUGboat\/tb11-3\/tb29greene.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17509519"
    },
    {
        "title": "The Metaphysical Transparency of Truth (2017) [pdf]",
        "score": 34,
        "link": "https:\/\/www.uvm.edu\/~lderosse\/transparency.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17581799"
    },
    {
        "title": "Stateless Network Functions (2017) [pdf]",
        "score": 34,
        "link": "https:\/\/www.usenix.org\/system\/files\/conference\/nsdi17\/nsdi17-kablan.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17470748"
    },
    {
        "title": "Direct Conversion Receivers: Some Amateur Radio History [pdf]",
        "score": 34,
        "link": "http:\/\/w7zoi.net\/dcrx68.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18449407"
    },
    {
        "title": "#ifdef considered harmful (1992) [pdf]",
        "score": 34,
        "link": "https:\/\/usenix.org\/legacy\/publications\/library\/proceedings\/sa92\/spencer.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17624014"
    },
    {
        "title": "The Forgetfulness of Beings (1997) [pdf]",
        "score": 33,
        "link": "https:\/\/maritain.nd.edu\/ama\/Ciapalo\/Ciapalo14.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17432560"
    },
    {
        "title": "Designing experiments for understanding performance [pdf]",
        "score": 33,
        "link": "https:\/\/timharris.uk\/misc\/five-ways.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16346138"
    },
    {
        "title": "Visual overview of radiator valves used in Germany [pdf]",
        "score": 33,
        "link": "https:\/\/www.eq-3.de\/Downloads\/eq3\/download%20bereich\/Ventilkompatibilitaeten-Model-N.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18532446"
    },
    {
        "title": "Code Inflation (2015) [pdf]",
        "score": 33,
        "link": "https:\/\/www.computer.org\/cms\/Computer.org\/ComputingNow\/issues\/2015\/04\/mso2015020010.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17787922"
    },
    {
        "title": "The Natural Rate of Interest Is Zero (2004) [pdf]",
        "score": 33,
        "link": "http:\/\/www.cfeps.org\/pubs\/wp-pdf\/WP37-MoslerForstater.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16414199"
    },
    {
        "title": "Timing Analysis of Keystrokes and Timing Attacks on SSH (2001) [pdf]",
        "score": 33,
        "link": "https:\/\/people.eecs.berkeley.edu\/~daw\/papers\/ssh-use01.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18557916"
    },
    {
        "title": "The History and Concept of Computability (1996) [pdf]",
        "score": 32,
        "link": "http:\/\/www.people.cs.uchicago.edu\/~soare\/History\/handbook.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18298389"
    },
    {
        "title": "NIST: Usability and Key Management [pdf]",
        "score": 32,
        "link": "https:\/\/csrc.nist.gov\/CSRC\/media\/Presentations\/Usability-and-Key-Management\/images-media\/Usability_and_Key_Mgmt.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17808910"
    },
    {
        "title": "An Analysis of the ProtonMail Cryptographic Architecture [pdf]",
        "score": 32,
        "link": "https:\/\/eprint.iacr.org\/2018\/1121.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18500924"
    },
    {
        "title": "Advances in OpenBSD packages [pdf]",
        "score": 32,
        "link": "https:\/\/www.openbsd.org\/papers\/eurobsdcon_2018_https.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18056774"
    },
    {
        "title": "A Model of Mental Fluidity and Analogy-Making (1994) [pdf]",
        "score": 32,
        "link": "http:\/\/portal.uni-freiburg.de\/cognition\/lehre\/archiv\/WS0910\/analogiemat\/6thsitting\/Vortrag\/copycatamodelofmentalfluidityandanalogymaking.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16299804"
    },
    {
        "title": "Comparison of Metaheuristics [pdf]",
        "score": 32,
        "link": "http:\/\/www2.cscamm.umd.edu\/publications\/BookChapter_CS-09-13.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18491278"
    },
    {
        "title": "Python\u2019s Meta-Object Protocol (2012) [pdf]",
        "score": 32,
        "link": "http:\/\/laser.inf.ethz.ch\/2012\/slides\/vanRossum\/laser-mop.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17669621"
    },
    {
        "title": "A History of Individually Wrapped Cheese Slices (1979) [pdf]",
        "score": 32,
        "link": "http:\/\/www56.homepage.villanova.edu\/david.nawrocki\/Arnold%20Nawrocki%20IWS%20Paper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17639514"
    },
    {
        "title": "Voice-matching technology was developed by MIT\/Lincoln Labs under NSA contract [pdf]",
        "score": 32,
        "link": "https:\/\/assets.documentcloud.org\/documents\/4351987\/2006-01-04-Technology-That-Identifies-People-by.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16195038"
    },
    {
        "title": "Cognitive Networks: Brains, Internet, and Civilizations (2017) [pdf]",
        "score": 31,
        "link": "https:\/\/pdfs.semanticscholar.org\/342d\/672ba656102fd5a98df2c882723ef3022efe.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17485151"
    },
    {
        "title": "Squeak: A Language for Communicating with Mice (1985) [pdf]",
        "score": 31,
        "link": "http:\/\/ordiecole.com\/squeak\/cardelli_squeak1985.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17787781"
    },
    {
        "title": "Neuromorphic computing with multi-memristive synapses [pdf]",
        "score": 31,
        "link": "https:\/\/www.nature.com\/articles\/s41467-018-04933-y.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17712896"
    },
    {
        "title": "Revisiting the Risks of Bitcoin Currency Exchange Closure [pdf]",
        "score": 31,
        "link": "https:\/\/tylermoore.utulsa.edu\/toit17.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16337782"
    },
    {
        "title": "A Decade of Lattice Cryptography (2016) [pdf]",
        "score": 31,
        "link": "http:\/\/web.eecs.umich.edu\/~cpeikert\/pubs\/lattice-survey.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17701148"
    },
    {
        "title": "Field Guide for Designing Human Interaction with Intelligent Systems (1998) [pdf]",
        "score": 30,
        "link": "https:\/\/ston.jsc.nasa.gov\/collections\/trs\/_techrep\/TM-1998-208470.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18049945"
    },
    {
        "title": "Crabs: the bitmap terror (1985) [pdf]",
        "score": 30,
        "link": "http:\/\/lucacardelli.name\/Papers\/Crabs.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16967529"
    },
    {
        "title": "Sugar: Secure GPU Acceleration in Web Browsers [pdf]",
        "score": 30,
        "link": "https:\/\/www.ics.uci.edu\/~ardalan\/papers\/Yao_ASPLOS18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17802567"
    },
    {
        "title": "Not All Patterns, but Enough (2008) [pdf]",
        "score": 30,
        "link": "https:\/\/www.cs.york.ac.uk\/plasma\/publications\/pdf\/MitchellRuncimanHaskell08.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18431228"
    },
    {
        "title": "Now you see them: DARPA's Stealth Revolution (2008) [pdf]",
        "score": 30,
        "link": "https:\/\/www.darpa.mil\/attachments\/(2O24)%20Global%20Nav%20-%20About%20Us%20-%20History%20-%20Resources%20-%2050th%20-%20Stealth%20(Approved).pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16610659"
    },
    {
        "title": "Personal Computing (1975) [pdf]",
        "score": 30,
        "link": "https:\/\/mprove.de\/diplom\/gui\/Kay75.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18044785"
    },
    {
        "title": "Composing with Tape Recorders: Musique Concr\u00e8te for Beginners [pdf]",
        "score": 30,
        "link": "https:\/\/monoskop.org\/images\/b\/b3\/Dwyer_Terence_Composing_with_Tape_Recorders_Musique_Concrete_for_Beginners.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17338092"
    },
    {
        "title": "Quantifying the Performance of Garbage Collection (2005) [pdf]",
        "score": 30,
        "link": "https:\/\/www.cs.umass.edu\/~emery\/pubs\/gcvsmalloc.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18760111"
    },
    {
        "title": "Cicada: Dependably Fast Multi-Core In-Memory Transactions (2017) [pdf]",
        "score": 29,
        "link": "https:\/\/hyeontaek.com\/papers\/cicada-sigmod2017.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18157973"
    },
    {
        "title": "Common Lisp, Typing and Mathematics (2001) [pdf]",
        "score": 29,
        "link": "https:\/\/www-fourier.ujf-grenoble.fr\/~sergerar\/Papers\/Ezcaray.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17774516"
    },
    {
        "title": "A Study of Linux File System Evolution (2013) [pdf]",
        "score": 29,
        "link": "https:\/\/www.usenix.org\/system\/files\/login\/articles\/03_lu_010-017_final.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17098261"
    },
    {
        "title": "The What\u2019s Next Intermittent Computing Architecture [pdf]",
        "score": 28,
        "link": "http:\/\/www.eecg.toronto.edu\/~ganesa10\/assets\/pdfs\/whatsnext-hpca2019.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18700616"
    },
    {
        "title": "Depth-first search and linear graph algorithms (1972) [pdf]",
        "score": 28,
        "link": "https:\/\/rjlipton.files.wordpress.com\/2009\/10\/dfs1971.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18518732"
    },
    {
        "title": "A Type of Simulation Which Some Experimental Evidence Suggests We Don't Live In [pdf]",
        "score": 28,
        "link": "https:\/\/philpapers.org\/archive\/ALEATO-6.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17718864"
    },
    {
        "title": "Napoleon as Organizational Designer (2009) [pdf]",
        "score": 28,
        "link": "http:\/\/www.dtic.mil\/dtic\/tr\/fulltext\/u2\/a501580.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17498577"
    },
    {
        "title": "Infinitesimal machinery (1993) [pdf]",
        "score": 28,
        "link": "https:\/\/people.eecs.berkeley.edu\/~pister\/290G\/Papers\/Feynman83.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18637226"
    },
    {
        "title": "The coolest way to generate binary strings (2013) [pdf]",
        "score": 28,
        "link": "https:\/\/www.researchgate.net\/profile\/Aaron_Williams10\/publication\/257376294_The_Coolest_Way_to_Generate_Binary_Strings\/links\/572a12cf08ae057b0a0787f9\/The-Coolest-Way-to-Generate-Binary-Strings.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18715055"
    },
    {
        "title": "Dynamic Hash Tables (1988) [pdf]",
        "score": 27,
        "link": "http:\/\/www.csd.uoc.gr\/~hy460\/pdf\/Dynamic%20Hash%20Tables.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16608613"
    },
    {
        "title": "Fault attacks on secure chips: from glitch to flash (2011) [pdf]",
        "score": 27,
        "link": "https:\/\/www.cl.cam.ac.uk\/~sps32\/ECRYPT2011_1.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17113364"
    },
    {
        "title": "A comparison of adaptive radix trees and hash tables [pdf]",
        "score": 26,
        "link": "https:\/\/bigdata.uni-saarland.de\/publications\/ARCD15.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17181334"
    },
    {
        "title": "Phoneme- and Word-Based Learning of English Words Presented to the Skin",
        "score": 26,
        "link": "https:\/\/research.fb.com\/wp-content\/uploads\/2018\/04\/a-comparative-study-of-phoneme-and-word-based-learning-of-english-words-presented-to-the-skin.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17214986"
    },
    {
        "title": "An Adaptive Packed-Memory Array (2007) [pdf]",
        "score": 26,
        "link": "https:\/\/www3.cs.stonybrook.edu\/~bender\/newpub\/BenderHu07-TODS.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16191144"
    },
    {
        "title": "The eXpress Data Path: Fast Programmable Packet Processing in the OS Kernel [pdf]",
        "score": 26,
        "link": "https:\/\/github.com\/tohojo\/xdp-paper\/blob\/master\/xdp-the-express-data-path.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18290518"
    },
    {
        "title": "Ace: a syntax-driven C preprocessor (1989) [pdf]",
        "score": 26,
        "link": "https:\/\/swtch.com\/gosling89ace.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17206416"
    },
    {
        "title": "Computation at the Edge of Chaos (1990) [pdf]",
        "score": 26,
        "link": "https:\/\/pdfs.semanticscholar.org\/cb4c\/df7812fc8ad56d13317eaabc99b76659e95f.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17515793"
    },
    {
        "title": "Internet Architecture Board on the Australian Assistance and Access Bill [pdf]",
        "score": 26,
        "link": "https:\/\/www.iab.org\/wp-content\/IAB-uploads\/2018\/09\/IAB-Comments-on-Australian-Assistance-and-Access-Bill-2018.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17958778"
    },
    {
        "title": "The Why of Y (2001) [pdf]",
        "score": 26,
        "link": "https:\/\/www.dreamsongs.com\/Files\/WhyOfY.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18637939"
    },
    {
        "title": "Delta Pointers: Buffer Overflow Checks Without the Checks [pdf]",
        "score": 26,
        "link": "https:\/\/www.cs.vu.nl\/~herbertb\/download\/papers\/delta-pointers_eurosys18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16915957"
    },
    {
        "title": "A general memristor-based partial differential equation solver",
        "score": 26,
        "link": "http:\/\/www2.ece.rochester.edu\/~xiguo\/gomac15.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17662864"
    },
    {
        "title": "A Formal Apology for Metaphysics [pdf]",
        "score": 26,
        "link": "https:\/\/philpapers.org\/archive\/BARAFA-6.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18739311"
    },
    {
        "title": "Compiling machine learning programs via high-level tracing [pdf]",
        "score": 26,
        "link": "https:\/\/www.sysml.cc\/doc\/146.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18500784"
    },
    {
        "title": "Knut Wicksell: the Birth of Modern Monetary Policy (2004) [pdf]",
        "score": 26,
        "link": "https:\/\/www.dallasfed.org\/~\/media\/documents\/research\/ei\/ei0401.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18540149"
    },
    {
        "title": "Volatility and the Alchemy of Risk [pdf]",
        "score": 25,
        "link": "https:\/\/static1.squarespace.com\/static\/5581f17ee4b01f59c2b1513a\/t\/59ea16f7e5dd5b23063a3154\/1508513533577\/Artemis_Volatility+and+the+Alchemy+of+Risk_2017.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16409601"
    },
    {
        "title": "Leakage-Resilient Client-Side Deduplication of Encrypted Data in Cloud Storage [pdf]",
        "score": 25,
        "link": "https:\/\/eprint.iacr.org\/2011\/538.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17993796"
    },
    {
        "title": "Engineering and Software Engineering (2010) [pdf]",
        "score": 25,
        "link": "http:\/\/mcs.open.ac.uk\/mj665\/FoSEZurich2010.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17125383"
    },
    {
        "title": "Dthreads: Efficient Deterministic Multithreading (2011) [pdf]",
        "score": 25,
        "link": "http:\/\/people.cs.ksu.edu\/~danielwang\/Investigation\/System_Security\/dthreads-sosp11.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17756774"
    },
    {
        "title": "Hardware Masking, Revisited [pdf]",
        "score": 25,
        "link": "https:\/\/www.emsec.rub.de\/media\/crypto\/veroeffentlichungen\/2018\/04\/16\/PDN_Masking.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18154230"
    },
    {
        "title": "The State of the TclQuadcode compiler (2017) [pdf]",
        "score": 25,
        "link": "https:\/\/www.tcl.tk\/community\/tcl2017\/assets\/talk101\/Paper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18179974"
    },
    {
        "title": "Multiple Linear Regression (2012) [pdf]",
        "score": 25,
        "link": "http:\/\/mezeylab.cb.bscb.cornell.edu\/labmembers\/documents\/supplement%205%20-%20multiple%20regression.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17787615"
    },
    {
        "title": "XDP: 1.5 years in production [pdf]",
        "score": 25,
        "link": "http:\/\/vger.kernel.org\/lpc_net2018_talks\/LPC_XDP_Shirokov_v2.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18493304"
    },
    {
        "title": "The Early History of Programming Languages (1976) [pdf]",
        "score": 25,
        "link": "http:\/\/bitsavers.trailing-edge.com\/pdf\/stanford\/cs_techReports\/STAN-CS-76-562_EarlyDevelPgmgLang_Aug76.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17735866"
    },
    {
        "title": "RaiBlocks: A Feeless Distributed Cryptocurrency Network [pdf]",
        "score": 25,
        "link": "https:\/\/raiblocks.net\/media\/RaiBlocks_Whitepaper__English.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16053048"
    },
    {
        "title": "How Bad Is Selfish Routing? (2001) [pdf]",
        "score": 24,
        "link": "http:\/\/theory.stanford.edu\/~tim\/papers\/routing.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17741641"
    },
    {
        "title": "Things We Need to Know About Technological Change (1998) [pdf]",
        "score": 24,
        "link": "http:\/\/web.cs.ucdavis.edu\/~rogaway\/classes\/188\/materials\/postman.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17522319"
    },
    {
        "title": "Fast-Path Loop Unrolling of Non-Counted Loops [pdf]",
        "score": 24,
        "link": "http:\/\/ssw.jku.at\/General\/Staff\/Leopoldseder\/manlang2018-fast_path_unrolling_authorpreprint.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17643802"
    },
    {
        "title": "How to use 1000 registers (1979) [pdf]",
        "score": 24,
        "link": "http:\/\/caltechconf.library.caltech.edu\/200\/1\/RichardLSites.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18098589"
    },
    {
        "title": "HSN-1000 Nuclear Event Detector (2005) [pdf]",
        "score": 24,
        "link": "http:\/\/www.maxwell.com\/images\/documents\/hsn1000_rev3.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18532536"
    },
    {
        "title": "Speech Intellegibility in Naval Aircraft Radios (1972) [pdf]",
        "score": 24,
        "link": "http:\/\/www.dtic.mil\/dtic\/tr\/fulltext\/u2\/748202.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17534480"
    },
    {
        "title": "Realizability of Graphs (2008) [pdf]",
        "score": 24,
        "link": "http:\/\/faculty.bard.edu\/mbelk\/DiscreteMathDayTalk.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17956589"
    },
    {
        "title": "The Unreasonable Effectiveness of Data (2009) [pdf]",
        "score": 24,
        "link": "https:\/\/static.googleusercontent.com\/media\/research.google.com\/en\/\/pubs\/archive\/35179.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16096186"
    },
    {
        "title": "Good Ideas, Through the Looking Glass (2005) [pdf]",
        "score": 23,
        "link": "https:\/\/www.inf.ethz.ch\/personal\/wirth\/Articles\/GoodIdeas_origFig.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17331168"
    },
    {
        "title": "On-Chip Interconnection Architecture of the Tile Processor (2007) [pdf]",
        "score": 23,
        "link": "https:\/\/www.princeton.edu\/~wentzlaf\/documents\/Wentzlaff.2007.IEEE_Micro.Tilera.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17741972"
    },
    {
        "title": "Million Dollar Problems (2000) [pdf]",
        "score": 23,
        "link": "http:\/\/www.math.buffalo.edu\/~sww\/0papers\/million.buck.problems.mi.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18005183"
    },
    {
        "title": "Real world DNSSEC+DANE for secure inter-domain mail transport [pdf]",
        "score": 23,
        "link": "https:\/\/static.ptbl.co\/static\/attachments\/169319\/1520904692.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16617893"
    },
    {
        "title": "Fountain codes (2005) [pdf]",
        "score": 23,
        "link": "https:\/\/docs.switzernet.com\/people\/emin-gabrielyan\/060112-capillary-references\/ref\/MacKay05.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18385386"
    },
    {
        "title": "A Quick Reference to Airfield Standards [pdf]",
        "score": 23,
        "link": "https:\/\/www.faa.gov\/airports\/southern\/airport_safety\/part139_cert\/media\/aso-airfield-standards-quick-reference.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18492930"
    },
    {
        "title": "The SIGABA\/ECM II Cipher Machine: \u201cA Beautiful Idea\u201d (2015) [pdf]",
        "score": 23,
        "link": "https:\/\/www.nsa.gov\/about\/cryptologic-heritage\/historical-figures-publications\/publications\/assets\/files\/sigaba-ecm-ii\/The_SIGABA_ECM_Cipher_Machine_A_Beautiful_Idea3.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17549897"
    },
    {
        "title": "Final Report on the August 14, 2003 Blackout (2004) [pdf]",
        "score": 22,
        "link": "https:\/\/www.energy.gov\/sites\/prod\/files\/oeprod\/DocumentsandMedia\/BlackoutFinal-Web.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17168338"
    },
    {
        "title": "Neurology in Ancient Faces (2001) [pdf]",
        "score": 22,
        "link": "https:\/\/www.ncbi.nlm.nih.gov\/pmc\/articles\/PMC1737287\/pdf\/v070p00524.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16118387"
    },
    {
        "title": "Zipf\u2019s Law in Passwords (2017) [pdf]",
        "score": 22,
        "link": "http:\/\/wangdingg.weebly.com\/uploads\/2\/0\/3\/6\/20366987\/ieeetifs17_final.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18062130"
    },
    {
        "title": "Doppelg\u00e4nger Finder: Taking Stylometry to the Underground (2014) [pdf]",
        "score": 22,
        "link": "https:\/\/www1.icsi.berkeley.edu\/~sadia\/papers\/oakland2014-underground.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18328270"
    },
    {
        "title": "Hybrid Field-Effect Transistors Based on Cellulose Fiber Paper (2008) [pdf]",
        "score": 22,
        "link": "https:\/\/run.unl.pt\/bitstream\/10362\/3242\/1\/Fortunato_2008.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18520767"
    },
    {
        "title": "The Potentiometer Handbook (1975) [pdf]",
        "score": 22,
        "link": "https:\/\/www.bourns.com\/pdfs\/OnlinePotentiometerHandbook.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18391076"
    },
    {
        "title": "Strongly Typed Heterogeneous Collections (2004) [pdf]",
        "score": 22,
        "link": "http:\/\/okmij.org\/ftp\/Haskell\/HList-ext.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18004708"
    },
    {
        "title": "Hacking chemical plants for competition and extortion (2015) [pdf]",
        "score": 21,
        "link": "https:\/\/www.blackhat.com\/docs\/us-15\/materials\/us-15-Krotofil-Rocking-The-Pocket-Book-Hacking-Chemical-Plant-For-Competition-And-Extortion-wp.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18692902"
    },
    {
        "title": "Compiled and Vectorized Queries [pdf]",
        "score": 21,
        "link": "http:\/\/www.vldb.org\/pvldb\/vol11\/p2209-kersten.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18081477"
    },
    {
        "title": "The Effect of Zoning on Housing Prices \u2013 Research from Australia's Reserve Bank [pdf]",
        "score": 21,
        "link": "https:\/\/www.rba.gov.au\/publications\/rdp\/2018\/pdf\/rdp2018-03.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16571996"
    },
    {
        "title": "Debugging Distributed Systems With Why-Across-Time Provenance [pdf]",
        "score": 21,
        "link": "https:\/\/mwhittaker.github.io\/publications\/wat_SOCC18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18193921"
    },
    {
        "title": "Mathematics applied to dressmaking (1993) [pdf]",
        "score": 21,
        "link": "https:\/\/www.lms.ac.uk\/sites\/lms.ac.uk\/files\/1994%20Mathematics%20applied%20to%20dressmaking%20%28preprint%29.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18298586"
    },
    {
        "title": "The Psychology of Security (2008) [pdf]",
        "score": 21,
        "link": "https:\/\/www.schneier.com\/academic\/paperfiles\/paper-psychology-of-security.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17958560"
    },
    {
        "title": "The Postgres Rule Manager (1988) [pdf]",
        "score": 21,
        "link": "http:\/\/db.cs.berkeley.edu\/papers\/tse88-rulemgr.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17581880"
    },
    {
        "title": "Failure Rates in Introductory Programming (2007) [pdf]",
        "score": 21,
        "link": "http:\/\/users-cs.au.dk\/mic\/publications\/journal\/25--bulletin2007.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18186847"
    },
    {
        "title": "A Scalable, Commodity Data Center Network Architecture (2008) [pdf]",
        "score": 21,
        "link": "http:\/\/ccr.sigcomm.org\/online\/files\/p63-alfares.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17290388"
    },
    {
        "title": "Cache Modeling and Optimization Using Miniature Simulations [pdf]",
        "score": 20,
        "link": "https:\/\/www.usenix.org\/system\/files\/conference\/atc17\/atc17-waldspurger.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18318628"
    },
    {
        "title": "Is the scientific paper fraudulent? (1964) [pdf]",
        "score": 20,
        "link": "http:\/\/blog.thegrandlocus.com\/static\/misc\/is_the_scientific_paper_fraudulent.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17624787"
    },
    {
        "title": "Five deep questions in computing (2008) [pdf]",
        "score": 20,
        "link": "http:\/\/www.cs.cmu.edu\/~wing\/publications\/Wing08.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17755605"
    },
    {
        "title": "Discerning the Out-Of-Order Advantage: Is It Speculation or Dynamism? (2013) [pdf]",
        "score": 20,
        "link": "http:\/\/zilles.cs.illinois.edu\/papers\/mcfarlin_asplos_2013.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17881132"
    },
    {
        "title": "Intentional Acoustic Interference Damages Availability and Integrity in HDDs [pdf]",
        "score": 20,
        "link": "https:\/\/spqr.eecs.umich.edu\/papers\/bolton-blue-note-IEEESSP-2018.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17295595"
    },
    {
        "title": "Comprehending Ringads (2016) [pdf]",
        "score": 20,
        "link": "http:\/\/www.cs.ox.ac.uk\/jeremy.gibbons\/publications\/ringads.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17001478"
    },
    {
        "title": "A Computer Scientist\u2019s Guide to Cell Biology [pdf]",
        "score": 19,
        "link": "http:\/\/www.cs.cmu.edu\/~wcohen\/GuideToBiology-sampleChapter-release1.4.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18778499"
    },
    {
        "title": "Lunar Laser Ranging: a continuing legacy of the Apollo program (1994) [pdf]",
        "score": 19,
        "link": "https:\/\/www.hq.nasa.gov\/alsj\/LRRR-94-0193.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17780532"
    },
    {
        "title": "Understanding Reduced-Voltage Operation in Modern DRAM Devices [pdf]",
        "score": 19,
        "link": "http:\/\/www.pdl.cmu.edu\/PDL-FTP\/NVM\/17sigmetrics_voltron.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18307111"
    },
    {
        "title": "Better documentation \u2013 on the web and for LibreSSL [pdf]",
        "score": 19,
        "link": "https:\/\/www.openbsd.org\/papers\/eurobsdcon2018-mandoc.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18110033"
    },
    {
        "title": "Open-Source Bitstream Generation (2013) [pdf]",
        "score": 19,
        "link": "https:\/\/www.isi.edu\/sites\/default\/files\/users\/nsteiner\/soni-2013-bitstream-fccm13.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18488020"
    },
    {
        "title": "Cherry-Picking and the Scientific Method (2013) [pdf]",
        "score": 19,
        "link": "http:\/\/www.cs.cofc.edu\/~bowring\/classes\/csci%20362\/docs\/p32-neville-neil.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18492261"
    },
    {
        "title": "Construction of the Transreal Numbers and Algebraic Transfields [pdf]",
        "score": 18,
        "link": "http:\/\/www.iaeng.org\/IJAM\/issues_v46\/issue_1\/IJAM_46_1_03.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16730457"
    },
    {
        "title": "Crypko White Paper: Cryptocollectible Game Empowered by GANs [pdf]",
        "score": 18,
        "link": "https:\/\/crypko.ai\/static\/files\/crypko-whitepaper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16990347"
    },
    {
        "title": "Two curious integrals and a graphic proof (2014) [pdf]",
        "score": 18,
        "link": "http:\/\/schmid-werren.ch\/hanspeter\/publications\/2014elemath.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17883349"
    },
    {
        "title": "Xoodoo cookbook [pdf]",
        "score": 18,
        "link": "https:\/\/eprint.iacr.org\/2018\/767.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17844542"
    },
    {
        "title": "CastSan: efficient detection of bad C++ casts [pdf]",
        "score": 18,
        "link": "https:\/\/www.docdroid.net\/INWYBF7\/castsan-esorics18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17783317"
    },
    {
        "title": "Beastly Numbers (1996) [pdf]",
        "score": 17,
        "link": "https:\/\/people.eecs.berkeley.edu\/~wkahan\/tests\/numbeast.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17006041"
    },
    {
        "title": "Julia for R programmers [pdf]",
        "score": 17,
        "link": "https:\/\/www.stat.wisc.edu\/~bates\/JuliaForRProgrammers.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17723977"
    },
    {
        "title": "The case for writing papers in economics using faKe LaTeX [pdf]",
        "score": 17,
        "link": "http:\/\/www.farmdoc.illinois.edu\/irwin\/research\/The_Case_for_Fake_LaTeX_Body_Feb%202018.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16592401"
    },
    {
        "title": "History of Combinatorial Generation (2004) [pdf]",
        "score": 17,
        "link": "http:\/\/www.antiquark.com\/blogimg\/fasc4b.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16395222"
    },
    {
        "title": "Scrapino \u2013 Self-sustainable robot from e-scrap using renewable energy [pdf]",
        "score": 17,
        "link": "https:\/\/www.sciencedirect.com\/science\/article\/pii\/S2405896318328593\/pdf?md5=ac7fae174710da0a5035026f88e0559b&pid=1-s2.0-S2405896318328593-main.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18687923"
    },
    {
        "title": "Attack Directories, Not Caches: Side-Channel Attacks in a Non-Inclusive World [pdf]",
        "score": 17,
        "link": "http:\/\/iacoma.cs.uiuc.edu\/iacoma-papers\/ssp19.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18407850"
    },
    {
        "title": "The Translucent File Service (1988) [pdf]",
        "score": 17,
        "link": "http:\/\/mcvoy.com\/lm\/papers\/SunOS.tfs.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17743933"
    },
    {
        "title": "Criminal Law 2.0 (2015) [pdf]",
        "score": 16,
        "link": "https:\/\/georgetownlawjournal.org\/assets\/kozinski-arcp-preface-9a990f08f3f006558eaa03ccc440d3078f5899b3426ec47aaedb89c606caeae7.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16616722"
    },
    {
        "title": "Map Projections \u2013 A Working Manual (1987) [pdf]",
        "score": 16,
        "link": "https:\/\/pubs.usgs.gov\/pp\/1395\/report.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18099029"
    },
    {
        "title": "VrankenFuzz \u2013 a multi-sensor, multi-generator mutational fuzz testing engine [pdf]",
        "score": 16,
        "link": "https:\/\/guidovranken.files.wordpress.com\/2018\/07\/vrankenfuzz.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17468377"
    },
    {
        "title": "Can moons have moons? [pdf]",
        "score": 16,
        "link": "https:\/\/arxiv.org\/pdf\/1810.03304.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18217646"
    },
    {
        "title": "Machine Learning on 2KB of RAM [pdf]",
        "score": 15,
        "link": "http:\/\/manikvarma.org\/pubs\/kumar17.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18231239"
    },
    {
        "title": "Quaternions and Reflections (1946) [pdf]",
        "score": 15,
        "link": "http:\/\/www.math.utah.edu\/~ptrapa\/math-library\/coxeter\/Coxeter-Quaternions-and-reflections-AMM-1946.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18525801"
    },
    {
        "title": "Physical Addressing on Real Hardware in Isabelle\/HOL [pdf]",
        "score": 15,
        "link": "https:\/\/people.inf.ethz.ch\/troscoe\/pubs\/achermann_itp_2018.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18373896"
    },
    {
        "title": "Product Evaluation of the Zilog Z80-CTC (1979) [pdf]",
        "score": 15,
        "link": "http:\/\/smithsonianchips.si.edu\/ice\/OCR_ScanPE125\/PE125(10379-K).pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17739214"
    },
    {
        "title": "A Survey of Rollback-Recovery Protocols in Message-Passing Systems (2002) [pdf]",
        "score": 15,
        "link": "https:\/\/www.cs.utexas.edu\/~lorenzo\/papers\/SurveyFinal.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16886165"
    },
    {
        "title": "Examining Children\u2019s Online Privacy Protection Act compliance [pdf]",
        "score": 15,
        "link": "https:\/\/petsymposium.org\/2018\/files\/papers\/issue3\/popets-2018-0021.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16848148"
    },
    {
        "title": "The Complexity of Songs (1977) [pdf]",
        "score": 15,
        "link": "http:\/\/fivedots.coe.psu.ac.th\/Software.coe\/242-535_ADA\/Background\/Readings\/knuth_song_complexity.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18044603"
    },
    {
        "title": "Differentiable Programming for Image Processing and Deep Learning in Halide [pdf]",
        "score": 14,
        "link": "https:\/\/people.csail.mit.edu\/tzumao\/gradient_halide\/gradient_halide.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17929144"
    },
    {
        "title": "The Debasement Puzzle: an Essay on Medieval Monetary History (1997) [pdf]",
        "score": 14,
        "link": "https:\/\/www.minneapolisfed.org\/research\/qr\/qr2142.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18692170"
    },
    {
        "title": "An IPv6 Update [pdf]",
        "score": 14,
        "link": "https:\/\/conference.apnic.net\/46\/assets\/files\/APNC402\/An-IPv6-Update.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17957531"
    },
    {
        "title": "Revisiting a Summer Vacation: Digital Restoration and Typesetter Forensics [pdf]",
        "score": 14,
        "link": "http:\/\/www.eprg.org\/papers\/202paper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16051520"
    },
    {
        "title": "C Standard Undefined Behavior vs. Wittgenstein [pdf]",
        "score": 14,
        "link": "http:\/\/www.yodaiken.com\/wp-content\/uploads\/2018\/05\/ub-1.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17195710"
    },
    {
        "title": "NY Attorney General Report on Crytpocurrency Market Integrity",
        "score": 13,
        "link": "https:\/\/ag.ny.gov\/sites\/default\/files\/vmii_report.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18017922"
    },
    {
        "title": "Evolution of Multicellular Computing: Parallels with Multicellular Life (2009) [pdf]",
        "score": 13,
        "link": "http:\/\/www.evolutionofcomputing.org\/Birmingham09Seminar.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18654989"
    },
    {
        "title": "Enterprise Objects Framework Developer\u2019s Guide [pdf]",
        "score": 13,
        "link": "https:\/\/developer.apple.com\/library\/archive\/documentation\/LegacyTechnologies\/WebObjects\/WebObjects_4.0\/System\/Documentation\/Developer\/EnterpriseObjects\/Guide\/EOFDevGuide.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17591554"
    },
    {
        "title": "USPTO issues 10 millionth patent [pdf]",
        "score": 13,
        "link": "https:\/\/10millionpatents.uspto.gov\/docs\/patent10million.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17349939"
    },
    {
        "title": "The Keyhole Problem (2002) [pdf]",
        "score": 13,
        "link": "http:\/\/www.aristeia.com\/TKP\/draftPaper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18293263"
    },
    {
        "title": "Abel's Theorem in Problems and Solutions (2004) [pdf]",
        "score": 13,
        "link": "http:\/\/www.maths.ed.ac.uk\/~v1ranick\/papers\/abel.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17209635"
    },
    {
        "title": "Design of the Burroughs B1700 (1972) [pdf]",
        "score": 13,
        "link": "https:\/\/pdfs.semanticscholar.org\/cff6\/6b2eba20a7172c5db281e84600049e1e82fe.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17114482"
    },
    {
        "title": "The Difficulty of Faking Data (1999) [pdf]",
        "score": 13,
        "link": "http:\/\/www.kkuniyuk.com\/Math119FakingData.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17020226"
    },
    {
        "title": "A Brief History of Just-In-Time (2003) [pdf]",
        "score": 12,
        "link": "http:\/\/eecs.ucf.edu\/~dcm\/Teaching\/COT4810-Spring2011\/Literature\/JustInTimeCompilation.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18693500"
    },
    {
        "title": "The Cult of the Bound Variable: ICFP Programming Contest (2006) [pdf]",
        "score": 12,
        "link": "http:\/\/boundvariable.org\/press\/tr-06-163.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18708366"
    },
    {
        "title": "The Civic Labor of Online Moderators (2016) [pdf]",
        "score": 12,
        "link": "http:\/\/blogs.oii.ox.ac.uk\/ipp-conference\/sites\/ipp\/files\/documents\/JNM-The_Civic_Labor_of_Online_Moderators__Internet_Politics_Policy_.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18506746"
    },
    {
        "title": "Technical Specification for the Delivery of Television Programs to the BBC [pdf]",
        "score": 12,
        "link": "http:\/\/dpp-assets.s3.amazonaws.com\/wp-content\/uploads\/specs\/bbc\/TechnicalDeliveryStandardsBBCFile.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18204099"
    },
    {
        "title": "Tribute to Vladimir Arnold (2012) [pdf]",
        "score": 12,
        "link": "http:\/\/www.ams.org\/notices\/201203\/rtx120300378p.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16330925"
    },
    {
        "title": "Falcon Heavy Demonstration Mission (overview and timeline) [pdf]",
        "score": 12,
        "link": "http:\/\/www.spacex.com\/sites\/spacex\/files\/falconheavypresskit_v1.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16317304"
    },
    {
        "title": "The missing link: explaining ELF static linking, semantically [pdf]",
        "score": 12,
        "link": "http:\/\/dominic-mulligan.co.uk\/wp-content\/uploads\/2011\/08\/oopsla-elf-linking-2016.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18713230"
    },
    {
        "title": "Response time in man-computer conversational transactions (1968) [pdf]",
        "score": 12,
        "link": "https:\/\/www.computer.org\/csdl\/proceedings\/afips\/1968\/5072\/00\/50720267.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16809846"
    },
    {
        "title": "Rigorous Benchmarking in Reasonable Time (2013) [pdf]",
        "score": 12,
        "link": "https:\/\/kar.kent.ac.uk\/33611\/7\/paper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16843808"
    },
    {
        "title": "TxFS: Leveraging File-System Crash Consistency to Provide Transactions [pdf]",
        "score": 12,
        "link": "http:\/\/www.cs.utexas.edu\/%7Evijay\/papers\/atc18-txfs.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17807272"
    },
    {
        "title": "Networking Named Content (2009) [pdf]",
        "score": 12,
        "link": "https:\/\/conferences.sigcomm.org\/co-next\/2009\/papers\/Jacobson.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17933543"
    },
    {
        "title": "The grand challenges of \u201cScience Robotics\u201d [pdf]",
        "score": 11,
        "link": "http:\/\/www.nanoscience.gatech.edu\/paper\/2018\/18_SR_01.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17161642"
    },
    {
        "title": "What is the Monster? (2002) [pdf]",
        "score": 11,
        "link": "http:\/\/www.ams.org\/notices\/200209\/what-is.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18483929"
    },
    {
        "title": "The On-Line Encyclopedia of Integer Sequences [pdf]",
        "score": 11,
        "link": "https:\/\/www.ams.org\/journals\/notices\/201809\/rnoti-p1062.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18015493"
    },
    {
        "title": "The Most Influential Paper Gerard Salton Never Wrote (2004) [pdf]",
        "score": 11,
        "link": "https:\/\/www.ideals.illinois.edu\/bitstream\/handle\/2142\/1697\/Dubin748764.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18201597"
    },
    {
        "title": "Applying auction mechanisms to meeting scheduling (2010) [pdf]",
        "score": 11,
        "link": "https:\/\/www.seas.harvard.edu\/sites\/default\/files\/files\/archived\/Xu.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17390105"
    },
    {
        "title": "An Introduction to Information Security [pdf]",
        "score": 11,
        "link": "https:\/\/nvlpubs.nist.gov\/nistpubs\/SpecialPublications\/NIST.SP.800-12r1.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16458577"
    },
    {
        "title": "Categorifying cardinal arithmetic [pdf]",
        "score": 11,
        "link": "http:\/\/www.math.jhu.edu\/~eriehl\/arithmetic.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17702228"
    },
    {
        "title": "*ANY* Android manufacturer monitors users without consent [pdf]",
        "score": 11,
        "link": "http:\/\/eprints.networks.imdea.org\/1744\/1\/trackers.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18635062"
    },
    {
        "title": "Legal Curiosities: Fact or Fable? (2015) [pdf]",
        "score": 10,
        "link": "http:\/\/www.lawcom.gov.uk\/app\/uploads\/2015\/03\/Legal_Oddities.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18654438"
    },
    {
        "title": "How We Cracked the Code Book Ciphers (2000) [pdf]",
        "score": 10,
        "link": "http:\/\/codebook.org\/codebook_solution.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18692477"
    },
    {
        "title": "Alfred Stieglitz's Lantern Slides: History, Technique and Analysis (2015) [pdf]",
        "score": 10,
        "link": "https:\/\/www.researchgate.net\/profile\/Rosina_Herrera_Garrido\/publication\/266251396_Alfred_Stieglitz%27s_Lantern_Slides_History_Technique_and_Technical_Analysis\/links\/54f81f290cf2ccffe9dcd349\/Alfred-Stieglitzs-Lantern-Slides-History-Technique-and-Technical-Analysis.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17905829"
    },
    {
        "title": "Remember the Vasa [pdf]",
        "score": 10,
        "link": "http:\/\/open-std.org\/JTC1\/SC22\/WG21\/docs\/papers\/2018\/p0977r0.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17172057"
    },
    {
        "title": "Design and Evaluation of a Continuous Consistency Model for Replicated Services [pdf]",
        "score": 10,
        "link": "https:\/\/www.usenix.org\/legacy\/event\/osdi00\/full_papers\/yuvahdat\/yuvahdat.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16831825"
    },
    {
        "title": "Taming Performance Variability [pdf]",
        "score": 10,
        "link": "https:\/\/www.usenix.org\/system\/files\/osdi18-maricq.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18169385"
    },
    {
        "title": "GLL Parsing with Flexible Combinators [pdf]",
        "score": 10,
        "link": "https:\/\/pure.royalholloway.ac.uk\/portal\/files\/31169565\/paper.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18399899"
    },
    {
        "title": "Representing Control in the Presence of One-Shot Continuations (1996) [pdf]",
        "score": 10,
        "link": "https:\/\/www.cs.indiana.edu\/~dyb\/pubs\/call1cc.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16960740"
    },
    {
        "title": "Grand Pwning Unit: Accelerating Microarchitectural Attacks with the GPU [pdf]",
        "score": 10,
        "link": "https:\/\/www.vusec.net\/wp-content\/uploads\/2018\/05\/glitch.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16984868"
    },
    {
        "title": "Privacy by Design (2010) [pdf]",
        "score": 10,
        "link": "https:\/\/link.springer.com\/content\/pdf\/10.1007%2Fs12394-010-0055-x.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16262824"
    },
    {
        "title": "Status of collectively bargained benefits [pdf]",
        "score": 9,
        "link": "http:\/\/www.milliman.com\/uploadedFiles\/insight\/2018\/status-collectively-bargained-benefits.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17741249"
    },
    {
        "title": "The errors, insights and lessons of famous AI predictions (2014) [pdf]",
        "score": 9,
        "link": "http:\/\/www.fhi.ox.ac.uk\/wp-content\/uploads\/FAIC.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17953587"
    },
    {
        "title": "Politics in the Facebook Era: Evidence from the 2016 US Presidential Elections [pdf]",
        "score": 9,
        "link": "https:\/\/warwick.ac.uk\/fac\/soc\/economics\/research\/centres\/cage\/manage\/publications\/389-2018_redoano.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18472189"
    },
    {
        "title": "A Minimal ZZStructure Navigator Using a ZigZag-Style Interface (2013) [pdf]",
        "score": 9,
        "link": "http:\/\/www.lord-enki.net\/ZigZagProject.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17708111"
    },
    {
        "title": "Rewrite Combinators in Haskell [pdf]",
        "score": 9,
        "link": "http:\/\/dev.stephendiehl.com\/rewrite.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18085353"
    },
    {
        "title": "Mata Hari with a Clockwork Eye, Alligators in the Sewer (1963) [pdf]",
        "score": 9,
        "link": "http:\/\/graphics8.nytimes.com\/packages\/pdf\/books\/Pynchon_V.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16782360"
    },
    {
        "title": "Facilitation Tools for Meetings and Workshops (2013) [pdf]",
        "score": 8,
        "link": "https:\/\/seedsforchange.org.uk\/tools.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18146906"
    },
    {
        "title": "The regress argument against Cartesian skepticism (2012) [pdf]",
        "score": 8,
        "link": "http:\/\/individual.utoronto.ca\/jmwilson\/Wilson-The-Regress-Argument-Against-Cartesian-Skepticism.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17992102"
    },
    {
        "title": "Resource management: Linux kernel Namespaces and  cgroups (2013) [pdf]",
        "score": 8,
        "link": "http:\/\/www.haifux.org\/lectures\/299\/netLec7.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18768992"
    },
    {
        "title": "Counter Culture: Towards a History of Greek Numeracy (2002) [pdf]",
        "score": 8,
        "link": "http:\/\/worrydream.com\/refs\/Netz%20-%20Counter%20Culture%20-%20Towards%20a%20History%20of%20Greek%20Numeracy.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18554695"
    },
    {
        "title": "Collapsing a Reflective Tower (2016) [pdf]",
        "score": 8,
        "link": "http:\/\/lampwww.epfl.ch\/~amin\/doc\/lms-black.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18751084"
    },
    {
        "title": "AI and International Trade [pdf]",
        "score": 8,
        "link": "http:\/\/www.nber.org\/papers\/w24254.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16316635"
    },
    {
        "title": "Making \u201cPush on Green\u201d a Reality (2014) [pdf]",
        "score": 8,
        "link": "https:\/\/www.usenix.org\/system\/files\/login\/articles\/login_1410_05_klein.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16956505"
    },
    {
        "title": "Land Surveying in Ancient Egypt [pdf]",
        "score": 8,
        "link": "https:\/\/www.fig.net\/resources\/proceedings\/fig_proceedings\/cairo\/papers\/wshs_02\/wshs02_02_paulson.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17215332"
    },
    {
        "title": "Ramanujan graphs in cryptography [pdf]",
        "score": 7,
        "link": "https:\/\/eprint.iacr.org\/2018\/593.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17316494"
    },
    {
        "title": "Precise and Scalable Detection of Double-Fetch Bugs in OS Kernels [pdf]",
        "score": 7,
        "link": "https:\/\/www-users.cs.umn.edu\/~kjlu\/papers\/deadline.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18158229"
    },
    {
        "title": "WireGuard: Next Generation Kernel Network Tunnel [pdf]",
        "score": 7,
        "link": "https:\/\/www.wireguard.com\/papers\/wireguard.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17690598"
    },
    {
        "title": "A New Refutation of Time (1947) [pdf]",
        "score": 7,
        "link": "https:\/\/www.gwern.net\/docs\/borges\/1947-borges-anewrefutationoftime.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16483740"
    },
    {
        "title": "Method and apparatus for controlling electric currents (1925) [pdf]",
        "score": 7,
        "link": "https:\/\/patentimages.storage.googleapis.com\/fa\/5d\/33\/ed2769d48fac4d\/US1745175.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16473456"
    },
    {
        "title": "Physicians give patients an average of 11 seconds before cutting them off [pdf]",
        "score": 7,
        "link": "https:\/\/link.springer.com\/content\/pdf\/10.1007%2Fs11606-018-4540-5.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17582008"
    },
    {
        "title": "Kodak Professional digital camera systems 1987-2004 [pdf]",
        "score": 7,
        "link": "http:\/\/www.nikonweb.com\/files\/DCS_Story.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17606171"
    },
    {
        "title": "Hardware Multithreaded Transactions [pdf]",
        "score": 7,
        "link": "http:\/\/liberty.princeton.edu\/Publications\/asplos18_hmtx.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17860871"
    },
    {
        "title": "Life Beyond Distributed Transactions: An Apostate\u2019s Opinion [pdf]",
        "score": 7,
        "link": "http:\/\/adrianmarriott.net\/logosroot\/papers\/LifeBeyondTxns.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16113344"
    },
    {
        "title": "A User-Centred Approach to Functions in Excel (2003)",
        "score": 7,
        "link": "https:\/\/www.microsoft.com\/en-us\/research\/wp-content\/uploads\/2016\/07\/excel.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16562300"
    },
    {
        "title": "The Flatness of U.S. States [pdf]",
        "score": 6,
        "link": "http:\/\/www.disruptivegeo.com\/blog\/wp-content\/uploads\/2014\/08\/FlatMap_GeographicalReview_DobsonCampbell_2013Nov.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17433904"
    },
    {
        "title": "Throwhammer: Rowhammer Attacks Over the Network and Defenses [pdf]",
        "score": 6,
        "link": "https:\/\/www.cs.vu.nl\/~herbertb\/download\/papers\/throwhammer_atc18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17038628"
    },
    {
        "title": "Mozilla grant for machine learning projects [pdf]",
        "score": 6,
        "link": "https:\/\/blog.mozilla.org\/wp-content\/uploads\/2018\/06\/2018-Mozilla-Awards-Application-Guide_-Creative-Media-Awards.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17336411"
    },
    {
        "title": "The C Object System [pdf]",
        "score": 6,
        "link": "http:\/\/ldeniau.web.cern.ch\/ldeniau\/html\/cos-dls09-draft.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18775826"
    },
    {
        "title": "Experience with Viruses on Unix systems (1989) [pdf]",
        "score": 6,
        "link": "https:\/\/www.usenix.org\/legacy\/publications\/compsystems\/1989\/spr_duff.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17036297"
    },
    {
        "title": "On Library Correctness Under Weak Memory Consistency [pdf]",
        "score": 6,
        "link": "http:\/\/www.soundandcomplete.org\/papers\/Libraries-POPL-2019.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18356196"
    },
    {
        "title": "Graph algorithms via SuiteSparse:GraphBLAS: triangle counting and K-truss (2018) [pdf]",
        "score": 6,
        "link": "http:\/\/faculty.cse.tamu.edu\/davis\/GraphBLAS\/HPEC18\/Davis_HPEC18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18088111"
    },
    {
        "title": "Empirical Studies of Programming Knowledge (1984) [pdf]",
        "score": 6,
        "link": "https:\/\/www.ics.uci.edu\/~redmiles\/inf233-FQ07\/oldpapers\/SollowayEhrlich.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17950597"
    },
    {
        "title": "Higher-order truths about Chmess (2006) [pdf]",
        "score": 6,
        "link": "https:\/\/ase.tufts.edu\/cogstud\/dennett\/papers\/chmess.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17947238"
    },
    {
        "title": "Robert Pirsig on The Scientific Method (1974) [pdf]",
        "score": 6,
        "link": "https:\/\/kkh.ltrr.arizona.edu\/kkh\/natsgc\/PDFs-2013\/Robert-Pirsig-On-Scientific-Method.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18415687"
    },
    {
        "title": "The Mythical Matched Modules (2009) [pdf]",
        "score": 6,
        "link": "https:\/\/www.cl.cam.ac.uk\/research\/srg\/netos\/papers\/2009-kell2009mythical.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18634017"
    },
    {
        "title": "It Takes $4.2M Net Worth to Be Considered Wealthy in Silicon Valley [pdf]",
        "score": 5,
        "link": "https:\/\/aboutschwab.com\/images\/uploads\/inline\/Charles-Schwab-Modern-Wealth-Index-Bay-Area-Press-Release.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17175091"
    },
    {
        "title": "Interviews with John Carmack [~1997-2008] [pdf]",
        "score": 5,
        "link": "http:\/\/fabiensanglard.net\/fd_proxy\/doom3\/pdfs\/johnc-interviews.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17939673"
    },
    {
        "title": "Forensic Analysis and Anonymisation of Printed Documents [pdf]",
        "score": 5,
        "link": "http:\/\/delivery.acm.org\/10.1145\/3210000\/3206019\/p127-richter.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17405586"
    },
    {
        "title": "An Architecture for  Analysis [pdf]",
        "score": 5,
        "link": "https:\/\/www.cs.ucsb.edu\/~jmcmahan\/research\/top_picks_18.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18086159"
    },
    {
        "title": "The Dangers of Key Reuse: Practical Attacks on IPsec IKE [pdf]",
        "score": 5,
        "link": "https:\/\/www.ei.rub.de\/media\/nds\/veroeffentlichungen\/2018\/08\/13\/sec18-felsch.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17760502"
    },
    {
        "title": "Computer Vision for autonomous navigation(1988) [pdf]",
        "score": 5,
        "link": "https:\/\/www.ri.cmu.edu\/pub_files\/pub3\/hebert_martial_1988_3\/hebert_martial_1988_3.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17538949"
    },
    {
        "title": "SPIRAL: Extreme Performance Portability [pdf]",
        "score": 5,
        "link": "http:\/\/users.ece.cmu.edu\/~franzf\/papers\/08510983_Spiral_IEEE_Final.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18468065"
    },
    {
        "title": "Zener diodes have coupled quantum noise that travels at c [pdf]",
        "score": 5,
        "link": "http:\/\/vixra.org\/pdf\/1603.0389v2.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18181898"
    },
    {
        "title": "Loop Recognition in C++\/Java\/Go\/Scala (2011) [pdf]",
        "score": 5,
        "link": "https:\/\/days2011.scala-lang.org\/sites\/days2011\/files\/ws3-1-Hundt.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17680790"
    },
    {
        "title": "Teasing, Gossip, and Local Names on Rapanui (1979) [pdf]",
        "score": 5,
        "link": "https:\/\/scholarspace.manoa.hawaii.edu\/bitstream\/10125\/19211\/1\/AP-v22n1-41-60.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18298741"
    },
    {
        "title": "Reconciling High-Level Optimizations\/Low-Level Code with Twin Memory Allocation [pdf]",
        "score": 5,
        "link": "http:\/\/sf.snu.ac.kr\/publications\/llvmtwin.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17463850"
    },
    {
        "title": "Documented Global Lightning Fatalities [pdf]",
        "score": 4,
        "link": "https:\/\/my.vaisala.net\/Vaisala%20Documents\/Scientific%20papers\/2016%20ILDC%20ILMC\/Ron%20Holle.%20Number%20of%20Documented%20Global%20Lightning%20Fatalities.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17195459"
    },
    {
        "title": "Resistance to the Use of Anesthesia in the Mid-19th Century (2005) [pdf]",
        "score": 4,
        "link": "https:\/\/www.docdroid.net\/V0s9uDp\/meyer2015.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17805757"
    },
    {
        "title": "The modality of mortality in domain names: an in-depth study of domain lifetimes [pdf]",
        "score": 4,
        "link": "https:\/\/www.farsightsecurity.com\/assets\/media\/download\/VB2018-study.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=18607150"
    },
    {
        "title": "Scientific Uses of the MANIAC (1986) [pdf]",
        "score": 4,
        "link": "https:\/\/dasher.wustl.edu\/chem430\/reading\/jstatphys-43-731-86.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17535138"
    },
    {
        "title": "Frieze Groups (1996) [pdf]",
        "score": 4,
        "link": "http:\/\/www.glassner.com\/wp-content\/uploads\/2014\/04\/CG-CGA-PDF-96-05-Frieze-Groups-May96.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16791452"
    },
    {
        "title": "Fast Programmable Match-Action Processing in Hardware for SDN (2013) [pdf]",
        "score": 4,
        "link": "http:\/\/yuba.stanford.edu\/~grg\/docs\/sdn-chip-sigcomm-2013.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=17497395"
    },
    {
        "title": "Ivan Sutherland: Technology and Courage (1996) [pdf]",
        "score": 3,
        "link": "http:\/\/cseweb.ucsd.edu\/~wgg\/smli_ps-1.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16918796"
    },
    {
        "title": "Simon Browne: the soul-murdered theologian (1996) [pdf]",
        "score": 3,
        "link": "https:\/\/www.gwern.net\/docs\/psychology\/1996-berman.pdf",
        "commentsLink": "https:\/\/news.ycombinator.com\/item?id=16355887"
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9wUERGRXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRvcFBERkV4YW1wbGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwrREFBMEQ7QUFFMUQsTUFBTSxNQUFNOztBQUVNLGNBQU8sR0FBd0I7SUFDekMsT0FBTyxFQUFFLE9BQU87SUFDaEIsS0FBSyxFQUFFLE1BQU07Q0FDaEIsQ0FBQztBQUVZLFlBQUssR0FBd0I7SUFDdkMsT0FBTyxFQUFFLFdBQVc7SUFDcEIsS0FBSyxFQUFFLE1BQU07Q0FDaEIsQ0FBQztBQUVZLFVBQUcsR0FBd0I7SUFDckMsT0FBTyxFQUFFLFlBQVk7SUFDckIsVUFBVSxFQUFFLE1BQU07SUFDbEIsV0FBVyxFQUFFLEtBQUs7SUFDbEIsUUFBUSxFQUFFLE1BQU07SUFDaEIsU0FBUyxFQUFFLE9BQU87Q0FDckIsQ0FBQztBQUVZLFdBQUksR0FBd0I7SUFDdEMsT0FBTyxFQUFFLFlBQVk7SUFDckIsUUFBUSxFQUFFLE1BQU07SUFDaEIsU0FBUyxFQUFFLE1BQU07SUFDakIsV0FBVyxFQUFFLEtBQUs7Q0FDckIsQ0FBQztBQUlOLE1BQWEsYUFBYyxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUU5RCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxLQUFLLE1BQU0sS0FBSyxJQUFJLE9BQU8sRUFBRTtZQUN6QixLQUFLLENBQUMsUUFBUSxHQUFHLHFCQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuRDtRQUVELElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztRQUVaLE9BQU8sNkJBQUssS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDaEIsNkJB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UUFDVixNQUFNLEVBQUUsbUVBQW1FO1FBQzNFLGNBQWMsRUFBRSxrREFBa0Q7S0FDckU7SUFDRDtRQUNJLE9BQU8sRUFBRSxzREFBc0Q7UUFDL0QsT0FBTyxFQUFFLENBQUM7UUFDVixNQUFNLEVBQUUsK0NBQStDO1FBQ3ZELGNBQWMsRUFBRSxrREFBa0Q7S0FDckU7SUFDRDtRQUNJLE9BQU8sRUFBRSx5REFBeUQ7UUFDbEUsT0FBTyxFQUFFLENBQUM7UUFDVixNQUFNLEVBQUUsNERBQTREO1FBQ3BFLGNBQWMsRUFBRSxrREFBa0Q7S0FDckU7Q0FDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GaWxlUGF0aHMnO1xuXG5jbGFzcyBTdHlsZXMge1xuXG4gICAgcHVibGljIHN0YXRpYyBlbnRyaWVzOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICBkaXNwbGF5OiAndGFibGUnLFxuICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgfTtcblxuICAgIHB1YmxpYyBzdGF0aWMgZW50cnk6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICAgIGRpc3BsYXk6ICd0YWJsZS1yb3cnLFxuICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgfTtcblxuICAgIHB1YmxpYyBzdGF0aWMgaWR4OiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICBkaXNwbGF5OiAndGFibGUtY2VsbCcsXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICc1cHgnLFxuICAgICAgICBmb250U2l6ZTogJzIycHgnLFxuICAgICAgICB0ZXh0QWxpZ246ICdyaWdodCdcbiAgICB9O1xuXG4gICAgcHVibGljIHN0YXRpYyBsaW5rOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICBkaXNwbGF5OiAndGFibGUtY2VsbCcsXG4gICAgICAgIGZvbnRTaXplOiAnMjJweCcsXG4gICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgICBwYWRkaW5nTGVmdDogJzVweCdcbiAgICB9O1xuXG59XG5cbmV4cG9ydCBjbGFzcyBUb3BQREZFeGFtcGxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICAgICAgICBlbnRyeS5kb3dubG9hZCA9IEZpbGVQYXRocy5iYXNlbmFtZShlbnRyeS5saW5rKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpZHggPSAwO1xuXG4gICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXtTdHlsZXMuZW50cmllc30+XG4gICAgICAgICAgICB7ZW50cmllcy5tYXAoZW50cnkgPT5cbiAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeCsrfSBzdHlsZT17U3R5bGVzLmVudHJ5fT5cbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlcy5pZHh9PntpZHh9LjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMubGlua30+PGEgaHJlZj17ZW50cnkubGlua30gZG93bmxvYWQ9e2VudHJ5LmRvd25sb2FkfT57ZW50cnkudGl0bGV9PC9hPjwvZGl2PlxuICAgICAgICAgICAgICAgICA8L2Rpdj4gKX1cbiAgICAgICAgPC9kaXY+O1xuICAgIH1cblxufVxuXG5cbmludGVyZmFjZSBJUHJvcHMge1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cblxuXG5pbnRlcmZhY2UgRW50cnkge1xuXG4gICAgdGl0bGU6IHN0cmluZztcblxuICAgIHNjb3JlOiBudW1iZXI7XG5cbiAgICBsaW5rOiBzdHJpbmc7XG5cbiAgICBjb21tZW50c0xpbms6IHN0cmluZztcblxuICAgIC8vIHRoZSBkb3dubG9hZCBhdHRyaWJ1dGUgZm9yIHRoZSBmaWxlbmFtZSB0byB1c2UgYW5kIGFsc28gdG8gdHJpZ2dlclxuICAgIC8vIGRvd25sb2FkIG5vdCBhIG5hdmlnYXRlXG5cbiAgICBkb3dubG9hZD86IHN0cmluZztcblxufVxuXG5jb25zdCBlbnRyaWVzOiBFbnRyeVtdID0gW1xuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk5vcndlZ2lhbiBDb25zdW1lciBDb3VuY2lsIHJlcG9ydCBvbiBob3cgdGVjaCBjb21wYW5pZXMgdXNlIGRhcmsgcGF0dGVybnMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2NjEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2ZpbC5mb3JicnVrZXJyYWRldC5ub1xcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAxOFxcLzA2XFwvMjAxOC0wNi0yNy1kZWNlaXZlZC1ieS1kZXNpZ24tZmluYWwucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NDA2MTg2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFzc2VtYmx5IExhbmd1YWdlIGZvciBCZWdpbm5lcnMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1OTAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3l1cmljaGV2LmNvbVxcL3dyaXRpbmdzXFwvQUw0Qi1FTi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1NDkwNTBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFBlcmlvZGljIFRhYmxlIG9mIERhdGEgU3RydWN0dXJlcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUzNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvc3RyYXRvcy5zZWFzLmhhcnZhcmQuZWR1XFwvZmlsZXNcXC9zdHJhdG9zXFwvZmlsZXNcXC9wZXJpb2RpY3RhYmxlZGF0YXN0cnVjdHVyZXMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MzE0NTU1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbXBldGl0aXZlIFByb2dyYW1tZXIncyBIYW5kYm9vayAoMjAxNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1MTQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2NzZXMuZmlcXC9ib29rLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjk1MjIyMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJERUYgQ09OIHJlcG9ydCBvbiB2dWxuZXJhYmlsaXRpZXMgaW4gVVMgZWxlY3Rpb24gaW5mcmFzdHJ1Y3R1cmUgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1MDksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2RlZmNvbi5vcmdcXC9pbWFnZXNcXC9kZWZjb24tMjZcXC9ERUYlMjBDT04lMjAyNiUyMHZvdGluZyUyMHZpbGxhZ2UlMjByZXBvcnQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MTEyMTcyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk9yaWdpbmFsIFNvdXJjZSBjb2RlIGZvciB0aGUgRnVyYnkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0ODAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LnNlYW5yaWRkbGUuY29tXFwvZnVyYnlzb3VyY2UucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzUxNTk5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlByb2dyYW1taW5nIFBhcmFkaWdtcyBmb3IgRHVtbWllczogV2hhdCBFdmVyeSBQcm9ncmFtbWVyIFNob3VsZCBLbm93ICgyMDA5KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQzOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmluZm8udWNsLmFjLmJlXFwvfnB2clxcL1ZhblJveUNoYXB0ZXIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MzgxNjQwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNlbGVjdGVkIEVzc2F5cyBvZiBSaWNoYXJkIE0uIFN0YWxsbWFuIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzU1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuZ251Lm9yZ1xcL3BoaWxvc29waHlcXC9mc2ZzXFwvcm1zLWVzc2F5cy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY5MjcxNTRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFNpdGUgUmVsaWFiaWxpdHkgV29ya2Jvb2s6IFByYWN0aWNhbCBXYXlzIHRvIEltcGxlbWVudCBTUkUgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzNTEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3NlcnZpY2VzLmdvb2dsZS5jb21cXC9maFxcL2ZpbGVzXFwvbWlzY1xcL3RoZS1zaXRlLXJlbGlhYmlsaXR5LXdvcmtib29rLW5leHQxOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc2MTQ5MDdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSW50ZWwgQW5hbHlzaXMgb2YgU3BlY3VsYXRpdmUgRXhlY3V0aW9uIFNpZGUgQ2hhbm5lbHMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzNDYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3Nyb29tLmludGVsLmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvc2l0ZXNcXC8xMVxcLzIwMThcXC8wMVxcL0ludGVsLUFuYWx5c2lzLW9mLVNwZWN1bGF0aXZlLUV4ZWN1dGlvbi1TaWRlLUNoYW5uZWxzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjA3OTkxMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJWaXBhc3NhbmEgZm9yIEhhY2tlcnMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzNDUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2dpdGh1Yi5jb21cXC9kZW9iYWxkXFwvdmlwYXNzYW5hLWZvci1oYWNrZXJzXFwvYmxvYlxcL21hc3RlclxcL3ZpcGFzc2FuYS1mb3ItaGFja2Vycy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY4NDIwNDBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiV3JpdGluZyBOZXR3b3JrIERyaXZlcnMgaW4gUnVzdCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMyNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lm5ldC5pbi50dW0uZGVcXC9maWxlYWRtaW5cXC9iaWJ0ZXhcXC9wdWJsaWNhdGlvbnNcXC90aGVzZXNcXC8yMDE4LWl4eS1ydXN0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQwNTUxNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJOU0EgcG9zdGVycyBmcm9tIHRoZSA1MHMgYW5kIDYwcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMyMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuZ292ZXJubWVudGF0dGljLm9yZ1xcLzI4ZG9jc1xcL05TQXNlY3VyaXR5UG9zdGVyc18xOTUwcy02MHMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MjIyODI3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcImlPUyAxMSBTZWN1cml0eSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMyMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmFwcGxlLmNvbVxcL2J1c2luZXNzXFwvZG9jc1xcL2lPU19TZWN1cml0eV9HdWlkZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYxNDA0MThcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ29nbml0aXZlIERpc3RvcnRpb25zIG9mIFBlb3BsZSBXaG8gR2V0IFN0dWZmIERvbmUgKDIwMTIpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzE4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9wZGZzLnNlbWFudGljc2Nob2xhci5vcmdcXC9wcmVzZW50YXRpb25cXC8xYTU5XFwvN2E5Y2E4YjAzZDg2YWU5YTJmODZkZDkwZTdiYmZmNDgxZmFiLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzUzMjM2MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBcHBsZSBUMiBTZWN1cml0eSBDaGlwOiBTZWN1cml0eSBPdmVydmlldyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMxNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmFwcGxlLmNvbVxcL21hY1xcL2RvY3NcXC9BcHBsZV9UMl9TZWN1cml0eV9DaGlwX092ZXJ2aWV3LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODMzNzgyNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJVYmVyIFNlbGYtRHJpdmluZyBDYXIgVGhhdCBTdHJ1Y2sgUGVkZXN0cmlhbiBXYXNuXFx1MjAxOXQgU2V0IHRvIFN0b3AgaW4gYW4gRW1lcmdlbmN5XCIsXG4gICAgICAgIFwic2NvcmVcIjogMzE0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cubnRzYi5nb3ZcXC9pbnZlc3RpZ2F0aW9uc1xcL0FjY2lkZW50UmVwb3J0c1xcL1JlcG9ydHNcXC9IV1kxOE1IMDEwLXByZWxpbS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcxNDQxNjBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEF3ayBQcm9ncmFtbWluZyBMYW5ndWFnZSAoMTk4OCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMTQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2lhODAyMzA5LnVzLmFyY2hpdmUub3JnXFwvMjVcXC9pdGVtc1xcL3BkZnktTWdOMEgxam9Jb0RWb0lDN1xcL1RoZV9BV0tfUHJvZ3JhbW1pbmdfTGFuZ3VhZ2UucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MTQwOTM0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSAkMjVCIGVpZ2VudmVjdG9yICgyMDA2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMxMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnJvc2UtaHVsbWFuLmVkdVxcL35icnlhblxcL2dvb2dsZUZpbmFsVmVyc2lvbkZpeGVkLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjA5MTY0NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUZWFjaCBZb3Vyc2VsZiBMb2dpYzogQSBTdHVkeSBHdWlkZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMwNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmxvZ2ljbWF0dGVycy5uZXRcXC9yZXNvdXJjZXNcXC9wZGZzXFwvVGVhY2hZb3Vyc2VsZkxvZ2ljMjAxNy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg3NTc5NzJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBDODkgY29tcGlsZXIgdGhhdCBwcm9kdWNlcyBleGVjdXRhYmxlcyB0aGF0IGFyZSBhbHNvIHZhbGlkIEFTQ0lJIHRleHQgZmlsZXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyOTcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmNzLmNtdS5lZHVcXC9+dG9tN1xcL2FiY1xcL3BhcGVyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjMxMjMxN1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTb2Z0d2FyZS1EZWZpbmVkIFJhZGlvIGZvciBFbmdpbmVlcnMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyOTIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmFuYWxvZy5jb21cXC9tZWRpYVxcL2VuXFwvdHJhaW5pbmctc2VtaW5hcnNcXC9kZXNpZ24taGFuZGJvb2tzXFwvU29mdHdhcmUtRGVmaW5lZC1SYWRpby1mb3ItRW5naW5lZXJzLTIwMThcXC9TRFI0RW5naW5lZXJzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzM5OTU1NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJOb3RlcyBvbiBEaXNjcmV0ZSBNYXRoZW1hdGljcyAoMjAxNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyODcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmNzLnlhbGUuZWR1XFwvaG9tZXNcXC9hc3BuZXNcXC9jbGFzc2VzXFwvMjAyXFwvbm90ZXMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MzkxNTgwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNldCBUaGVvcnkgYW5kIEFsZ2VicmEgaW4gQ1M6IEludHJvZHVjdGlvbiB0byBNYXRoZW1hdGljYWwgTW9kZWxpbmcgKDIwMTMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjgxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9wZGZzLnNlbWFudGljc2Nob2xhci5vcmdcXC9kMTA2XFwvNmI2ZGU2MDFjMWQ3ZDVhZjI1YWYzZjcwOTFiYzdhZDNhZDUxLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzg0MDcxN1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUZXN0aW1vbnkgb2YgTWFyayBadWNrZXJiZXJnIFxcdTIwMTMgSGVhcmluZyBCZWZvcmUgVVMgSG91c2Ugb2YgUmVwcmVzZW50YXRpdmVzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjgwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2RvY3MuaG91c2UuZ292XFwvbWVldGluZ3NcXC9JRlxcL0lGMDBcXC8yMDE4MDQxMVxcLzEwODA5MFxcL0hIUkctMTE1LUlGMDAtV3N0YXRlLVp1Y2tlcmJlcmdNLTIwMTgwNDExLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjc5NDA1OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTb2Npb2Vjb25vbWljIGdyb3VwIGNsYXNzaWZpY2F0aW9uIGJhc2VkIG9uIHVzZXIgZmVhdHVyZXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNzksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvcGltZy1mYWl3LnVzcHRvLmdvdlxcL2ZkZFxcLzgzXFwvMjAxOFxcLzI4XFwvMDAzXFwvMC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY4NjYyOTJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiIEFwcGxlIFN1cHBsaWVyIExpc3QgXFx1MjAxMyBUb3AgMjAwIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjc0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuYXBwbGUuY29tXFwvc3VwcGxpZXItcmVzcG9uc2liaWxpdHlcXC9wZGZcXC9BcHBsZS1TdXBwbGllci1MaXN0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODE5OTE3MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTdGVsbGFyIFByb3RvY29sOiBBIEZlZGVyYXRlZCBNb2RlbCBmb3IgSW50ZXJuZXQtTGV2ZWwgQ29uc2Vuc3VzICgyMDE2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI2MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnN0ZWxsYXIub3JnXFwvcGFwZXJzXFwvc3RlbGxhci1jb25zZW5zdXMtcHJvdG9jb2wucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MTI1OTIwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhvdyB0byBXcml0ZSBhIFRlY2huaWNhbCBQYXBlciBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI2MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcGRmcy5zZW1hbnRpY3NjaG9sYXIub3JnXFwvNDQxZlxcL2FjN2MyMDIwZTFjOGYwZDMyYWRmZmNhNjk3YmJiOGExOThhMS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgyMjUxOTdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIE1ha2luZyBvZiBQcmluY2Ugb2YgUGVyc2lhICgyMDExKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI2MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuam9yZGFubWVjaG5lci5jb21cXC9kb3dubG9hZHNcXC9tYWtwb3BzYW1wbGUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3ODQ1OTM3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlBJRCBXaXRob3V0IGEgUGhEICgyMDE2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI2MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cud2VzY290dGRlc2lnbi5jb21cXC9hcnRpY2xlc1xcL3BpZFxcL3BpZFdpdGhvdXRBUGhkLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjI1NzE1NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQcmluY2lwbGVzIG9mIEFsZ29yaXRobWljIFByb2JsZW0gU29sdmluZyAoMjAxNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNTYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jc2Mua3RoLnNlXFwvfmpzYW5uZW1vXFwvc2xhc2tcXC9tYWluLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODI4NzM1NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQdWJsaWMucmVzb3VyY2Uub3JnIHdpbnMgYXBwZWFsIG9uIHJpZ2h0IHRvIHB1Ymxpc2ggdGhlIGxhdyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI0OCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNhZGMudXNjb3VydHMuZ292XFwvaW50ZXJuZXRcXC9vcGluaW9ucy5uc2ZcXC81MzNENDdBRjg4M0M4MTk0ODUyNTgyQ0QwMDUyQjhENFxcLyRmaWxlXFwvMTctNzAzNS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1Nzk3NDJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTUlUIENhcmVlciBEZXZlbG9wbWVudCBIYW5kYm9vayBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI0OCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZ2VjZC5taXQuZWR1XFwvc2l0ZXNcXC9kZWZhdWx0XFwvZmlsZXNcXC9hYm91dFxcL2ZpbGVzXFwvY2FyZWVyLWhhbmRib29rLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzMzMTMxNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTZXZlbiBQdXp6bGVzIFlvdSBUaGluayBZb3UgTXVzdCBOb3QgSGF2ZSBIZWFyZCBDb3JyZWN0bHkgKDIwMDYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjM0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cubWF0aC5kYXJ0bW91dGguZWR1XFwvfnB3XFwvc29sdXRpb25zLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjk5ODgyM1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJMLXRoZWFuaW5lLCBhIGNvbnN0aXR1ZW50IGluIHRlYSwgYW5kIGl0cyBlZmZlY3Qgb24gbWVudGFsIHN0YXRlICgyMDA4KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIzMyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9hcGpjbi5uaHJpLm9yZy50d1xcL3NlcnZlclxcL0FQSkNOXFwvMTclMjBTdXBwbCUyMDFcXC9cXC8xNjcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NjQ0MjA0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNlbGYtQXdhcmVuZXNzIGZvciBJbnRyb3ZlcnRzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjI1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2NsaWZmYy5vcmdcXC9ibG9nXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDE4XFwvMDVcXC9BV2FyT2ZXb3Jkcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcwMTAxOTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSG91c2UgT3ZlcnNpZ2h0IENvbW1pdHRlZSBSZXBvcnQgb24gRXF1aWZheCBCcmVhY2ggW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMjEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL292ZXJzaWdodC5ob3VzZS5nb3ZcXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMThcXC8xMlxcL0VxdWlmYXgtUmVwb3J0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODY1MTY3NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBcHBsZSBGaWxlIFN5c3RlbSBSZWZlcmVuY2UgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMjAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2RldmVsb3Blci5hcHBsZS5jb21cXC9zdXBwb3J0XFwvYXBwbGUtZmlsZS1zeXN0ZW1cXC9BcHBsZS1GaWxlLVN5c3RlbS1SZWZlcmVuY2UucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDQwNzQyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBvcmlnaW5hbCBwaXRjaCBmb3IgRGlhYmxvICgxOTk0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIxOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuZ3JheWJlYXJkZ2FtZXMuY29tXFwvZG93bmxvYWRcXC9kaWFibG9fcGl0Y2gucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2Njg1Nzk1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNlbmF0b3IgcmVxdWVzdHMgYmV0dGVyIGh0dHBzIGNvbXBsaWFuY2UgYXQgVVMgRGVwYXJ0bWVudCBvZiBEZWZlbnNlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjE2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cud3lkZW4uc2VuYXRlLmdvdlxcL2ltb1xcL21lZGlhXFwvZG9jXFwvd3lkZW4td2ViLWVuY3J5cHRpb24tbGV0dGVyLXRvLWRvZC1jaW8ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MTI5MDkzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkJlcmtzaGlyZSBIYXRoYXdheSAyMDE3IEFubnVhbCBMZXR0ZXIgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMTYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmJlcmtzaGlyZWhhdGhhd2F5LmNvbVxcL2xldHRlcnNcXC8yMDE3bHRyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjQ1MzE1MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIb3cgdG8gQmUgYSBQcm9ncmFtbWVyOiBBIFNob3J0LCBDb21wcmVoZW5zaXZlLCBhbmQgUGVyc29uYWwgU3VtbWFyeSAoMjAwMikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMTUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5kb2MuaWMuYWMudWtcXC9+c3VzYW5cXC80NzVcXC9Ib3dUb0JlQVByb2dyYW1tZXIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NzQyMTk5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkl0IFRha2VzIFR3byBOZXVyb25zIHRvIFJpZGUgYSBCaWN5Y2xlICgyMDA0KVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIxMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9wYXJhZGlzZS5jYWx0ZWNoLmVkdVxcL35jb29rXFwvcGFwZXJzXFwvVHdvTmV1cm9ucy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYyMTUxMzBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVW5pdGVkIFN0YXRlcyB2LiBNaWNyb3NvZnQgQ29ycC4gRGlzbWlzc2VkIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjA3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuc3VwcmVtZWNvdXJ0LmdvdlxcL29waW5pb25zXFwvMTdwZGZcXC8xNy0yXzE4MjQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2ODU4NTk3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlN0YXJDcmFmdDogUmVtYXN0ZXJlZCBcXHUyMDEzIEVtdWxhdGluZyBhIGJ1ZmZlciBvdmVyZmxvdyBmb3IgZnVuIGFuZCBwcm9maXQgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMDUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvMHhlYi5uZXRcXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMThcXC8wMlxcL1N0YXJDcmFmdF9FVURfRW11bGF0b3IucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MzA1NzY5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhvdyB0byBmaW5kIGhpZGRlbiBjYW1lcmFzICgyMDAyKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIwMyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cudGVudGFjbGUuZnJhbmtlbi5kZVxcL3BhcGVyc1xcL2hpZGRlbmNhbXMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MzgxNTkyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBFdm9sdXRpb24gb2YgQyBQcm9ncmFtbWluZyBQcmFjdGljZXM6IEEgU3R1ZHkgb2YgVW5peCAoMjAxNikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMDMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dzIuZG1zdC5hdWViLmdyXFwvZGRzXFwvcHVic1xcL2NvbmZcXC8yMDE2LUlDU0UtUHJvZ0V2b2xcXC9odG1sXFwvU0xLMTYucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MDQ2MzMyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkJsb2NrY2hhaW5zIGZyb20gYSBEaXN0cmlidXRlZCBDb21wdXRpbmcgUGVyc3BlY3RpdmUgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMDIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvY3MuYnJvd24uZWR1XFwvY291cnNlc1xcL2NzY2kyOTUyLWFcXC9wYXBlcnNcXC9wZXJzcGVjdGl2ZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYxOTE1MDZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSG93IHRvIEFyY2hpdGVjdCBhIFF1ZXJ5IENvbXBpbGVyLCBSZXZpc2l0ZWQgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMDEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jcy5wdXJkdWUuZWR1XFwvaG9tZXNcXC9yb21wZlxcL3BhcGVyc1xcL3RhaGJvdWItc2lnbW9kMTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3ODUxOTQxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZvdW5kYXRpb25zIG9mIERhdGEgU2NpZW5jZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE5OCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuY3MuY29ybmVsbC5lZHVcXC9qZWhcXC9ib29rLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzEzMTk0MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIFdhbmRlcmluZyBNaW5kIElzIGFuIFVuaGFwcHkgTWluZCAoMjAxMCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxOTcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2dyZWF0ZXJnb29kLmJlcmtlbGV5LmVkdVxcL2ltYWdlc1xcL2FwcGxpY2F0aW9uX3VwbG9hZHNcXC9LSUxMSU5HU1dPUlRILVdhbmRlcmluZ01pbmQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2Nzk3OTQ3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbXBhcmluZyBMYW5ndWFnZXMgZm9yIEVuZ2luZWVyaW5nIFNlcnZlciBTb2Z0d2FyZTogRXJsYW5nLCBHbywgYW5kIFNjYWxhXFwvQWtrYSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE5NCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuZGNzLmdsYS5hYy51a1xcL350cmluZGVyXFwvcGFwZXJzXFwvc2FjLTE4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzM0MjI3NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJCdW1wZXIgU3RpY2tlciBDb21wdXRlciBTY2llbmNlICgxOTg1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE5MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuYm93ZG9pbi5lZHVcXC9+bHRvbWFcXC90ZWFjaGluZ1xcL2NzMzQwXFwvc3ByaW5nMDVcXC9jb3Vyc2VzdHVmZlxcL0JlbnRsZXlfQnVtcGVyU3RpY2tlci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3OTQ1MDdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRmFjZWJvb2sgUTEgMjAxOCBFYXJuaW5ncyBTbGlkZXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxOTEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2ludmVzdG9yLmZiLmNvbVxcL2ZpbGVzXFwvZG9jX2ZpbmFuY2lhbHNcXC8yMDE4XFwvUTFcXC9RMS0yMDE4LUVhcm5pbmdzLVByZXNlbnRhdGlvbi0oMSkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2OTI1NjcxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkludHJvZHVjdGlvbiB0byBPUyBBYnN0cmFjdGlvbnMgVXNpbmcgUGxhbiA5IGZyb20gQmVsbCBMYWJzICgyMDA3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE5MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvbHN1Yi5vcmdcXC93aG9cXC9uZW1vXFwvOS5pbnRyby5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYyNTMxOTNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTWljcm9zb2Z0IFdvcmQgZm9yIFdpbmRvd3MgMS4wIFBvc3Rtb3J0ZW0gKDE5ODkpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTkwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2FudGl0cnVzdC5zbGF0ZWQub3JnXFwvd3d3Lmlvd2Fjb25zdW1lcmNhc2Uub3JnXFwvMDExNjA3XFwvODAwMFxcL1BYMDg4NzUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NzY0NzkwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFyY2hpdGVjdHVyZSBvZiBhIERhdGFiYXNlIFN5c3RlbSAoMjAwNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxODksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvZGIuY3MuYmVya2VsZXkuZWR1XFwvcGFwZXJzXFwvZm50ZGIwNy1hcmNoaXRlY3R1cmUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MTkwOTQ3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk1vbmV5IGNyZWF0aW9uIGluIHRoZSBtb2Rlcm4gZWNvbm9teSAoMjAxNCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxODksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5iYW5rb2ZlbmdsYW5kLmNvLnVrXFwvLVxcL21lZGlhXFwvYm9lXFwvZmlsZXNcXC9xdWFydGVybHktYnVsbGV0aW5cXC8yMDE0XFwvbW9uZXktY3JlYXRpb24taW4tdGhlLW1vZGVybi1lY29ub215LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjYwNDI1MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJFeHBsb2l0aW5nIG1vZGVybiBtaWNyb2FyY2hpdGVjdHVyZXM6IE1lbHRkb3duLCBTcGVjdHJlLCBhbmQgb3RoZXIgYXR0YWNrcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE4OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9wZW9wbGUucmVkaGF0LmNvbVxcL2pjbVxcL3RhbGtzXFwvRk9TREVNXzIwMTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MzA0NDYwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkJheWVzXFx1MjAxOSBUaGVvcmVtIGluIHRoZSAyMXN0IENlbnR1cnkgKDIwMTMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTg1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3dlYi5pcGFjLmNhbHRlY2guZWR1XFwvc3RhZmZcXC9mbWFzY2lcXC9ob21lXFwvYXN0cm9fcmVmc1xcL1NjaWVuY2UtMjAxMy1FZnJvbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgyMTMxMTdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSG93IHRvIHNjYWxlIGEgZGlzdHJpYnV0ZWQgc3lzdGVtIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTg0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9jZG4ub3JlaWxseXN0YXRpYy5jb21cXC9lblxcL2Fzc2V0c1xcLzFcXC9ldmVudFxcLzI0NFxcL0hvdyUyMHRvJTIwc2NhbGUlMjBhJTIwZGlzdHJpYnV0ZWQlMjBzeXN0ZW0lMjBQcmVzZW50YXRpb24ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTI5NzgwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhvdyB0byB3cml0ZSBNYXRoZW1hdGljcyAoMTk3MCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxODIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3Lm1hdGgudXRhaC5lZHVcXC9+cGFcXC8zMDAwXFwvaGFsbW9zLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjgyOTQ0MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIb3cgUnVzdCBJcyBUaWxkZVxcdTIwMTlzIENvbXBldGl0aXZlIEFkdmFudGFnZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE3NyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnJ1c3QtbGFuZy5vcmdcXC9wZGZzXFwvUnVzdC1UaWxkZS1XaGl0ZXBhcGVyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjMxNzcyMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJSZW5kZXJlZCBJbnNlY3VyZTogR1BVIFNpZGUgQ2hhbm5lbCBBdHRhY2tzIEFyZSBQcmFjdGljYWwgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNzQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmNzLnVjci5lZHVcXC9+emhpeXVucVxcL3B1YlxcL2NjczE4X2dwdV9zaWRlX2NoYW5uZWwucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDQ5NjcyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBSYXRlIG9mIFJldHVybiBvbiBFdmVyeXRoaW5nLCAxODcwXFx1MjAxMzIwMTUgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNjgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5mcmJzZi5vcmdcXC9lY29ub21pYy1yZXNlYXJjaFxcL2ZpbGVzXFwvd3AyMDE3LTI1LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjA3ODA1OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTcGVlY2ggYW5kIExhbmd1YWdlIFByb2Nlc3NpbmcsIDNyZCBFZGl0aW9uIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTY3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93ZWIuc3RhbmZvcmQuZWR1XFwvfmp1cmFmc2t5XFwvc2xwM1xcL2VkM2Jvb2sucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MTA0ODY4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk10R294OiBBbm5vdW5jZW1lbnQgb2YgQ29tbWVuY2VtZW50IG9mIENpdmlsIFJlaGFiaWxpdGF0aW9uIFByb2NlZWRpbmdzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTY3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cubXRnb3guY29tXFwvaW1nXFwvcGRmXFwvMjAxODA2MjJfYW5ub3VuY2VtZW50X2VuLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzM3Mzg1N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUb3dhcmRzIGEgVHlwZSBTeXN0ZW0gZm9yIENvbnRhaW5lcnMgYW5kIEFXUyBMYW1iZGEgdG8gQXZvaWQgRmFpbHVyZXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNjcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvY2hyaXN0b3BoZXJtZWlrbGVqb2huLmNvbVxcL3B1YmxpY2F0aW9uc1xcL2hvdGVkZ2UtMjAxOC1jb250YWluZXJzLXByZXByaW50LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjc0NjMxNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBbHBoYWJldCBBbm5vdW5jZXMgU2Vjb25kIFF1YXJ0ZXIgMjAxOCBSZXN1bHRzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTY2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9hYmMueHl6XFwvaW52ZXN0b3JcXC9wZGZcXC8yMDE4UTJfYWxwaGFiZXRfZWFybmluZ3NfcmVsZWFzZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1OTU1MTBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRXZvbHV0aW9uIG9mIEVtYWNzIExpc3AgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNjUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5pcm8udW1vbnRyZWFsLmNhXFwvfm1vbm5pZXJcXC9ob3BsLTQtZW1hY3MtbGlzcC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgyNjcyODVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiS2FkZW1saWE6IEEgUGVlci1Uby1wZWVyIEluZm9ybWF0aW9uIFN5c3RlbSBCYXNlZCBvbiB0aGUgWE9SIE1ldHJpYyAoMjAwMikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNjUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3Bkb3MuY3NhaWwubWl0LmVkdVxcL35wZXRhclxcL3BhcGVyc1xcL21heW1vdW5rb3Yta2FkZW1saWEtbG5jcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg3MTE5ODBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGVlcCBpbWFnZSByZWNvbnN0cnVjdGlvbiBmcm9tIGh1bWFuIGJyYWluIGFjdGl2aXR5IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTY1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuYmlvcnhpdi5vcmdcXC9jb250ZW50XFwvYmlvcnhpdlxcL2Vhcmx5XFwvMjAxN1xcLzEyXFwvMzBcXC8yNDAzMTcuZnVsbC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYxNDAwNTRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBMaXNwIFdheSB0byBUeXBlIFRoZW9yeSBhbmQgRm9ybWFsIFByb29mcyAoMjAxNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNjQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5ldXJvcGVhbi1saXNwLXN5bXBvc2l1bS5vcmdcXC9zdGF0aWNcXC8yMDE3XFwvcGVzY2hhbnNraS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgzODM2NTRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ29tcHV0ZXIgU2NpZW5jZSBJIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTYzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2NzZS51bmwuZWR1XFwvfmNib3Vya2VcXC9Db21wdXRlclNjaWVuY2VPbmUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MDUzMDE1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIklFRUUgUG9zaXRpb24gU3RhdGVtZW50IGluIFN1cHBvcnQgb2YgU3Ryb25nIEVuY3J5cHRpb24gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNjIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvZ2xvYmFscG9saWN5LmllZWUub3JnXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDE4XFwvMDZcXC9JRUVFMTgwMDYucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NDA4NDk0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBFY29ub21pYyBMaW1pdHMgb2YgQml0Y29pbiBhbmQgdGhlIEJsb2NrY2hhaW4gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNjEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvZmFjdWx0eS5jaGljYWdvYm9vdGguZWR1XFwvZXJpYy5idWRpc2hcXC9yZXNlYXJjaFxcL0Vjb25vbWljLUxpbWl0cy1CaXRjb2luLUJsb2NrY2hhaW4ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3Mzk0MjYyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNob3cgSE46IFNvZnR3YXJlIEFyY2hpdGVjdHVyZSwgYWxsIHlvdSBuZWVkIHRvIGtub3cgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNjEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3NoYXJlLmNvbXBvc2lldXguZnJcXC93aGl0ZS1ib29rLXNvZnR3YXJlLWFyY2hpdGVjdHVyZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg3NjE2MDlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTWF0aCBmcm9tIFRocmVlIHRvIFNldmVuOiBUaGUgU3Rvcnkgb2YgYSBNYXRoZW1hdGljYWwgQ2lyY2xlIGZvciBQcmVzY2hvb2xlcnMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNjEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3Lm1zcmkub3JnXFwvcGVvcGxlXFwvc3RhZmZcXC9sZXZ5XFwvZmlsZXNcXC9NQ0xcXC9adm9ua2luLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzAxODU4M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJCcmVha291dCBpbXBsZW1lbnRlZCBpbiBKYXZhU2NyaXB0IGluIGEgUERGXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTYwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9yYXdnaXQuY29tXFwvb3NuclxcL2hvcnJpZnlpbmctcGRmLWV4cGVyaW1lbnRzXFwvbWFzdGVyXFwvYnJlYWtvdXQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3OTE1Mjk2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBNYXRoZW1hdGljcyBvZiBRdWFudHVtIE1lY2hhbmljcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE2MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvdXdhdGVybG9vLmNhXFwvaW5zdGl0dXRlLWZvci1xdWFudHVtLWNvbXB1dGluZ1xcL3NpdGVzXFwvY2EuaW5zdGl0dXRlLWZvci1xdWFudHVtLWNvbXB1dGluZ1xcL2ZpbGVzXFwvdXBsb2Fkc1xcL2ZpbGVzXFwvbWF0aGVtYXRpY3NfcW1fdjIxLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODA0NjM0M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJHb2luZyBJUHY2IE9ubHkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNTgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3BjLm5hbm9nLm9yZ1xcL3N0YXRpY1xcL3B1Ymxpc2hlZFxcL21lZXRpbmdzXFwvTkFOT0c3M1xcLzE2NDVcXC8yMDE4MDYyNV9MYWdlcmhvbG1fVC1Nb2JpbGVfU19Kb3VybmV5X1RvX3YxLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzM5OTg4NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgQmFzaWMgSWRlYXMgaW4gTmV1cmFsIE5ldHdvcmtzICgxOTk0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE1NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3ctaXNsLnN0YW5mb3JkLmVkdVxcL353aWRyb3dcXC9wYXBlcnNcXC9qMTk5NHRoZWJhc2ljLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjExMjQ2NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJOSVNUOiBCbG9ja2NoYWluIFRlY2hub2xvZ3kgT3ZlcnZpZXcgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNTQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL252bHB1YnMubmlzdC5nb3ZcXC9uaXN0cHVic1xcL2lyXFwvMjAxOFxcL05JU1QuSVIuODIwMi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgxNTczNjNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRG8geW91IG5lZWQgYSBibG9ja2NoYWluP1wiLFxuICAgICAgICBcInNjb3JlXCI6IDE1MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZXByaW50LmlhY3Iub3JnXFwvMjAxN1xcLzM3NS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYzMTU0NTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiV3JpdGluZyBOZXR3b3JrIERyaXZlcnMgaW4gR28gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNTIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5uZXQuaW4udHVtLmRlXFwvZmlsZWFkbWluXFwvYmlidGV4XFwvcHVibGljYXRpb25zXFwvdGhlc2VzXFwvMjAxOC1peHktZ28ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4Mzk5Mzg5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkludHJvZHVjdGlvbiB0byBGdW5jdGlvbmFsIFByb2dyYW1taW5nICgxOTg4KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE1MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC91c2ktcGwuZ2l0aHViLmlvXFwvbGNcXC9zcC0yMDE1XFwvZG9jXFwvQmlyZF9XYWRsZXIuJTIwSW50cm9kdWN0aW9uJTIwdG8lMjBGdW5jdGlvbmFsJTIwUHJvZ3JhbW1pbmcuMWVkLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjQ3MTM3MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEZWVwTG9nOiBBbm9tYWx5IERldGVjdGlvbiBhbmQgRGlhZ25vc2lzIGZyb20gU3lzdGVtIExvZ3MgKDIwMTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTQ5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9hY21jY3MuZ2l0aHViLmlvXFwvcGFwZXJzXFwvcDEyODUtZHVBLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzUwNjI2NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJGaXJlZm94OiBUaGUgRWZmZWN0IG9mIEFkIEJsb2NraW5nIG9uIFVzZXIgRW5nYWdlbWVudCB3aXRoIHRoZSBXZWIgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNDksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3Jlc2VhcmNoLm1vemlsbGEub3JnXFwvZmlsZXNcXC8yMDE4XFwvMDRcXC9UaGUtRWZmZWN0LW9mLUFkLUJsb2NraW5nLW9uLVVzZXItRW5nYWdlbWVudC13aXRoLXRoZS1XZWIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MTA1Mzc1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNldHRpbmcgVXAgYSBDYXltYW4gSXNsYW5kcyBDb21wYW55IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTQ3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuc3R1YXJ0c2xhdy5jb21cXC9jbXNcXC9kb2N1bWVudFxcL1NldHRpbmdfdXBfYV9DYXltYW5fSXNsYW5kc19Db21wYW55LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjgwNzc2NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgSnVyeSBJcyBJbjogTW9ub2xpdGhpYyBPUyBEZXNpZ24gSXMgRmxhd2VkIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTQ3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3RzLmRhdGE2MS5jc2lyby5hdVxcL3B1YmxpY2F0aW9uc1xcL2NzaXJvX2Z1bGxfdGV4dFxcL0JpZ2dzX0xIXzE4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzc2NzA2MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJNb2Rlcm4gQ29kZSBSZXZpZXc6IEEgQ2FzZSBTdHVkeSBhdCBHb29nbGUgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNDYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3NiYWNrLml0XFwvcHVibGljYXRpb25zXFwvaWNzZTIwMThzZWlwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODAzNTU0OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBbmFseXNpcyBvZiBVU0IgZmFuIGdpdmVuIHRvIGpvdXJuYWxpc3RzIGF0IE5vcnRoIEtvcmVhLVNpbmdhcG9yZSBTdW1taXQgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNDUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmNsLmNhbS5hYy51a1xcL35zcHMzMlxcL3VzYl9mYW5fcmVwb3J0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzQ1OTA0MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJFbWFpbCBleGNoYW5nZSBiZXR3ZWVuIE1JVCBNZWRpYSBMYWIgYW5kIHRoZSBJT1RBIEZvdW5kYXRpb24gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNDQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LnRhbmdsZWJsb2cuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDE4XFwvMDJcXC9sZXR0ZXJzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjQ1NzEyMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJMaW5lYXIgbG9naWMgYW5kIGRlZXAgbGVhcm5pbmcgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNDIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvdGhlcmlzaW5nc2VhLm9yZ1xcL25vdGVzXFwvdGFsay1sbGRsLXRyYW5zY3JpcHQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MjU1NjEyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlJldml2aW5nIFNtYWxsdGFsay03OCAoMjAxNCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNDIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvZnJldWRlbmJlcmdzLmRlXFwvYmVydFxcL3B1YmxpY2F0aW9uc1xcL0luZ2FsbHMtMjAxNC1TbWFsbHRhbGs3OC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcwNTU5NjBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQmFuZGl0IEFsZ29yaXRobXMgQm9vayBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE0MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9kb3dubG9hZHMudG9yLWxhdHRpbW9yZS5jb21cXC9iYW5kaXRib29rXFwvYm9vay5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc2NDI1NjRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiV2h5IFBoaWxvc29waGVycyBTaG91bGQgQ2FyZSBBYm91dCBDb21wdXRhdGlvbmFsIENvbXBsZXhpdHkgKDIwMTEpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTQwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuc2NvdHRhYXJvbnNvbi5jb21cXC9wYXBlcnNcXC9waGlsb3MucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTczMTQyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkxvZyhHcmFwaCk6IEEgTmVhci1PcHRpbWFsIEhpZ2gtUGVyZm9ybWFuY2UgR3JhcGggUmVwcmVzZW50YXRpb24gKDIwMTgpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTQwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9wZW9wbGUuY3NhaWwubWl0LmVkdVxcL2pzaHVuXFwvcGFwZXJzXFwvbG9nZ3JhcGgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDgxOTc4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNldmVuIFBpbGxhcnMgb2YgQ2F1c2FsIFJlYXNvbmluZyB3aXRoIFJlZmxlY3Rpb25zIG9uIE1hY2hpbmUgTGVhcm5pbmcgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNDAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvZnRwLmNzLnVjbGEuZWR1XFwvcHViXFwvc3RhdF9zZXJcXC9yNDgxLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzE4NzMwNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgcGh5c2ljcyBvZiBiYWtpbmcgZ29vZCBwaXp6YSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE0MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvYXJ4aXYub3JnXFwvZnRwXFwvYXJ4aXZcXC9wYXBlcnNcXC8xODA2XFwvMTgwNi4wODc5MC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc0MzcyMjlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiR2V0IEJpbGxpb25zIG9mIENvcnJlY3QgRGlnaXRzIG9mIFBpIGZyb20gYSBXcm9uZyBGb3JtdWxhICgxOTk5KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE0MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvYWNhZGVtaWNzLnJvd2FuLmVkdVxcL2NzbVxcL2RlcGFydG1lbnRzXFwvbWF0aFxcL2ZhY3VsdHlzdGFmZlxcL2ZhY3VsdHlcXC9vc2xlclxcL0JpbGxpb25zX3BpX2RpZ2l0cy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwNDA2MzBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQWR2YW5jZWQgRGF0YSBBbmFseXNpcyBmcm9tIGFuIEVsZW1lbnRhcnkgUG9pbnQgb2YgVmlldyAoMjAxNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMzksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LnN0YXQuY211LmVkdVxcL35jc2hhbGl6aVxcL0FEQWZhRVBvVlxcL0FEQWZhRVBvVi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY0MTA5MzZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRnJlZW5ldDogQSBEaXN0cmlidXRlZCBBbm9ueW1vdXMgSW5mb3JtYXRpb24gU3RvcmFnZSBhbmQgUmV0cmlldmFsIFN5c3RlbSAoMjAwMCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMzgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvc25hcC5zdGFuZm9yZC5lZHVcXC9jbGFzc1xcL2NzMjI0dy1yZWFkaW5nc1xcL2NsYXJrZTAwZnJlZW5ldC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg3MDkzODNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFNpbXBsZSBFc3NlbmNlIG9mIEF1dG9tYXRpYyBEaWZmZXJlbnRpYXRpb24gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMzcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvY29uYWwubmV0XFwvcGFwZXJzXFwvZXNzZW5jZS1vZi1hZFxcL2Vzc2VuY2Utb2YtYWQtaWNmcC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgzMDY4NjBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUHJvZ3JhbW1pbmcgUGFyYWRpZ21zIGFuZCBCZXlvbmQgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMzcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvY3MuYnJvd24uZWR1XFwvfnNrXFwvUHVibGljYXRpb25zXFwvUGFwZXJzXFwvUHVibGlzaGVkXFwva2YtcHJvZy1wYXJhZGlnbXMtYW5kLWJleW9uZFxcL3BhcGVyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzM4MjM2NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBbHBoYWJldCBRMSAyMDE4IEVhcm5pbmdzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTM1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9hYmMueHl6XFwvaW52ZXN0b3JcXC9wZGZcXC8yMDE4UTFfYWxwaGFiZXRfZWFybmluZ3NfcmVsZWFzZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY5MDcwMDdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU3RhdGUgb2YgTXVsdGljb3JlIE9DYW1sIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTM1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2tjc3JrLmluZm9cXC9zbGlkZXNcXC9tY29jYW1sX2dhbGxpdW0ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NDE2Nzk3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBNZXRhLVByb2JsZW0gb2YgQ29uc2Npb3VzbmVzcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEzMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcGhpbHBhcGVycy5vcmdcXC9hcmNoaXZlXFwvQ0hBVE1PLTMyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjM2MDE5OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJXaGF0IGRvIFN0YW5mb3JkIENTIFBoRCBzdHVkZW50cyB0aGluayBvZiB0aGVpciBQaEQgcHJvZ3JhbT8gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMzAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2FyY2hpdmUub3JnXFwvZG93bmxvYWRcXC9waGRfc3R1ZGVudF9zdXJ2ZXlfc3VtbWFyeV9yZXBvcnRfMGE1Y1xcL3BoZF9zdHVkZW50X3N1cnZleV9zdW1tYXJ5X3JlcG9ydF8wYTVjLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzQ5Mzk2M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgd2VpcmQgYW5kIHdvbmRlcmZ1bCB3b3JsZCBvZiBjb25zdHJ1Y3RpdmUgbWF0aGVtYXRpY3MgKDIwMTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTMwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9ob21lLnNhbmRpZWdvLmVkdVxcL35zaHVsbWFuXFwvcGFwZXJzXFwvcmFiYml0aG9sZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0MTE5MzVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTG93LUxhdGVuY3kgVmlkZW8gUHJvY2Vzc2luZyBVc2luZyBUaG91c2FuZHMgb2YgVGlueSBUaHJlYWRzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTMwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cudXNlbml4Lm9yZ1xcL3N5c3RlbVxcL2ZpbGVzXFwvY29uZmVyZW5jZVxcL25zZGkxN1xcL25zZGkxNy1mb3VsYWRpLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjE5NzI1M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTZWxmLWVuY3J5cHRpbmcgZGVjZXB0aW9uOiB3ZWFrbmVzc2VzIGluIHRoZSBlbmNyeXB0aW9uIG9mIHNvbGlkIHN0YXRlIGRyaXZlcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEyOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnJ1Lm5sXFwvcHVibGlzaFxcL3BhZ2VzXFwvOTA5Mjc1XFwvZHJhZnQtcGFwZXJfMS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgzODI5NzVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQysrIENvcmUgQ29yb3V0aW5lcyBQcm9wb3NhbCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEyOCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cub3Blbi1zdGQub3JnXFwvanRjMVxcL3NjMjJcXC93ZzIxXFwvZG9jc1xcL3BhcGVyc1xcLzIwMThcXC9wMTA2M3IwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODAzNjc0OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQb3dlciBMYXdzIGFuZCBSaWNoLUdldC1SaWNoZXIgUGhlbm9tZW5hICgyMDEwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEyNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuY3MuY29ybmVsbC5lZHVcXC9ob21lXFwva2xlaW5iZXJcXC9uZXR3b3Jrcy1ib29rXFwvbmV0d29ya3MtYm9vay1jaDE4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzE5OTc2NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIFRhc3RlIG9mIExpbmVhciBMb2dpYyAoMTk5MykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMjYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2hvbWVwYWdlcy5pbmYuZWQuYWMudWtcXC93YWRsZXJcXC9wYXBlcnNcXC9saW5lYXJ0YXN0ZVxcL2xpbmVhcnRhc3RlLXJldmlzZWQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NjQxNDc2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFuIEFuYWx5c2lzIG9mIHRoZSBJbXBhY3Qgb2YgQXJiaXRyYXJ5IEJsb2NrY2hhaW4gQ29udGVudCBvbiBCaXRjb2luIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTI1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9mYzE4LmlmY2EuYWlcXC9wcmVwcm9jZWVkaW5nc1xcLzYucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NjE3MTM2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlBvbGFyRlM6IEFsaWJhYmEgRGlzdHJpYnV0ZWQgRmlsZSBTeXN0ZW0gZm9yIFNoYXJlZCBTdG9yYWdlIENsb3VkIERhdGFiYXNlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTIyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy52bGRiLm9yZ1xcL3B2bGRiXFwvdm9sMTFcXC9wMTg0OS1jYW8ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3ODE0MTg1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk5vdGF0aW9uIGFzIGEgVG9vbCBvZiBUaG91Z2h0ICgxOTc5KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEyMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuZWVjZy50b3JvbnRvLmVkdVxcL35qemh1XFwvY3NjMzI2XFwvcmVhZGluZ3NcXC9pdmVyc29uLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjg0MjM3OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJNaW5kZnVsbmVzcyBNZWRpdGF0aW9uIEltcGFpcnMgVGFzayBNb3RpdmF0aW9uIGJ1dCBOb3QgUGVyZm9ybWFuY2UgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMjAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3NjaS1odWIudHdcXC9kb3dubG9hZHNcXC8yMzEwXFwvMTAuMTAxNkBqLm9iaGRwLjIwMTguMDUuMDAxLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzM0MjYzOVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJGYWxsYWNpZXMgb2YgRGlzdHJpYnV0ZWQgQ29tcHV0aW5nIEV4cGxhaW5lZCAoMjAwNikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMTksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LnJnb2FyY2hpdGVjdHMuY29tXFwvRmlsZXNcXC9mYWxsYWNpZXMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTA1OTI3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZ1enppbmcgdGhlIE9wZW5CU0QgS2VybmVsIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTE5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cub3BlbmJzZC5vcmdcXC9wYXBlcnNcXC9mdXp6LXNsaWRlcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc5MjkyMzRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIGNvbmNlcHR1YWwgb3JpZ2lucyBvZiBNYXh3ZWxsJ3MgZXF1YXRpb25zIGFuZCBnYXVnZSB0aGVvcnkgKDIwMTQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTE3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5waHlzaWNzLnVtZC5lZHVcXC9ncnRcXC90YWpcXC82NzVlXFwvT3JpZ2luc29mTWF4d2VsbGFuZEdhdWdlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjMyNTYwNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgQmlydGggb2YgUHJvbG9nICgxOTkyKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDExNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd2ViLnN0YW5mb3JkLmVkdVxcL2NsYXNzXFwvbGluZ3Vpc3QyODlcXC9wMzctY29sbWVyYXVlci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgxNzgyMTVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSXMgSVB2NiBvbmx5IGZvciB0aGUgUmljaD8gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMTYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3JpcGU3Ni5yaXBlLm5ldFxcL3ByZXNlbnRhdGlvbnNcXC85LTIwMTgtMDUtMTctaXB2Ni1yZWFzb25zLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzA2MDQzN1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJPbmUgcGFyYW1ldGVyIGlzIGFsd2F5cyBlbm91Z2ggW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMTYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvY29sYWxhLmJjcy5yb2NoZXN0ZXIuZWR1XFwvcGFwZXJzXFwvcGlhbnRhZG9zaTIwMThvbmUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MTYxMDMyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgUGxhbiA5IEMgY29tcGlsZXIgZm9yIFJJU0MtViBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDExNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmdlZWtsYW4uY28udWtcXC9maWxlc1xcL29zaHVnNjktTWlsbGVyLWNyaXNjdi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgzMDgyNTVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU2VjdXJpdHkgQW5hbHlzaXMgb2YgV2lyZUd1YXJkIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTE1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9jb3Vyc2VzLmNzYWlsLm1pdC5lZHVcXC82Ljg1N1xcLzIwMThcXC9wcm9qZWN0XFwvSGUtWHUtWHUtV2lyZUd1YXJkLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzg4MzI2OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBdXRvbWF0aWMgRGlmZmVyZW50aWF0aW9uIGluIE1hY2hpbmUgTGVhcm5pbmc6IEEgU3VydmV5IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTE0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2ptbHIub3JnXFwvcGFwZXJzXFwvdm9sdW1lMThcXC8xNy00NjhcXC8xNy00NjgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDkxMjA4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlBsZWRnZSBhbmQgVW52ZWlsIGluIE9wZW5CU0QgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMTQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5vcGVuYnNkLm9yZ1xcL3BhcGVyc1xcL0JlY2tQbGVkZ2VVbnZlaWxCU0RDYW4yMDE4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzI3NzA2N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJVc2luZyBQcmVkaWN0aW9uIE1hcmtldHMgdG8gVHJhY2sgSW5mb3JtYXRpb24gRmxvd3M6ICBFdmlkZW5jZSBmcm9tIEdvb2dsZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDExMyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnN0YXQuYmVya2VsZXkuZWR1XFwvdXNlcnNcXC9hbGRvdXNcXC8xNTdcXC9QYXBlcnNcXC9Hb29nbGVQcmVkaWN0aW9uTWFya2V0UGFwZXIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MDE1MDU1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZXJlXFx1MjAxOXMgYSBIb2xlIGluIHRoZSBCb3R0b20gb2YgdGhlIEM6IEVmZmVjdGl2ZW5lc3Mgb2YgQWxsb2NhdGlvbiBQcm90ZWN0aW9uIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTEzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3dlYi5taXQuZWR1XFwvaGEyMjI4NlxcL3d3d1xcL3BhcGVyc1xcL1NlY0RldjE4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQ0MjU3OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJOZXRTcGVjdHJlOiBSZWFkIEFyYml0cmFyeSBNZW1vcnkgT3ZlciBOZXR3b3JrIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTEyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9taXNjMDExMC5uZXRcXC93ZWJcXC9maWxlc1xcL25ldHNwZWN0cmUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NjIxODIzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBCeXphbnRpbmUgR2VuZXJhbHMgUHJvYmxlbSAoMTk4MikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMTIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2xhbXBvcnQuYXp1cmV3ZWJzaXRlcy5uZXRcXC9wdWJzXFwvYnl6LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzcwMjY0MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIHBsZWEgZm9yIGxlYW4gc29mdHdhcmUgKDE5OTUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTExLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9jci55cC50b1xcL2JpYlxcLzE5OTVcXC93aXJ0aC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc4NzI0MDBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQWJzdHJhY3Qgb2YgdGhlIE5UU0IgUmVwb3J0IG9uIEFpciBDYW5hZGEgZmxpZ2h0IDc1OSdzIHRheGl3YXkgb3ZlcmZsaWdodCBhdCBTRk8gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMTEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL250c2IuZ292XFwvbmV3c1xcL2V2ZW50c1xcL0RvY3VtZW50c1xcL0RDQTE3SUExNDgtQWJzdHJhY3QucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDcxOTY2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk1vdG9yb2xhIE02ODAwMCBGYW1pbHkgUHJvZ3JhbW1lclxcdTIwMTlzIFJlZmVyZW5jZSBNYW51YWwgKDE5OTIpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTEwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2NhY2hlLm54cC5jb21cXC9kb2NzXFwvZW5cXC9yZWZlcmVuY2UtbWFudWFsXFwvTTY4MDAwUE0ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MDc2OTYyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRpc3NlY3RpbmcgUU5YIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTEwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuYmxhY2toYXQuY29tXFwvZG9jc1xcL2FzaWEtMThcXC9hc2lhLTE4LVdldHplbHNfQWJhc3NpX2Rpc3NlY3RpbmdfcW54X19XUC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwMTMxNThcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEZvdW5kYXRpb25zIG9mIE1hdGhlbWF0aWNzICgyMDA3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lm1hdGgud2lzYy5lZHVcXC9+bWlsbGVyXFwvb2xkXFwvbTc3MS0xMFxcL2t1bmVuNzcwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjA3ODUxNFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJPYmVyb24gU3lzdGVtIEltcGxlbWVudGVkIG9uIGEgTG93LUNvc3QgRlBHQSBCb2FyZCAoMjAxNSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMDksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3BkZnMuc2VtYW50aWNzY2hvbGFyLm9yZ1xcLzJjMTFcXC83YzE0NTZlYjk2YmJlYTE5YWEzYzhiMDE4ZGU0ZmM5Mzg3YmMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3OTMzODgxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIldoeSBNaW5pbWFsIEd1aWRhbmNlIER1cmluZyBJbnN0cnVjdGlvbiBEb2VzIE5vdCBXb3JrICgyMDA2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuY29ndGVjaC51c2MuZWR1XFwvcHVibGljYXRpb25zXFwva2lyc2NobmVyX1N3ZWxsZXJfQ2xhcmsucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MjE3MjQ1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkVmZmljaWVudCBNZXRob2RzIGFuZCBIYXJkd2FyZSBmb3IgRGVlcCBMZWFybmluZyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9jczIzMW4uc3RhbmZvcmQuZWR1XFwvc2xpZGVzXFwvMjAxN1xcL2NzMjMxbl8yMDE3X2xlY3R1cmUxNS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc2MTc4NzBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiR29vZ2xlXFx1MjAxOXMgc2VjcmV0IGFuZCBMaW5lYXIgQWxnZWJyYSAoMjAwNCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMDcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvdmVyc28ubWF0LnVhbS5lc1xcL35wYWJsby5mZXJuYW5kZXpcXC9lbXM2My1wYWJsby1mZXJuYW5kZXpfZmluYWwucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4Mjk4NjA4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBBcnQgb2YgQXBwcm94aW1hdGlvbiBpbiBTY2llbmNlIGFuZCBFbmdpbmVlcmluZyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93ZWIubWl0LmVkdVxcLzYuMDU1XFwvYm9va1xcL2Jvb2stZHJhZnQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDk5NTk2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRvd2FyZHMgYW4gb3B0aWNhbCBGUEdBIFxcdTIwMTMgUHJvZ3JhbW1hYmxlIHNpbGljb24gcGhvdG9uaWMgY2lyY3VpdHMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMDYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2FyeGl2Lm9yZ1xcL2Z0cFxcL2FyeGl2XFwvcGFwZXJzXFwvMTgwN1xcLzE4MDcuMDE2NTYucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NDg4ODM4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlB5dGhyYW46IENyb3NzaW5nIHRoZSBQeXRob24gRnJvbnRpZXIgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMDUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jb21wdXRlci5vcmdcXC9jc2RsXFwvbWFnc1xcL2NzXFwvMjAxOFxcLzAyXFwvbWNzMjAxODAyMDA4My5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY5MTA0NDZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiV2hhdCdzIGhpZGRlbiBpbiB0aGUgaGlkZGVuIGxheWVycz8gKDE5ODkpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTA1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuY3MuY211LmVkdVxcL35kc3RcXC9wdWJzXFwvYnl0ZS1oaWRkZW5sYXllci0xOTg5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjA0ODcxMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgSGFza2VsbCBTY2hvb2wgb2YgTXVzaWMgXFx1MjAxMyBGcm9tIFNpZ25hbHMgdG8gU3ltcGhvbmllcyAoMjAxNCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMDUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvaGFza2VsbC5jcy55YWxlLmVkdVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAxNVxcLzAzXFwvSFNvTS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1MTcyODVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiR2lmdGVkbmVzcyBhbmQgR2VuaXVzOiBDcnVjaWFsIERpZmZlcmVuY2VzICgxOTk2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lmd3ZXJuLm5ldFxcL2RvY3NcXC9pcVxcLzE5OTYtamVuc2VuLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjM1MDI5M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTa2V0Y2hwYWQ6IEEgbWFuLW1hY2hpbmUgZ3JhcGhpY2FsIGNvbW11bmljYXRpb24gc3lzdGVtICgxOTYzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNsLmNhbS5hYy51a1xcL3RlY2hyZXBvcnRzXFwvVUNBTS1DTC1UUi01NzQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MzU0NzY0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBGdXR1cmUgb2YgQ29tcHV0aW5nOiBMb2dpYyBvciBCaW9sb2d5ICgyMDAzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvbGFtcG9ydC5henVyZXdlYnNpdGVzLm5ldFxcL3B1YnNcXC9mdXR1cmUtb2YtY29tcHV0aW5nLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzQ1NzIxM1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQcmVkaWN0aW5nIFByaWNlIENoYW5nZXMgaW4gRXRoZXJldW0gKDIwMTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTA0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2NzMjI5LnN0YW5mb3JkLmVkdVxcL3Byb2oyMDE3XFwvZmluYWwtcmVwb3J0c1xcLzUyNDQwMzkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MjcyMzI4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFuIEludHJvZHVjdGlvbiB0byBNYXRoZW1hdGljYWwgT3B0aW1hbCBDb250cm9sIFRoZW9yeSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwMyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvbWF0aC5iZXJrZWxleS5lZHVcXC9+ZXZhbnNcXC9jb250cm9sLmNvdXJzZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1ODU3NzdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTWluZHN0b3JtczogQ2hpbGRyZW4sIENvbXB1dGVycywgYW5kIFBvd2VyZnVsIElkZWFzICgxOTgwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwMyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93b3JyeWRyZWFtLmNvbVxcL3JlZnNcXC9QYXBlcnQlMjAtJTIwTWluZHN0b3JtcyUyMDFzdCUyMGVkLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODM2MTY2NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJGdW5jdGlvbmFsIEJpdHM6IExhbWJkYS1jYWxjdWx1cyBiYXNlZCBhbGdvcml0aG1pYyBpbmZvcm1hdGlvbiB0aGVvcnkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMDMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3Ryb21wLmdpdGh1Yi5pb1xcL2NsXFwvTEMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzI2NTQ1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBFZmZlY3RzIG9mIENvbXB1dGVyIFVzZSBvbiBFeWUgSGVhbHRoIGFuZCBWaXNpb24gKDE5OTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTAyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuYW9hLm9yZ1xcL0RvY3VtZW50c1xcL29wdG9tZXRyaXN0c1xcL2VmZmVjdHMtb2YtY29tcHV0ZXItdXNlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjE0NjEwNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBY3RvciBNb2RlbCBvZiBDb21wdXRhdGlvbiAoMjAxMCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMDIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2FyeGl2Lm9yZ1xcL3ZjXFwvYXJ4aXZcXC9wYXBlcnNcXC8xMDA4XFwvMTAwOC4xNDU5djgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NjY3MzIzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkV4cGxvaXRpbmcgVVJMIFBhcnNlciBpbiBQcm9ncmFtbWluZyBMYW5ndWFnZXMgKDIwMTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTAyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuYmxhY2toYXQuY29tXFwvZG9jc1xcL3VzLTE3XFwvdGh1cnNkYXlcXC91cy0xNy1Uc2FpLUEtTmV3LUVyYS1PZi1TU1JGLUV4cGxvaXRpbmctVVJMLVBhcnNlci1Jbi1UcmVuZGluZy1Qcm9ncmFtbWluZy1MYW5ndWFnZXMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3OTU1NjI2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkJvcmRlciBTZWFyY2ggb2YgRWxlY3Ryb25pYyBEZXZpY2VzIFxcdTIwMTMgQ0JQIERpcmVjdGl2ZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNicC5nb3ZcXC9zaXRlc1xcL2RlZmF1bHRcXC9maWxlc1xcL2Fzc2V0c1xcL2RvY3VtZW50c1xcLzIwMTgtSmFuXFwvY2JwLWRpcmVjdGl2ZS0zMzQwLTA0OWEtYm9yZGVyLXNlYXJjaC1lbGVjdHJvbmljLW1lZGlhLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjA4NDgyMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQaHlzaWNzIGFzIGEgV2F5IG9mIFRoaW5raW5nICgxOTM2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwva2Iub3N1LmVkdVxcL2RzcGFjZVxcL2JpdHN0cmVhbVxcL2hhbmRsZVxcLzE4MTFcXC83MjU2N1xcL09TTEpfVjJOM18wMjQxLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzM5NjIwNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJXZWIgUHJvbG9nIGFuZCB0aGUgUHJvZ3JhbW1hYmxlIFByb2xvZyBXZWIgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMDAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2dpdGh1Yi5jb21cXC9XZWItUHJvbG9nXFwvc3dpLXdlYi1wcm9sb2dcXC9ibG9iXFwvbWFzdGVyXFwvd2ViLWNsaWVudFxcL2FwcHNcXC9zd2lzaFxcL3dlYi1wcm9sb2cucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3Mjg4NDkzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZpZnR5IFllYXJzIG9mIFNoYW5ub24gVGhlb3J5ICgxOTk4KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnByaW5jZXRvbi5lZHVcXC9+dmVyZHVcXC9yZXByaW50c1xcL0lUNDQuNi4yMDU3LTIwNzgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MTMwMjk3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlVuc2tpbGxlZCBhbmQgVW5hd2FyZSBvZiBJdCAoMTk5OSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9wc3ljaC5jb2xvcmFkby5lZHVcXC9+dmFuYm92ZW5cXC90ZWFjaGluZ1xcL3A3NTM2X2hldXJiaWFzXFwvcDc1MzZfcmVhZGluZ3NcXC9rcnVnZXJfZHVubmluZy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYxMjUwNjBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTm9uLVJlY3Vyc2l2ZSBNYWtlIENvbnNpZGVyZWQgSGFybWZ1bDogQnVpbGQgU3lzdGVtcyBhdCBTY2FsZSAoMjAxNikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmRtaXRjaGVsbC5jb21cXC9kb3dubG9hZHNcXC9wYXBlci1ub25fcmVjdXJzaXZlX21ha2VfY29uc2lkZXJlZF9oYXJtZnVsLTIyX3NlcF8yMDE2LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzA4ODMyOFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEZWJ1Z2dpbmcgYWNyb3NzIHBpcGVzIGFuZCBzb2NrZXRzIHdpdGggc3RyYWNlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOTgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2dpdGh1Yi5jb21cXC9uaDJcXC9zdHJhY2UtcGlwZXMtcHJlc2VudGF0aW9uXFwvYmxvYlxcL21hc3RlclxcL3ByZXNlbnRhdGlvblxcL0RlYnVnZ2luZyUyMGFjcm9zcyUyMHBpcGVzJTIwYW5kJTIwc29ja2V0cyUyMHdpdGglMjBzdHJhY2UucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NzA4MzkyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgSGlzdG9yeSBvZiB0aGUgRXJsYW5nIFZNICgyMDExKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDk3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5lcmxhbmctZmFjdG9yeS5jb21cXC91cGxvYWRcXC9wcmVzZW50YXRpb25zXFwvMzg5XFwvRUZTRjExLUVybGFuZ1ZNLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjIxNDk5NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIb3cgdG8gZG8gd2l0aCBwcm9iYWJpbGl0aWVzIHdoYXQgcGVvcGxlIHNheSB5b3UgY2FuXFx1MjAxOXQgKDE5ODUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOTcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2Z0cC5jcy51Y2xhLmVkdVxcL3B1YlxcL3N0YXRfc2VyXFwvcjQ5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODY2MzIyM1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQb2xpY2UgVXNlIG9mIEZvcmNlOiBBbiBFeGFtaW5hdGlvbiBvZiBNb2Rlcm4gUG9saWNpbmcgUHJhY3RpY2VzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOTcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy51c2Njci5nb3ZcXC9wdWJzXFwvMjAxOFxcLzExLTE1LVBvbGljZS1Gb3JjZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg1NDYwMzhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU2luZ2xlLWRlY3J5cHRpb24gRU0tYmFzZWQgYXR0YWNrIHJldmVhbHMgcHJpdmF0ZSBrZXlzIGZyb20gQW5kcm9pZCBwaG9uZXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5NyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnVzZW5peC5vcmdcXC9zeXN0ZW1cXC9maWxlc1xcL2NvbmZlcmVuY2VcXC91c2VuaXhzZWN1cml0eTE4XFwvc2VjMTgtYWxhbS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc4MTc5NjZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRWZmaWNpZW50IEhvdC1XYXRlciBQaXBpbmcgKDIwMTMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOTUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmdhcnlrbGVpbmFzc29jaWF0ZXMuY29tXFwvUERGc1xcLzE1JTIwLSUyMEVmZmljaWVudCUyMEhvdC1XYXRlciUyMFBpcGluZy1KTEMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NTQwODAyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNjaWVudGlzdHMgd2FybiBvZiBwb3RlbnRpYWwgc2VyaW91cyBoZWFsdGggZWZmZWN0cyBvZiA1RyAoMjAxNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZWh0cnVzdC5vcmdcXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcL1NjaWVudGlzdC01Ry1hcHBlYWwtMjAxNy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc5NjczNzJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBtaWNybyBtYW51YWwgZm9yIExpc3AgXFx1MjAxMyBOb3QgdGhlIHdob2xlIHRydXRoICgxOTc4KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDk1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5lZS5yeWVyc29uLmNhXFwvfmVsZlxcL3B1YlxcL21pc2NcXC9taWNyb21hbnVhbExJU1AucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3OTU4NDEzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkV2ZXJ5dGhpbmcgWW91IFdhbnRlZCB0byBLbm93IEFib3V0IFN5bmNocm9uaXphdGlvbiAoMjAxMykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9zaWdvcHMub3JnXFwvc29zcFxcL3Nvc3AxM1xcL3BhcGVyc1xcL3AzMy1kYXZpZC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY4NTk3MTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFN0cm9uZyBGcmVlIFdpbGwgVGhlb3JlbSAoMjAwOSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5NCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuYW1zLm9yZ1xcL25vdGljZXNcXC8yMDA5MDJcXC9ydHgwOTAyMDAyMjZwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODM5MjA0MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgYXJ0IG9mIFZpcnR1YWwgQW5hbG9nIGZpbHRlciBkZXNpZ24gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lm5hdGl2ZS1pbnN0cnVtZW50cy5jb21cXC9maWxlYWRtaW5cXC9uaV9tZWRpYVxcL2Rvd25sb2Fkc1xcL3BkZlxcL1ZBRmlsdGVyRGVzaWduXzIuMS4wLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODM0NjQ2M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIdW1hbi1DZW50cmljIFRvb2xzIGZvciBOYXZpZ2F0aW5nIENvZGUgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93ZWIuZWVjcy51dGsuZWR1XFwvfmF6aFxcL3B1YnNcXC9IZW5sZXkyMDE4YkRpc3NlcnRhdGlvbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg2NDg1ODBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRXZlcnkgR29vZCBSZWd1bGF0b3Igb2YgYSBTeXN0ZW0gTXVzdCBCZSBhIE1vZGVsIG9mIFRoYXQgU3lzdGVtICgxOTcwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDkyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3Blc3BtYzEudnViLmFjLmJlXFwvYm9va3NcXC9Db25hbnRfQXNoYnkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NTQ1NTM3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNhc2UgU3R1ZGllcyBXaGVyZSBQaGFzZSAyIGFuZCBQaGFzZSAzIFRyaWFscyBoYWQgRGl2ZXJnZW50IFJlc3VsdHMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmZkYS5nb3ZcXC9kb3dubG9hZHNcXC9BYm91dEZEQVxcL1JlcG9ydHNNYW51YWxzRm9ybXNcXC9SZXBvcnRzXFwvVUNNNTM1NzgwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzU2ODcxMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCI4MDIuMTEgd2l0aCBNdWx0aXBsZSBBbnRlbm5hcyBmb3IgRHVtbWllcyAoMjAwOSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZGp3LmNzLndhc2hpbmd0b24uZWR1XFwvcGFwZXJzXFwvbWltb19mb3JfZHVtbWllcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcyOTAzMDJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU2VsZi1SZWd1bGF0ZWQgTGVhcm5pbmc6IEJlbGllZnMsIFRlY2huaXF1ZXMsIGFuZCBJbGx1c2lvbnMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuZXhjYWxpYnVydHNhLm9yZy51a1xcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAxN1xcLzExXFwvU2VsZi1yZWd1bGF0ZWQtbGVhcm5pbmctQmpvcmsucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NDYyNjMzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNjaWtpdC1sZWFybiB1c2VyIGd1aWRlICgyMDE3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDkyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3NjaWtpdC1sZWFybi5vcmdcXC9zdGFibGVcXC9fZG93bmxvYWRzXFwvc2Npa2l0LWxlYXJuLWRvY3MucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NDMwNjczXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIiR2YXU6IHRoZSB1bHRpbWF0ZSBhYnN0cmFjdGlvbiAoMjAxMCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd2ViLndwaS5lZHVcXC9QdWJzXFwvRVREXFwvQXZhaWxhYmxlXFwvZXRkLTA5MDExMC0xMjQ5MDRcXC91bnJlc3RyaWN0ZWRcXC9qc2h1dHQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDA1MDE0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRlc2lnbiBvZiBhIGxvdy1sZXZlbCBDKysgdGVtcGxhdGUgU0lNRCBsaWJyYXJ5IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOTEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy50aS51bmktYmllbGVmZWxkLmRlXFwvZG93bmxvYWRzXFwvcHVibGljYXRpb25zXFwvdGVtcGxhdGVTSU1ELnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjA1MDAyMVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIFRlbXBsYXRlIGZvciBVbmRlcnN0YW5kaW5nIEhvdyB0aGUgRWNvbm9taWMgTWFjaGluZSBXb3JrcyAoMjAxMSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvbWVkaWEuZWNvbm9taXN0LmNvbVxcL3NpdGVzXFwvZGVmYXVsdFxcL2ZpbGVzXFwvcGRmc1xcL0FfVGVtcGxhdGVfZm9yX1VuZGVyc3RhbmRpbmdfLV9SYXlfRGFsaW9fX0JyaWRnZXdhdGVyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzk2MjEzNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEbyBEZXZlbG9wZXJzIFVuZGVyc3RhbmQgSUVFRSBGbG9hdGluZyBQb2ludD8gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9wZGluZGEub3JnXFwvUGFwZXJzXFwvaXBkcHMxOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg3NjE5NDRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ29sbGVjdGl2ZSBoYWxsdWNpbmF0aW9uIGFuZCBpbmVmZmljaWVudCBtYXJrZXRzOiBUaGUgUmFpbHdheSBNYW5pYSBvZiB0aGUgMTg0MHMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuZHRjLnVtbi5lZHVcXC9+b2RseXprb1xcL2RvY1xcL2hhbGx1Y2luYXRpb25zLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjE0NTE1N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJOZXd0b25cXHUyMDE5cyBGaW5hbmNpYWwgTWlzYWR2ZW50dXJlcyBpbiB0aGUgU291dGggU2VhIEJ1YmJsZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDkxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5kdGMudW1uLmVkdVxcL35vZGx5emtvXFwvZG9jXFwvbWFuaWExMy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYyNDUyODRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTWVsdGRvd25QcmltZSwgU3BlY3RyZVByaW1lOiBFeHBsb2l0aW5nIEludmFsaWRhdGlvbi1CYXNlZCBDb2hlcmVuY2UgUHJvdG9jb2xzXCIsXG4gICAgICAgIFwic2NvcmVcIjogOTAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2FyeGl2Lm9yZ1xcL3BkZlxcLzE4MDIuMDM4MDIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NDMwMjE1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkpJVGluZyBQb3N0Z3JlU1FMIHVzaW5nIExMVk0gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9hbmFyYXplbC5kZVxcL3RhbGtzXFwvZm9zZGVtLTIwMTgtMDItMDNcXC9qaXQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2Mjk5NjMyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBFdm9sdXRpb24gb2YgQml0Y29pbiBIYXJkd2FyZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDg5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2NzZXdlYi51Y3NkLmVkdVxcL35tYnRheWxvclxcL3BhcGVyc1xcL1RheWxvcl9CaXRjb2luX0lFRUVfQ29tcHV0ZXJfMjAxNy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYyODkwNzRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRXZlcnl0aGluZyBZb3UgQWx3YXlzIFdhbnRlZCB0byBLbm93IEFib3V0IE9wdGljYWwgTmV0d29ya2luZyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDg5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cubmFub2cub3JnXFwvc2l0ZXNcXC9kZWZhdWx0XFwvZmlsZXNcXC9TdGVlbmJlcmdlbi5FdmVyeXRoaW5nX1lvdV9OZWVkLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODA5OTMwNFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDcm9zcy1QbGF0Zm9ybSBMYW5ndWFnZSBEZXNpZ24gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9sYW1wd3d3LmVwZmwuY2hcXC9+ZG9lcmFlbmVcXC90aGVzaXNcXC9kb2VyYWVuZS10aGVzaXMtMjAxOC1jcm9zcy1wbGF0Zm9ybS1sYW5ndWFnZS1kZXNpZ24ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NjQwNTE1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBFdm9sdXRpb24gb2YgT3BlcmF0aW5nIFN5c3RlbXMgKDIwMDApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogODgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmJyaW5jaC1oYW5zZW4ubmV0XFwvcGFwZXJzXFwvMjAwMWIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTgxNTMwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBaIEdhcmJhZ2UgQ29sbGVjdG9yOiBBbiBJbnRyb2R1Y3Rpb24gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4OCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZm9zZGVtLm9yZ1xcLzIwMThcXC9zY2hlZHVsZVxcL2V2ZW50XFwvemdjXFwvYXR0YWNobWVudHNcXC9zbGlkZXNcXC8yMjExXFwvZXhwb3J0XFwvZXZlbnRzXFwvYXR0YWNobWVudHNcXC96Z2NcXC9zbGlkZXNcXC8yMjExXFwvWkdDX0ZPU0RFTV8yMDE4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjQwNTg1MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJOYWdpbmk6IEEgU3RhdGljIFZlcmlmaWVyIGZvciBQeXRob24gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4NyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9wbS5pbmYuZXRoei5jaFxcL3B1YmxpY2F0aW9uc1xcL2dldHBkZi5waHA/YmlibmFtZT1Pd24maWQ9RWlsZXJzTXVlbGxlcjE4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzUzNTc1MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJNaW5pbmV0IG9uIE9wZW5CU0Q6IEludGVyYWN0aXZlIFNETiBUZXN0aW5nIGFuZCBEZXZlbG9wbWVudCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDg2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cub3BlbmJzZC5vcmdcXC9wYXBlcnNcXC9ic2RjYW4yMDE4LW1pbmluZXQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MzAxODM1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRlc2lnbiBhbmQgSW1wbGVtZW50YXRpb24gb2YgYSAyNTYtQ29yZSBCcmFpbkZ1Y2sgQ29tcHV0ZXIgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4NixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9zaWd0YmQuY3NhaWwubWl0LmVkdVxcL3B1YnNcXC92ZXJ5Y29uZmVyZW5jZS1wYXBlcjIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2ODY2NDM1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkxvZ2ljIGlzIE1ldGFwaHlzaWNzICgyMDExKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDg1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9waGlscGFwZXJzLm9yZ1xcL2FyY2hpdmVcXC9BTFZMSU0tMy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcyNDY5NDRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiT24gdGhlIHJoZW9sb2d5IG9mIGNhdHMgKDIwMTQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogODUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5kcmdvdWx1LmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAxN1xcLzA5XFwvUmhlb2xvZ3ktb2YtY2F0cy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg1NDA1NTBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiV2hhdCB5b3UgZ2V0IGlzIHdoYXQgeW91IEM6IENvbnRyb2xsaW5nIHNpZGUgZWZmZWN0cyBpbiBtYWluc3RyZWFtIEMgY29tcGlsZXJzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogODUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmNsLmNhbS5hYy51a1xcL35yamExNFxcL1BhcGVyc1xcL3doYXR5b3VjLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjkxMTE4NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUZW5zb3JGbG93OiBNYWNoaW5lIExlYXJuaW5nIG9uIEhldGVyb2dlbmVvdXMgRGlzdHJpYnV0ZWQgU3lzdGVtcyAoMjAxNSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvc3RhdGljLmdvb2dsZXVzZXJjb250ZW50LmNvbVxcL21lZGlhXFwvcmVzZWFyY2guZ29vZ2xlLmNvbVxcL2VuXFwvXFwvcHVic1xcL2FyY2hpdmVcXC80NTE2Ni5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcwMjg2MzFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTGVnb09TOiBEaXNzZW1pbmF0ZWQsIERpc3RyaWJ1dGVkIE9TIGZvciBIYXJkd2FyZSBSZXNvdXJjZSBEaXNhZ2dyZWdhdGlvbiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDg1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cudXNlbml4Lm9yZ1xcL3N5c3RlbVxcL2ZpbGVzXFwvb3NkaTE4LXNoYW4ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDg4MjkyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSB1c2VmdWxuZXNzIG9mIHVzZWxlc3Mga25vd2xlZGdlICgxOTM5KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDg0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9saWJyYXJ5Lmlhcy5lZHVcXC9maWxlc1xcL1VzZWZ1bG5lc3NIYXJwZXJzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODY4MzI5OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBbiBGUEdBLWJhc2VkIEluLWxpbmUgQWNjZWxlcmF0b3IgZm9yIE1lbWNhY2hlZCAoMjAxMykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4NCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmhvdGNoaXBzLm9yZ1xcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvaGNfYXJjaGl2ZXNcXC9oYzI1XFwvSEMyNS41MC1GUEdBLWVwdWJcXC9IQzI1LjI3LjUzMC1NZW1jYWNoZWQtTGF2YXNhbmktVVRleGFzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzE3NTEzNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJVUyBTdXJnZW9uIEdlbmVyYWwgRGVjbGFyZXMgRS1jaWdhcmV0dGUgRXBpZGVtaWMgQW1vbmcgWW91dGggW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4NCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZS1jaWdhcmV0dGVzLnN1cmdlb25nZW5lcmFsLmdvdlxcL2RvY3VtZW50c1xcL3N1cmdlb24tZ2VuZXJhbHMtYWR2aXNvcnktb24tZS1jaWdhcmV0dGUtdXNlLWFtb25nLXlvdXRoLTIwMTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NzE2MDE2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlByYWN0aWNhbCBFeGFtcGxlcyBpbiBEYXRhIE9yaWVudGVkIERlc2lnbiAoMjAxMykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9nYW1lZGV2cy5vcmdcXC91cGxvYWRzXFwvcHJhY3RpY2FsLWV4YW1wbGVzLWluLWRhdGEtb3JpZW50ZWQtZGVzaWduLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjA0NzM4MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBbiBJbnRyb2R1Y3Rpb24gdG8gUXVhbnR1bSBDb21wdXRhdGlvbiBhbmQgUXVhbnR1bSBDb21tdW5pY2F0aW9uICgyMDAwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDgzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2hlcnBvbGhvZGUuY29tXFwvcm9iXFwvcWNpbnRyby5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0MjI0MTVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRmx1cmVlREIsIGEgUHJhY3RpY2FsIERlY2VudHJhbGl6ZWQgRGF0YWJhc2UgKDIwMTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogODIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2ZsdXIuZWVcXC9hc3NldHNcXC9wZGZcXC9mbHVyZWVkYl93aGl0ZXBhcGVyX3YxLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzA1NjMxNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDb21tdW5pY2F0aW5nIFNlcXVlbnRpYWwgUHJvY2Vzc2VzICgxOTc4KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDgyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuY3MuY211LmVkdVxcL35jcmFyeVxcLzgxOS1mMDlcXC9Ib2FyZTc4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODYwNzAzMVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQYWxsZW5lOiBBIHN0YXRpY2FsbHkgdHlwZWQgY29tcGFuaW9uIGxhbmd1YWdlIGZvciBMdWEgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuaW5mLnB1Yy1yaW8uYnJcXC9+cm9iZXJ0b1xcL2RvY3NcXC9wYWxsZW5lLXNibHAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDM4NjE5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlBvQ3x8R1RGTy0xOCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDgxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuYWxjaGVtaXN0b3dsLm9yZ1xcL3BvY29yZ3Rmb1xcL3BvY29yZ3RmbzE4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzQxMzYxMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJMb3NzIG9mIExvY2F0aW9uYWwgUHJpdmFjeSBXaGlsZSBUcmF2ZWxpbmcgaW4gWW91ciBBdXRvbW9iaWxlICgyMDEzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDgxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuZGVmY29uLm9yZ1xcL2ltYWdlc1xcL2RlZmNvbi0yMVxcL2RjLTIxLXByZXNlbnRhdGlvbnNcXC9QdWtpbmdtb25rZXlcXC9ERUZDT04tMjEtUHVraW5nbW9ua2V5LVRoZS1Sb2FkLUxlc3MtU3VycmVwdGl0aW91c2x5LVRyYXZlbGVkLVVwZGF0ZWQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MjUxMzk2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgRm9ybWFsIFNlY3VyaXR5IEFuYWx5c2lzIG9mIHRoZSBTaWduYWwgTWVzc2FnaW5nIFByb3RvY29sICgyMDE3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDgxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9lcHJpbnQuaWFjci5vcmdcXC8yMDE2XFwvMTAxMy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcxMDcxNDlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRXhwbG9yaW5nIEMgU2VtYW50aWNzIGFuZCBQb2ludGVyIFByb3ZlbmFuY2UgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNsLmNhbS5hYy51a1xcL35wZXMyMFxcL2NlcmJlcnVzXFwvdG9wLUNlcmJlcnVzLWRyYWZ0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODMyODMyOFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgQmF0dGxlIG9mIHRoZSBTY2hlZHVsZXJzOiBGcmVlQlNEIFVMRSB2cy4gTGludXggQ0ZTIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogODEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy51c2VuaXgub3JnXFwvc3lzdGVtXFwvZmlsZXNcXC9jb25mZXJlbmNlXFwvYXRjMThcXC9hdGMxOC1ib3Vyb24ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTA4NDAzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk9wdGltYWwgVGltZS1JbmNvbnNpc3RlbnQgQmVsaWVmczogTWlzcGxhbm5pbmcsIFByb2NyYXN0aW5hdGlvbiwgYW5kIENvbW1pdG1lbnQgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvc2Nob2xhci5wcmluY2V0b24uZWR1XFwvc2l0ZXNcXC9kZWZhdWx0XFwvZmlsZXNcXC9UaW1lSW5jb25zaXN0ZW50QmVsaWVmc18wLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODI5NDE1OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJMaW5lYXIgdHlwZXMgY2FuIGNoYW5nZSB0aGUgd29ybGQgKDE5OTApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogODAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmNzLmlvYy5lZVxcL2V3c2NzXFwvMjAxMFxcL215Y3JvZnRcXC9saW5lYXItMnVwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjEwMDg0MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEZXNpZ25pbmcgYW5kIGJ1aWxkaW5nIGEgZGlzdHJpYnV0ZWQgZGF0YSBzdG9yZSBpbiBHbyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDgwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9mb3NkZW0ub3JnXFwvMjAxOFxcL3NjaGVkdWxlXFwvZXZlbnRcXC9kYXRhc3RvcmVcXC9hdHRhY2htZW50c1xcL3NsaWRlc1xcLzI2MThcXC9leHBvcnRcXC9ldmVudHNcXC9hdHRhY2htZW50c1xcL2RhdGFzdG9yZVxcL3NsaWRlc1xcLzI2MThcXC9kZXNpZ25pbmdfZGlzdHJpYnV0ZWRfZGF0YXN0b3JlX2luX2dvX3RpbWJhbGEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTI0ODc5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhvdyBkb2VzIGEgR1BVIHNoYWRlciBjb3JlIHdvcms/IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvYXJhcy1wLmluZm9cXC90ZXh0c1xcL2ZpbGVzXFwvMjAxOEFjYWRlbXklMjAtJTIwR1BVLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODUwNDQ3MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJPdXRsaWVyIERldGVjdGlvbiBUZWNobmlxdWVzICgyMDEwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDc5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9hcmNoaXZlLnNpYW0ub3JnXFwvbWVldGluZ3NcXC9zZG0xMFxcL3R1dG9yaWFsMy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0MTA2NDdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVW5pY29kZU1hdGggXFx1MjAxMyBBIE5lYXJseSBQbGFpbi1UZXh0IEVuY29kaW5nIG9mIE1hdGhlbWF0aWNzICgyMDE2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDc5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cudW5pY29kZS5vcmdcXC9ub3Rlc1xcL3RuMjhcXC9VVE4yOC1QbGFpblRleHRNYXRoLXYzLjEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NTEzODk3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk9wdGlvbiBQcmljaW5nIHdpdGggRm91cmllciBUcmFuc2Zvcm0gYW5kIEV4cG9uZW50aWFsIExcXHUwMGU5dnkgTW9kZWxzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvbWF4bWF0c3VkYS5jb21cXC9QYXBlcnNcXC8yMDA0XFwvTWF0c3VkYSUyMEludHJvJTIwRlQlMjBQcmljaW5nLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODI5ODc3NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgUXVhbnR1bSBUaGVvcnkgYW5kIFJlYWxpdHkgKDE5NzkpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5zY2llbnRpZmljYW1lcmljYW4uY29tXFwvbWVkaWFcXC9wZGZcXC8xOTc5MTFfMDE1OC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYyNTQyOTdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiWmVybyBvdmVyaGVhZCBkZXRlcm1pbmlzdGljIGZhaWx1cmU6IEEgdW5pZmllZCBtZWNoYW5pc20gZm9yIEMgYW5kIEMrKyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDc5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5vcGVuLXN0ZC5vcmdcXC9qdGMxXFwvc2MyMlxcL3dnMTRcXC93d3dcXC9kb2NzXFwvbjIyODkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3OTIyNzE1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk1vZGVsLUZyZWUsIE1vZGVsLUJhc2VkLCBhbmQgR2VuZXJhbCBJbnRlbGxpZ2VuY2UgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3OCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmlqY2FpLm9yZ1xcL3Byb2NlZWRpbmdzXFwvMjAxOFxcLzAwMDIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTkxMzYxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBBbGdvcml0aG1pYyBGb3VuZGF0aW9ucyBvZiBEaWZmZXJlbnRpYWwgUHJpdmFjeSAoMjAxNCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3OCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNpcy51cGVubi5lZHVcXC9+YWFyb3RoXFwvUGFwZXJzXFwvcHJpdmFjeWJvb2sucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NjcxOTU1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhpc3Rvcnkgb2YgTGlzcCAoMTk3OSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3NyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9qbWMuc3RhbmZvcmQuZWR1XFwvYXJ0aWNsZXNcXC9saXNwXFwvbGlzcC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc4NDY1MjJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhyZWFkcyBDYW5ub3QgQmUgSW1wbGVtZW50ZWQgYXMgYSBMaWJyYXJ5ICgyMDA1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDc3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9jcy5ueXUuZWR1XFwvfm13YWxmaXNoXFwvY2xhc3Nlc1xcLzE0ZmFcXC9yZWZcXC9ib2VobTA1dGhyZWFkcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0ODM3MTdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSG93IERldmVsb3BlcnMgVXNlIER5bmFtaWMgRmVhdHVyZXMgb2YgUHJvZ3JhbW1pbmcgTGFuZ3VhZ2VzOiBTbWFsbHRhbGsgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3NyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvdXNlcnMuZGNjLnVjaGlsZS5jbFxcL35ycm9iYmVzXFwvcFxcL0VNU0UtZmVhdHVyZXMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MTE0NDA2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIldoeSBTeXN0b2xpYyBBcmNoaXRlY3R1cmVzPyAoMTk4MikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3NyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuZWVjcy5oYXJ2YXJkLmVkdVxcL35odGtcXC9wdWJsaWNhdGlvblxcLzE5ODIta3VuZy13aHktc3lzdG9saWMtYXJjaGl0ZWN0dXJlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODYyMDg0MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgTmV4dCA3MDAgUHJvZ3JhbW1pbmcgTGFuZ3VhZ2VzICgxOTY1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDc3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2hvbWVwYWdlcy5pbmYuZWQuYWMudWtcXC93YWRsZXJcXC9wYXBlcnNcXC9wYXBlcnMtd2UtbG92ZVxcL2xhbmRpbi1uZXh0LTcwMC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYwOTA3NjFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiT3BlbmluZyB0aGUgSG9vZCBvZiBhIFdvcmQgUHJvY2Vzc29yICgxOTg0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDc3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3dvcnJ5ZHJlYW0uY29tXFwvcmVmc1xcL0theSUyMC0lMjBPcGVuaW5nJTIwdGhlJTIwSG9vZCUyMG9mJTIwYSUyMFdvcmQlMjBQcm9jZXNzb3IucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MzUyMDIwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBSZWQgV2VkZGluZyBQcm9ibGVtOiBXcml0ZSBTcGlrZXMgYXQgdGhlIEVkZ2UgYW5kIGEgTWl0aWdhdGlvbiBTdHJhdGVneSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDc2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2NocmlzdG9waGVybWVpa2xlam9obi5jb21cXC9wdWJsaWNhdGlvbnNcXC9ob3RlZGdlLTIwMTgtcHJlcHJpbnQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NjQzOTU5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNhbm9weTogQW4gRW5kLXRvLUVuZCBQZXJmb3JtYW5jZSBUcmFjaW5nIEFuZCBBbmFseXNpcyBTeXN0ZW0gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3NixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvY3MuYnJvd24uZWR1XFwvfmpjbWFjZVxcL3BhcGVyc1xcL2thbGRvcjIwMTdjYW5vcHkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NTkyMzAzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkJ1aWxkaW5nIFJvYnVzdCBTeXN0ZW1zICgyMDA4KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDc2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9ncm91cHMuY3NhaWwubWl0LmVkdVxcL21hY1xcL3VzZXJzXFwvZ2pzXFwvNi45NDVcXC9yZWFkaW5nc1xcL3JvYnVzdC1zeXN0ZW1zLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjg5MDQ5OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTb2Z0d2FyZSBVcGRhdGVzIGZvciBJb1QgRGV2aWNlcyBhbmQgdGhlIEhpZGRlbiBDb3N0cyBvZiBIb21lZ3Jvd24gVXBkYXRlcnMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvbWVuZGVyLmlvXFwvcmVzb3VyY2VzXFwvZ3VpZGVzLWFuZC13aGl0ZXBhcGVyc1xcL19yZXNvdXJjZXNcXC9NZW5kZXIlMjUyMFdoaXRlJTI1MjBQYXBlciUyNTIwXyUyNTIwSGlkZGVuJTI1MjBDb3N0cyUyNTIwb2YlMjUyMEhvbWVncm93bi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYxODEwNTFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRmFudGFzdGljIFRpbWVyczogSGlnaC1SZXNvbHV0aW9uIE1pY3JvYXJjaGl0ZWN0dXJhbCBBdHRhY2tzIGluIEpTICgyMDE3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDc1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9ncnVzcy5jY1xcL2ZpbGVzXFwvZmFudGFzdGljdGltZXJzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjA4MDIzNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDb21wcmVoZW5zaXZlIGFuZCBiaWFzZWQgY29tcGFyaXNvbiBvZiBPcGVuQlNEIGFuZCBGcmVlQlNEICgyMDE3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDc1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuYnNkZnJvZy5vcmdcXC9wdWJcXC9ldmVudHNcXC9teV9ic2Rfc3Vja3NfbGVzc190aGFuX3lvdXJzLUFzaWFCU0RDb24yMDE3LXBhcGVyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODY2NzE3OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEZXNpZ24gYW5kIEV2YWx1YXRpb24gb2YgRlBHQS1CYXNlZCBHaWdhYml0IEV0aGVybmV0IE5ldHdvcmsgQ2FyZCAoMjAwNCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcGRmcy5zZW1hbnRpY3NjaG9sYXIub3JnXFwvOGJmZVxcLzg5ODhjMTQ3MDMzMDJlYmQyZDU2NzkyNGIyN2E1Y2IxMGM1Ny5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcwMjk0NTRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQW4gRW1waXJpY2FsIFN0dWR5IG9mIFByb2dyYW1tZXJzXFx1MjAxOSBBY3F1aXNpdGlvbiBvZiBOZXcgUHJvZ3JhbW1pbmcgTGFuZ3VhZ2VzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvY3MyNDIuc3RhbmZvcmQuZWR1XFwvYXNzZXRzXFwvcHJvamVjdHNcXC8yMDE3XFwvcGFyYXN0b28tZ2RpZXR6NDQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3OTUwNTg4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkdob3N0YnVzdGVyOiBEZXRlY3RpbmcgdGhlIFByZXNlbmNlIG9mIEhpZGRlbiBFYXZlc2Ryb3BwZXJzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNzMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3N5bnJnLmNzbC5pbGxpbm9pcy5lZHVcXC9wYXBlcnNcXC9naG9zdGJ1c3Rlci1tb2JpY29tMTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDgyMzg0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkxvdy1MZXZlbCBUaGlua2luZyBpbiBIaWdoLUxldmVsIFNoYWRpbmcgTGFuZ3VhZ2VzICgyMDEzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDczLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5odW11cy5uYW1lXFwvQXJ0aWNsZXNcXC9QZXJzc29uX0xvd0xldmVsVGhpbmtpbmcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MjIzNjUxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIldpbGxpYW0gU3RlaW4gb24gdGhlIHN0cnVnZ2xlIGZvciBvcGVuIHNvdXJjZSBmdW5kaW5nIGluIHB1cmUgbWF0aGVtYXRpY3MgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuYW1zLm9yZ1xcL2pvdXJuYWxzXFwvbm90aWNlc1xcLzIwMTgwNVxcL3Jub3RpLXA1NDAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2OTQwNzI2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkxvZ2ljIFByb2dyYW1taW5nIGFuZCBDb21waWxlciBXcml0aW5nICgxOTgwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDcyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3NvdmlldG92LmNvbVxcL3RtcFxcL3dhcnJlbjE5ODAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3Njc0ODU5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgc3VydmV5IG9mIGF0dGFja3MgYWdhaW5zdCBJbnRlbCB4ODYgb3ZlciBsYXN0IDEwIHllYXJzICgyMDE1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDcyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9ibG9nLmludmlzaWJsZXRoaW5ncy5vcmdcXC9wYXBlcnNcXC8yMDE1XFwveDg2X2hhcm1mdWwucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTg4ODIyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlR5cGVkIENsb2p1cmUgaW4gVGhlb3J5IGFuZCBQcmFjdGljZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDcyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2FtYnJvc2Vicy5jb21cXC90YWxrc1xcL3Byb3Bvc2FsLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzc3MjkyMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIb3cgdG8gU3VidmVydCBCYWNrZG9vcmVkIEVuY3J5cHRpb24gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZXByaW50LmlhY3Iub3JnXFwvMjAxOFxcLzIxMi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY3NjMzNjVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiV2hvIEFyZSBUaGVzZSBFY29ub21pc3RzLCBBbnl3YXk/ICgyMDA5KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDcxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5sZXZ5aW5zdGl0dXRlLm9yZ1xcL3B1YnNcXC9UaG91Z2h0X0FjdGlvbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcwMDgyOTFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ29tcHV0aW5nIEhpZ2hlciBPcmRlciBEZXJpdmF0aXZlcyBvZiBNYXRyaXggYW5kIFRlbnNvciBFeHByZXNzaW9ucyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDcxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5tYXRyaXhjYWxjdWx1cy5vcmdcXC9tYXRyaXhjYWxjdWx1cy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0NjQwMDNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBQZWRhZ29naWNhbCBBbmFseXNpcyBvZiBPbmxpbmUgQ29kaW5nIFR1dG9yaWFscyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDcxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9mYWN1bHR5Lndhc2hpbmd0b24uZWR1XFwvYWprb1xcL3BhcGVyc1xcL0tpbTIwMTdDb2RpbmdUdXRvcmlhbEV2YWx1YXRpb24ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2OTYxNzE2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlVuaXg6IEJ1aWxkaW5nIGEgRGV2ZWxvcG1lbnQgRW52aXJvbm1lbnQgZnJvbSBTY3JhdGNoICgyMDE2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDcxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL21pbm5pZS50dWhzLm9yZ1xcL1k1XFwvd2t0X2hhcG9wX3BhcGVyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjQwMjE2NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBbGNoZW15OiBBIExhbmd1YWdlIGFuZCBDb21waWxlciBmb3IgSG9tb21vcnBoaWMgRW5jcnlwdGlvbiBNYWRlIEVhc3kgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93ZWIuZWVjcy51bWljaC5lZHVcXC9+Y3BlaWtlcnRcXC9wdWJzXFwvYWxjaGVteS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgyNjU5NDhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTmFrZWQgbW9sZS1yYXQgbW9ydGFsaXR5IHJhdGVzIGRlZnkgR29tcGVydHppYW4gbGF3cyBieSBub3QgaW5jcmVhc2luZyB3aXRoIGFnZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDcwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cubmNiaS5ubG0ubmloLmdvdlxcL3BtY1xcL2FydGljbGVzXFwvUE1DNTc4MzYxMFxcL3BkZlxcL2VsaWZlLTMxMTU3LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODEwOTUzM1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIEZpcnN0IENvdXJzZSBpbiBEZXNpZ24gYW5kIEFuYWx5c2lzIG9mIEV4cGVyaW1lbnRzICgyMDEwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDcwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3VzZXJzLnN0YXQudW1uLmVkdVxcL35nYXJ5XFwvYm9va1xcL2ZjZGFlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODA5NjY4NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJHYWxvaXMgRmllbGQgaW4gQ3J5cHRvZ3JhcGh5ICgyMDEyKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDY5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9zaXRlcy5tYXRoLndhc2hpbmd0b24uZWR1XFwvfm1vcnJvd1xcLzMzNl8xMlxcL3BhcGVyc1xcL2p1YW4ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MzUxMDY4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlVTRFogRmlsZSBGb3JtYXQgU3BlY2lmaWNhdGlvbiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDY5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9ncmFwaGljcy5waXhhci5jb21cXC91c2RcXC9maWxlc1xcL1VTRFpGaWxlRm9ybWF0U3BlY2lmaWNhdGlvbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcyMjk5NzFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQXVzdGVyaXR5IGFuZCB0aGUgcmlzZSBvZiB0aGUgTmF6aSBwYXJ0eSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDY5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuYW5kZXJzb24udWNsYS5lZHVcXC9Eb2N1bWVudHNcXC9hcmVhc1xcL2ZhY1xcL2dlbVxcL25hemlfYXVzdGVyaXR5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjU1ODgzMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTaW5raW5nIG9mIHRoZSBVUyBDYXJnbyBWZXNzZWwgRWwgRmFybzogSWxsdXN0cmF0ZWQgZGlnZXN0IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5udHNiLmdvdlxcL2ludmVzdGlnYXRpb25zXFwvQWNjaWRlbnRSZXBvcnRzXFwvUmVwb3J0c1xcL1NQQzE4MDEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MTYwMzk2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoaXMgYXJjaGl0ZWN0dXJlIHRhc3RlcyBsaWtlIG1pY3JvYXJjaGl0ZWN0dXJlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3Azd29ya3Nob3Aud2Vic2l0ZVxcL3BkZnNcXC9XUDNfZHVuaGFtLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjU2MDA2NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQYXJzaW5nIHdpdGggRGVyaXZhdGl2ZXM6IEEgRnVuY3Rpb25hbCBQZWFybCAoMjAxMSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2OCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9tYXR0Lm1pZ2h0Lm5ldFxcL3BhcGVyc1xcL21pZ2h0MjAxMWRlcml2YXRpdmVzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzM5MTA3MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgQ29uc2lzdGVuY3kgb2YgQXJpdGhtZXRpYyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDY4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3RpbW90aHljaG93Lm5ldFxcL2NvbnNpc3RlbnQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDQwMTE1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBQb3RlbnRpb21ldGVyIEhhbmRib29rICgxOTc1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDY4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuYm91cm5zLmNvbVxcL2RvY3NcXC90ZWNobmljYWwtZG9jdW1lbnRzXFwvdGVjaG5pY2FsLWxpYnJhcnlcXC9jb3Jwb3JhdGVcXC9PbmxpbmVQb3RlbnRpb21ldGVySGFuZGJvb2sucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MzkxMDc2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgdmlzdWFsIGhpc3Rvcnkgb2YgdGhlIGZ1dHVyZSAoMjAxNCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2OCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvYXNzZXRzLnB1Ymxpc2hpbmcuc2VydmljZS5nb3YudWtcXC9nb3Zlcm5tZW50XFwvdXBsb2Fkc1xcL3N5c3RlbVxcL3VwbG9hZHNcXC9hdHRhY2htZW50X2RhdGFcXC9maWxlXFwvMzYwODE0XFwvMTQtODE0LWZ1dHVyZS1jaXRpZXMtdmlzdWFsLWhpc3RvcnkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzQyNzI2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBDb21wdXRlciBmb3IgdGhlIDIxc3QgQ2VudXJ5ICgxOTkxKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDY3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cubHJpLmZyXFwvfm1ibFxcL1N0YW5mb3JkXFwvQ1M0NzdcXC9wYXBlcnNcXC9XZWlzZXItU2NpQW0ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MDI5MTc5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhpZ2ggUGVyZm9ybWFuY2UgQ29tcHV0aW5nOiBBcmUgV2UgSnVzdCBHZXR0aW5nIFdyb25nIEFuc3dlcnMgRmFzdGVyPyAoMTk5OCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2NyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3My5uZC5lZHVcXC9+bWFya3N0XFwvY2FzdC1hd2FyZC1zcGVlY2gucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDQ5NTA5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk5vdGVzIG9uIExhbmRhdWVyJ3MgcHJpbmNpcGxlLCByZXZlcnNpYmxlIGNvbXB1dGF0aW9uLCBNYXh3ZWxsJ3MgRGVtb24gKDIwMDMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jcy5wcmluY2V0b24uZWR1XFwvY291cnNlc1xcL2FyY2hpdmVcXC9mYWxsMDZcXC9jb3M1NzZcXC9wYXBlcnNcXC9iZW5uZXR0MDMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MjY3MDAwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkxlaXN1cmUgTHV4dXJpZXMgYW5kIHRoZSBMYWJvciBTdXBwbHkgb2YgWW91bmcgTWVuIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3NjaG9sYXIucHJpbmNldG9uLmVkdVxcL3NpdGVzXFwvZGVmYXVsdFxcL2ZpbGVzXFwvbWFndWlhclxcL2ZpbGVzXFwvbGVpc3VyZS1sdXh1cmllcy1sYWJvci1qdW5lLTIwMTcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MzkzOTAzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhvdyBkaWQgc29mdHdhcmUgZ2V0IHNvIHJlbGlhYmxlIHdpdGhvdXQgcHJvb2Y/ICgxOTk2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDY1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5nd2Vybi5uZXRcXC9kb2NzXFwvbWF0aFxcLzE5OTYtaG9hcmUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDUwNzA2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlVuZGVyc3RhbmRpbmcgU2ltcHNvblxcdTIwMTlzIFBhcmFkb3ggKDIwMTMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2Z0cC5jcy51Y2xhLmVkdVxcL3B1YlxcL3N0YXRfc2VyXFwvcjQxNC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3Mjg5NTRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRjEgUXVlcnk6IERlY2xhcmF0aXZlIFF1ZXJ5aW5nIGF0IEdvb2dsZSBTY2FsZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDY1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy52bGRiLm9yZ1xcL3B2bGRiXFwvdm9sMTFcXC9wMTgzNS1zYW13ZWwucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzE5OTE2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhvdyB0byBQcmludCBGbG9hdGluZy1Qb2ludCBOdW1iZXJzIEFjY3VyYXRlbHkgKDE5OTApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2xpc3RzLm5vbmdudS5vcmdcXC9hcmNoaXZlXFwvaHRtbFxcL2djbC1kZXZlbFxcLzIwMTItMTBcXC9wZGZraWVUbGtsUnpOLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzI3NzU2MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEZWZlYXRpbmcgTW9kZXJuIFNlY3VyZSBCb290IFVzaW5nIFNlY29uZC1PcmRlciBQdWxzZWQgRU0gRmF1bHQgSW5qZWN0aW9uIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy51c2VuaXgub3JnXFwvc3lzdGVtXFwvZmlsZXNcXC9jb25mZXJlbmNlXFwvd29vdDE3XFwvd29vdDE3LXBhcGVyLWN1aS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc4OTU3ODFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRm91bmRhdGlvbnMgZm9yIEVmZmljaWVudCBhbmQgRXhwcmVzc2l2ZSBEaWZmZXJlbnRpYWJsZSBQcm9ncmFtbWluZyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDY0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3BhcGVycy5uaXBzLmNjXFwvcGFwZXJcXC84MjIxLWJhY2twcm9wYWdhdGlvbi13aXRoLWNhbGxiYWNrcy1mb3VuZGF0aW9ucy1mb3ItZWZmaWNpZW50LWFuZC1leHByZXNzaXZlLWRpZmZlcmVudGlhYmxlLXByb2dyYW1taW5nLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODc0Nzc2N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBUExcXFxcMzAwMCBcXHUyMDEzIEhQIEpvdXJuYWwgXFx1MjAxMyBKdWx5IDE5NzcgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2NCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuaHBsLmhwLmNvbVxcL2hwam91cm5hbFxcL3BkZnNcXC9Jc3N1ZVBERnNcXC8xOTc3LTA3LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzUwNjc4OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJPbiBJbnRlbGxpZ2VuY2UgaW4gQ2VsbHM6IFRoZSBDYXNlIGZvciBXaG9sZSBDZWxsIEJpb2xvZ3kgKDIwMDkpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmJyaWFuamZvcmQuY29tXFwvYS1JU1JfRm9yZC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTczMTczMjNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiR3JhYWxTcXVlYWs6IEEgRmFzdCBTbWFsbHRhbGsgQnl0ZWNvZGUgSW50ZXJwcmV0ZXIgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2NCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZm5pZXBoYXVzLmNvbVxcLzIwMThcXC9pY29vb2xwczE4LWdyYWFsc3F1ZWFrLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzQ3MDc2N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUb3dhcmRzIFN0ZWFsdGh5IE1hbmlwdWxhdGlvbiBvZiBSb2FkIE5hdmlnYXRpb24gU3lzdGVtcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDY0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9wZW9wbGUuY3MudnQuZWR1XFwvZ2FuZ3dhbmdcXC9zZWMxOC1ncHMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTgxNzU1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk1vbm9pZCBtYWNoaW5lczogYSBPKGxvZyBuKSBwYXJzZXIgZm9yIHJlZ3VsYXIgbGFuZ3VhZ2VzICgyMDA2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDY0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5kY2MuZmMudXAucHRcXC9+YWNtXFwvc2VtaWdyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzUxMjU3NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIFJlbGF0aW9uYWwgTW9kZWwgb2YgRGF0YSBmb3IgTGFyZ2UgU2hhcmVkIERhdGEgQmFua3MgKDE5NzApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2NzLnV3YXRlcmxvby5jYVxcL35kYXZpZFxcL2NzODQ4czE0XFwvY29kZC1yZWxhdGlvbmFsLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODA4ODk1MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJCbGVlZGluZ0JpdDogVGhlIGhpZGRlbiBhdHRhY2sgc3VyZmFjZSB3aXRoaW4gQkxFIGNoaXBzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2dvLmFybWlzLmNvbVxcL2h1YmZzXFwvQkxFRURJTkdCSVQlMjAtJTIwVGVjaG5pY2FsJTIwV2hpdGUlMjBQYXBlci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg2MjEwNzBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiMjAxOCBEZWxvaXR0ZSBNaWxsZW5uaWFsIFN1cnZleSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cyLmRlbG9pdHRlLmNvbVxcL2NvbnRlbnRcXC9kYW1cXC9EZWxvaXR0ZVxcL2dsb2JhbFxcL0RvY3VtZW50c1xcL0Fib3V0LURlbG9pdHRlXFwvZ3gtMjAxOC1taWxsZW5uaWFsLXN1cnZleS1yZXBvcnQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NjMxNjcwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFkb3B0aW5nIExlc3NvbnMgZnJvbSBPZmZsaW5lIFJheS1UcmFjaW5nIHRvIFJlYWwtVGltZSBSYXktVHJhY2luZyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2FkdmFuY2VzLnJlYWx0aW1lcmVuZGVyaW5nLmNvbVxcL3MyMDE4XFwvUGhhcnIlMjAtJTIwQWR2YW5jZXMlMjBpbiUyMFJUUiUyMC0lMjBSZWFsLXRpbWUlMjBSYXklMjBUcmFjaW5nLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODM2NDgyNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIdXlnZW5zOiBTY2FsYWJsZSwgRmluZS1ncmFpbmVkIENsb2NrIFN5bmNocm9uaXphdGlvbiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cudXNlbml4Lm9yZ1xcL3N5c3RlbVxcL2ZpbGVzXFwvY29uZmVyZW5jZVxcL25zZGkxOFxcL25zZGkxOC1nZW5nLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzQyODY1NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgQ2FzZSBmb3IgU2hhcmVkIE5vdGhpbmcgKDE5ODYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvZGIuY3MuYmVya2VsZXkuZWR1XFwvcGFwZXJzXFwvaHB0czg1LW5vdGhpbmcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MzkxMzc2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlxcdTIwMWNMaXR0bGUgTGFuZ3VhZ2VzXFx1MjAxZCBieSBKb24gQmVudGxleSAoMTk4NikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9zdGFmZi51bS5lZHUubXRcXC9hZnJhMVxcL3NlbWluYXJcXC9saXR0bGUtbGFuZ3VhZ2VzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzg4MTcwNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJPcHRpbWl6aW5nIFBheG9zIHdpdGggYmF0Y2hpbmcgYW5kIHBpcGVsaW5pbmcgKDIwMTIpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3BkZnMuc2VtYW50aWNzY2hvbGFyLm9yZ1xcL2EwZDBcXC9jZGQyZThhZjE5NDVjMDNjZmFmMmNiNDUxZjcxZjIwOGQwYzkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2OTUyNjQ5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBTdHJ1Y3R1cmUgb2YgXFx1MjAxY1Vuc3RydWN0dXJlZFxcdTIwMWQgRGVjaXNpb24gUHJvY2Vzc2VzICgxOTc2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL21lZGlhLmNvcnBvcmF0ZS1pci5uZXRcXC9tZWRpYV9maWxlc1xcL2lyb2xcXC85N1xcLzk3NjY0XFwvcmVwb3J0c1xcL01pbnR6YmVyZy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY1MTM0MDVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTW9kZWxpbmcgUG90ZW50aWFsIEluY29tZSBhbmQgV2VsZmFyZSBcXHUyMDEzIEJlbmVmaXRzIGluIElsbGlub2lzICgyMDE0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9kMmR2N2h6ZTY0NnhyLmNsb3VkZnJvbnQubmV0XFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDE0XFwvMTJcXC9XZWxmYXJlX1JlcG9ydF9maW5hbGZpbmFsLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzQ4NDIxMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJCdWlsZGluZyBhIFNlbGYtSGVhbGluZyBPcGVyYXRpbmcgU3lzdGVtICgyMDA3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2Nob2ljZXMuY3MuaWxsaW5vaXMuZWR1XFwvc2VsZmhlYWxpbmcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzQ1OTkwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlN0YXRpYyBQcm9ncmFtIEFuYWx5c2lzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2NzLmF1LmRrXFwvfmFtb2VsbGVyXFwvc3BhXFwvc3BhLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzkxNTU2M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJFdmlkZW5jZSBmb3IgYmlvbG9naWNhbCBzaGFwaW5nIG9mIGhhaXIgaWNlICgyMDE1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuYmlvZ2Vvc2NpZW5jZXMubmV0XFwvMTJcXC80MjYxXFwvMjAxNVxcL2JnLTEyLTQyNjEtMjAxNS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTczMDU5OTRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU2VjdXJpdHkgQ2hhc21zIG9mIFdBU00gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvaS5ibGFja2hhdC5jb21cXC91cy0xOFxcL1RodS1BdWd1c3QtOVxcL3VzLTE4LUx1a2FzaWV3aWN6LVdlYkFzc2VtYmx5LUEtTmV3LVdvcmxkLW9mLU5hdGl2ZV9FeHBsb2l0cy1Pbi1UaGUtV2ViLXdwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzgzNDY3NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJJUlM6IFJldmlldyBvZiB0aGUgU3lzdGVtIEZhaWx1cmUgVGhhdCBMZWQgdG8gdGhlIFRheCBEYXkgT3V0YWdlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy50cmVhc3VyeS5nb3ZcXC90aWd0YVxcL2F1ZGl0cmVwb3J0c1xcLzIwMThyZXBvcnRzXFwvMjAxODIwMDY1ZnIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDYyNDA1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBDT05TIG1pY3JvcHJvY2Vzc29yICgxOTc0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9kc3BhY2UubWl0LmVkdVxcL2JpdHN0cmVhbVxcL2hhbmRsZVxcLzE3MjEuMVxcLzQxMTE1XFwvQUlfV1BfMDgwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODUzMTM1MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTZXR0aW5nLCBFbGFib3JhdGluZywgUmVmbGVjdGluZyBvbiBHb2FscyBJbXByb3ZlcyBBY2FkZW1pYyBQZXJmb3JtYW5jZSAoMjAxMCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9pbmRpdmlkdWFsLnV0b3JvbnRvLmNhXFwvamFjb2JoaXJzaFxcL3B1YmxpY2F0aW9uc1xcL0dvYWxTZXR0aW5nSkFQMjAxMC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgyMDY0NzJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTGl2ZSBDb2RpbmcgaW4gU3BvcnRoOiBBIFN0YWNrLUJhc2VkIExhbmd1YWdlIGZvciBBdWRpbyBTeW50aGVzaXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvaWNsYy5saXZlY29kZW5ldHdvcmsub3JnXFwvMjAxN1xcL2NhbWVyYVJlYWR5XFwvc3BvcnRoLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzExODIzN1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJPbiB0aGUgRGV0ZWN0aW9uIG9mIEtlcm5lbC1MZXZlbCBSb290a2l0cyBVc2luZyBIYXJkd2FyZSBQZXJmb3JtYW5jZSBDb3VudGVycyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5jcy5iaW5naGFtdG9uLmVkdVxcL35kZXZ0eXVzaGtpblxcL2FzaWFjY3MtMjAxNy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcxNjE4ODZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFNvY3JhdGljIE1ldGhvZCBpbiBhbiBBZ2Ugb2YgVHJhdW1hICgyMDE3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9oYXJ2YXJkbGF3cmV2aWV3Lm9yZ1xcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAxN1xcLzEwXFwvMjMyMC0yMzQ3X09ubGluZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwNTAyMDdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVG8gS2lsbCBhIENlbnRyaWZ1Z2UgKDIwMTMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5sYW5nbmVyLmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAxN1xcLzAzXFwvdG8ta2lsbC1hLWNlbnRyaWZ1Z2UucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MTMzMzI5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRlZXAgTGVhcm5pbmc6IEEgQ3JpdGljYWwgQXBwcmFpc2FsIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2FyeGl2Lm9yZ1xcL2Z0cFxcL2FyeGl2XFwvcGFwZXJzXFwvMTgwMVxcLzE4MDEuMDA2MzEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MDgzNDY5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRlc2lnbiBjYXNlIGhpc3Rvcnk6IHRoZSBDb21tb2RvcmUgNjQgKDE5ODUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3NwZWN0cnVtLmllZWUub3JnXFwvbnNcXC9wZGZzXFwvY29tbW9kb3JlNjRfbWFyMTk4NS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc0MzgxMDZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU3Vsb25nOiBGaW5kaW5nIEVycm9ycyBpbiBDIFByb2dyYW1zIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNjAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvc3N3LmprdS5hdFxcL0dlbmVyYWxcXC9TdGFmZlxcL01hbnVlbFJpZ2dlclxcL0FTUExPUzE4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjUzNjAxM1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIFN0YWxsLUZyZWUgUmVhbC1UaW1lIEdhcmJhZ2UgQ29sbGVjdG9yIGZvciBSZWNvbmZpZ3VyYWJsZSBIYXJkd2FyZSAoMjAxMikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcmVzZWFyY2hlci53YXRzb24uaWJtLmNvbVxcL3Jlc2VhcmNoZXJcXC9maWxlc1xcL3VzLWJhY29uXFwvQmFjb24xMkFuZFRoZW4ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MzQ3NjI0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNoaXBmb3JnZSBvcGVuc291cmNlIGZvdW5kcnkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZ2l0aHViLmNvbVxcL2xldmlhdGhhbmNoXFwvU0lUQ09OXFwvYmxvYlxcL21hc3RlclxcL09SQ29uZi0yMDE4MDkyMS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgxMDQzNjJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSW50cm9kdWN0aW9uIHRvIHRoZSBNdW1wcyBMYW5ndWFnZSAoMjAxNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNzLnVuaS5lZHVcXC9+b2thbmVcXC9zb3VyY2VcXC9NVU1QUy1NREhcXC9NdW1wc1R1dG9yaWFsLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjMwOTIzN1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEYW5nZXJvdXMgT3B0aW1pemF0aW9ucyBhbmQgdGhlIExvc3Mgb2YgQ2F1c2FsaXR5IGluIEMgYW5kIEMrKyAoMjAxMCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcHVid2ViLmVuZy51dGFoLmVkdVxcL35jczU3ODVcXC9zbGlkZXMtZjEwXFwvRGFuZ2Vyb3VzK09wdGltaXphdGlvbnMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3Mzk5MjI4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBuZXh0IDcwMCBwcm9ncmFtbWluZyBsYW5ndWFnZXMgKDE5NjYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvZnNsLmNzLmlsbGlub2lzLmVkdVxcL2ltYWdlc1xcL2VcXC9lZlxcL1AxNTctbGFuZGluLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzcxODE1OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEZXRlY3RpbmcgQ29uc2Npb3VzbmVzcyAoMjAxNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1OCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmFsbGVuaW5zdGl0dXRlLm9yZ1xcL21lZGlhXFwvZmlsZXJfcHVibGljXFwvM2VcXC83YVxcLzNlN2FhYmIwLTVkYTctNDkxNS1iNGI2LTJhYTg5NmM4ZmFlZVxcLzIwMTdfMTFfaG93dG9tYWtlYWNvbnNjaW91c25lc3NtZXRlci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYzMDAyODBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ3VyZTUzOiBCcm93c2VyIFNlY3VyaXR5IFdoaXRlcGFwZXIgKDIwMTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2N1cmU1My5kZVxcL2Jyb3dzZXItc2VjdXJpdHktd2hpdGVwYXBlci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY0MDY2NjNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSG93IHRvIENhdGNoIFdoZW4gUHJveGllcyBMaWUgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1NyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmFuZHJldy5jbXUuZWR1XFwvdXNlclxcL25pY29sYXNjXFwvcHVibGljYXRpb25zXFwvV2VpbmJlcmctSU1DMTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MzM2MjgzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkJyaW5ndXAgaXMgSGFyZCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDU3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5nYXJibGVkLm5ldFxcL3RtcFxcL2JyaW5ndXAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NDM1NTEyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZ1bmN0aW9uYWwgUGVhcmw6IEVudW1lcmF0aW5nIHRoZSBSYXRpb25hbHMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1NixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNzLm94LmFjLnVrXFwvamVyZW15LmdpYmJvbnNcXC9wdWJsaWNhdGlvbnNcXC9yYXRpb25hbHMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NTE1NDEzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbXB1dGF0aW9uIGFuZCBTdGF0ZSBNYWNoaW5lcyAoMjAwOCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1NixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvbGFtcG9ydC5henVyZXdlYnNpdGVzLm5ldFxcL3B1YnNcXC9zdGF0ZS1tYWNoaW5lLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODAxMjY3MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBbGwgWW91ciBJT1BTIEFyZSBCZWxvbmcgdG8gVXM6IENhc2UgU3R1ZHkgaW4gUGVyZm9ybWFuY2UgT3B0aW1pemF0aW9uICgyMDE1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDU2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cucGVyY29uYS5jb21cXC9saXZlXFwvbXlzcWwtY29uZmVyZW5jZS0yMDE1XFwvc2l0ZXNcXC9kZWZhdWx0XFwvZmlsZXNcXC9zbGlkZXNcXC9hbGxfeW91cl9pb3BzX2FyZV9iZWxvbmdfdG9fdXNQTE1DRTIwMTUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MjUyOTg2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRDUCBhbmQgQkJSIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3JpcGU3Ni5yaXBlLm5ldFxcL3ByZXNlbnRhdGlvbnNcXC8xMC0yMDE4LTA1LTE1LWJici5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcwNjM1ODJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUmV2ZXJzZS1FbmdpbmVlcmluZyBXZWJBc3NlbWJseSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDU2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cucG5mc29mdHdhcmUuY29tXFwvcmV2ZXJzaW5nLXdhc20ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTA3NzY3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlN0aWxsIEFsbCBvbiBPbmUgU2VydmVyOiBQZXJmb3JjZSBhdCBTY2FsZSAoMjAxMSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1NixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9pbmZvLnBlcmZvcmNlLmNvbVxcL3JzXFwvcGVyZm9yY2VcXC9pbWFnZXNcXC9Hb29nbGVXaGl0ZVBhcGVyLVN0aWxsQWxsb25PbmVTZXJ2ZXItUGVyZm9yY2VhdFNjYWxlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzYwNzQ1N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBbWJpdDogSW4tTWVtb3J5IEFjY2VsZXJhdG9yIGZvciBCdWxrIEJpdHdpc2UgT3BlcmF0aW9ucyBVc2luZyBDb21tb2RpdHkgRFJBTSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDU2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9wZW9wbGUuaW5mLmV0aHouY2hcXC9vbXV0bHVcXC9wdWJcXC9hbWJpdC1idWxrLWJpdHdpc2UtZHJhbV9taWNybzE3LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjA4NTc3OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTcGVjaWFsaXppbmcgUm9wZXMgZm9yIFJ1YnkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1NixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvY2hyaXNzZWF0b24uY29tXFwvdHJ1ZmZsZXJ1YnlcXC9yb3Blcy1tYW5sYW5nLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzk3MTkyMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQcm9ncmFtbWluZyBpbiBhbiBJbnRlcmFjdGl2ZSBFbnZpcm9ubWVudDogVGhlIFxcdTIwMWNMaXNwXFx1MjAxZCBFeHBlcmllbmNlICgxOTc4KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDU1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5zb2Z0d2FyZXByZXNlcnZhdGlvbi5vcmdcXC9wcm9qZWN0c1xcL2ludGVyYWN0aXZlX2NcXC9iaWJcXC9TYW5kZXdhbGwtMTk3OC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3MzY5NTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUHJvbG9nIGFzIERlc2NyaXB0aW9uIGFuZCBJbXBsZW1lbnRhdGlvbiBMYW5ndWFnZSBpbiBDUyBUZWFjaGluZyAoMjAwNCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuZXAubGl1LnNlXFwvZWNwXFwvMDEyXFwvMDA0XFwvZWNwMDEyMDA0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODE3NDE5MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJXaHkgVGhyZWFkcyBBcmUgYSBCYWQgSWRlYSAoMTk5NSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNjLmdhdGVjaC5lZHVcXC9jbGFzc2VzXFwvQVkyMDEwXFwvY3M0MjEwX2ZhbGxcXC9wYXBlcnNcXC9vdXN0ZXJob3V0LXRocmVhZHMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3Mjk3MzI1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbXBpbGVyIENvbnN0cnVjdGlvbjogVGhlIEFydCBvZiBOaWtsYXVzIFdpcnRoICgyMDAwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDU0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9wZGZzLnNlbWFudGljc2Nob2xhci5vcmdcXC8wMzZmXFwvYzRlZmZkYTRiYmJlOWY2YTllZTc2MmRmNzE3YmQwYWYxMzI0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjYwOTM2MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJVbmRlcnN0YW5kaW5nLCBmaW5kaW5nLCBhbmQgZWxpbWluYXRpbmcgZ3JvdW5kIGxvb3BzICgyMDAzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDU0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3dlYi5taXQuZWR1XFwvamhhd2tcXC90bXBcXC9wXFwvRVNUMDE2X0dyb3VuZF9Mb29wc19oYW5kb3V0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzY0MDY3NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJGdXp6eSBMb2dpYyBpbiBBZ2VudC1CYXNlZCBHYW1lIERlc2lnbiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDU0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93ZWIubm9ydGhlYXN0ZXJuLmVkdVxcL21hZ3lcXC9jb3Vyc2VzXFwvQUlcXC9GdXp6eUxvZ2ljR2FtZXMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MjY1ODYyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk5vIENhdXNhbCBFZmZlY3Qgb2YgTXVzaWMgUHJhY3RpY2Ugb24gQWJpbGl0eSAoMjAxNCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1NCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lmd3ZXJuLm5ldFxcL2RvY3NcXC9nZW5ldGljc1xcL2NvcnJlbGF0aW9uXFwvMjAxNC1tb3NpbmcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MzQ4NzI3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkR5bmFtaWMgQXV0b21hdGljIERpZmZlcmVudGlhdGlvbiBvZiBHUFUgQnJvYWRjYXN0IEtlcm5lbHMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cubWl0LmVkdVxcL35qdmllbG1hXFwvcHVibGljYXRpb25zXFwvRHluYW1pYy1BdXRvbWF0aWMtRGlmZmVyZW50aWF0aW9uLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQwNDIwMVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgUHJvYmxlbSB3aXRoIFRocmVhZHMgKDIwMDYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dzIuZWVjcy5iZXJrZWxleS5lZHVcXC9QdWJzXFwvVGVjaFJwdHNcXC8yMDA2XFwvRUVDUy0yMDA2LTEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2OTk2NjY4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkluc2lkZSB0aGUgV2luZG93cyA5NSBGaWxlIFN5c3RlbSAoMTk5NykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cudGVub3gubmV0XFwvYm9va3NcXC9NaWNyb3NvZnRfV2luZG93c1xcL0luc2lkZV90aGVfV2luZG93czk1X0ZpbGVfU3lzdGVtLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzM5MTUyNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDb21wdXRhdGlvbmFsIENvbXBsZXhpdHkgb2YgQWlyIFRyYXZlbCBQbGFubmluZyAoMjAwMykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuZGVtYXJja2VuLm9yZ1xcL2NhcmxcXC9wYXBlcnNcXC9JVEEtc29mdHdhcmUtdHJhdmVsLWNvbXBsZXhpdHlcXC9JVEEtc29mdHdhcmUtdHJhdmVsLWNvbXBsZXhpdHkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NjQyMjYzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlJhY2tsb2c6IFByb2xvZyBTdHlsZSBMb2dpYyBQcm9ncmFtbWluZyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9wbHQuZWVjcy5ub3J0aHdlc3Rlcm4uZWR1XFwvc25hcHNob3RzXFwvY3VycmVudFxcL3BkZi1kb2NcXC9yYWNrbG9nLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODc2NzcwOFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIEZhaWx1cmUgb2YgQWNhZGVtaWMgUXVhbGl0eSBDb250cm9sIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvam91cm5hbG9mcG9zaXRpdmVzZXh1YWxpdHkub3JnXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDE4XFwvMDhcXC9GYWlsdXJlLW9mLUFjYWRlbWljLVF1YWxpdHktQ29udHJvbC1UZWNobm9sb2d5LW9mLU9yZ2FzbS1MaWViZXJtYW4tU2NoYXR6YmVyZy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc4OTc3NTNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQW4gRW1waXJpY2FsIFN0dWR5IG9mIHRoZSBSZWxpYWJpbGl0eSBvZiBVbml4IFV0aWxpdGllcyAoMTk4OSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9mdHAuY3Mud2lzYy5lZHVcXC9wYXJhZHluXFwvdGVjaG5pY2FsX3BhcGVyc1xcL2Z1enoucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MzI0MDYzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFtZXJpY2FuIEd1dDogQW4gT3BlbiBQbGF0Zm9ybSBmb3IgQ2l0aXplbiBTY2llbmNlIE1pY3JvYmlvbWUgUmVzZWFyY2ggW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9tc3lzdGVtcy5hc20ub3JnXFwvY29udGVudFxcL21zeXNcXC8zXFwvM1xcL2UwMDAzMS0xOC5mdWxsLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzQzNDk0OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIb3cgdGhlIFJlZm9ybXVsYXRpb24gb2YgT3h5Q29udGluIElnbml0ZWQgdGhlIEhlcm9pbiBFcGlkZW1pYyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3czLm5kLmVkdVxcL35lbGllYmVyXFwvcmVzZWFyY2hcXC9FTFAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NzkyMDUyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkJhc2ljIENhdmUgRGl2aW5nOiBBIEJsdWVwcmludCBmb3IgU3Vydml2YWwgKDE5ODYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL25zc2Nkcy5vcmdcXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMThcXC8wNVxcL0JsdWVwcmludC1mb3ItU3Vydml2YWwucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NDgzMzM5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNGVEMgYW5kIFNFQyBUZXN0aW1vbnkgb24gQ3J5cHRvY3VycmVuY2llcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuYmFua2luZy5zZW5hdGUuZ292XFwvcHVibGljXFwvX2NhY2hlXFwvZmlsZXNcXC9hNWU3MmFjNi00ZjhhLTQ3M2YtOWM5Yy1lMjg5NDU3M2Q1N2RcXC9CRjYyNDMzQTA5QTlCOTVBMjY5QTI5RTFGRjEzRDJCQS5jbGF5dG9uLXRlc3RpbW9ueS0yLTYtMTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MzEyMDI1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlplcm8tb3ZlcmhlYWQgZGV0ZXJtaW5pc3RpYyBleGNlcHRpb25zOiBUaHJvd2luZyB2YWx1ZXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cub3Blbi1zdGQub3JnXFwvanRjMVxcL3NjMjJcXC93ZzIxXFwvZG9jc1xcL3BhcGVyc1xcLzIwMThcXC9wMDcwOXIwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzA1OTI5N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDcnlwdG9ncmFwaGljYWxseSBDZXJ0aWZpZWQgSHlwb3RoZXNpcyBUZXN0aW5nIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvc2FjaGFzZXJ2YW5zY2hyZWliZXIuY29tXFwvdGhlc2lzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODY5Mjk4MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIEhpc3Rvcnkgb2YgQ2FwYWNpdHkgQ2hhbGxlbmdlcyBpbiBDb21wdXRlciBTY2llbmNlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2NzLnN0YW5mb3JkLmVkdVxcL3Blb3BsZVxcL2Vyb2JlcnRzXFwvQ1NDYXBhY2l0eS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYzMzQ5NjhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTWFjaC1PIFRyaWNrcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2lva2l0LnJhY2luZ1xcL21hY2hvdHJpY2tzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzM3ODgyOVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJFeHBsb2l0aW5nIENvcm91dGluZXMgdG8gQXR0YWNrIHRoZSBcXHUyMDFjS2lsbGVyIE5hbm9zZWNvbmRzXFx1MjAxZCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy52bGRiLm9yZ1xcL3B2bGRiXFwvdm9sMTFcXC9wMTcwMi1qb25hdGhhbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0MjA5NTBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUHlja2V0OiBBIFRyYWNpbmcgSklUIEZvciBhIEZ1bmN0aW9uYWwgTGFuZ3VhZ2UgKDIwMTUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvaG9tZXMuc2ljZS5pbmRpYW5hLmVkdVxcL3NhbXRoXFwvcHlja2V0LWRyYWZ0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODAwNTczNFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTeXN0ZW1zIFNvZnR3YXJlIFJlc2VhcmNoIGlzIElycmVsZXZhbnQgKDIwMDApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNTAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvZG9jLmNhdC12Lm9yZ1xcL2JlbGxfbGFic1xcL3V0YWgyMDAwXFwvdXRhaDIwMDAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MjA3MzE3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIldlbGNvbWUgdG8gRE5TLCBvciBTYXZpbmcgdGhlIEROUyBDYW1lbCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9pbmRpY28uZG5zLW9hcmMubmV0XFwvZXZlbnRcXC8yOVxcL2NvbnRyaWJ1dGlvbnNcXC82NThcXC9hdHRhY2htZW50c1xcLzY0MVxcLzEwMzlcXC9XZWxjb21lX3RvX0ROUy1maW5hbC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgyNTU2MTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIERhcmsgKFBhdHRlcm5zKSBTaWRlIG9mIFVYIERlc2lnbiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2NvbGluZ3JheS5tZVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAxOF9HcmF5ZXRhbF9DSElfRGFya1BhdHRlcm5zVVhEZXNpZ24ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3OTYyNDY5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk1vbmFkcyBmb3IgZnVuY3Rpb25hbCBwcm9ncmFtbWluZyAoMTk5NSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9ob21lcGFnZXMuaW5mLmVkLmFjLnVrXFwvd2FkbGVyXFwvcGFwZXJzXFwvbWFya3RvYmVyZG9yZlxcL2JhYXN0YWQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MDAyNTU0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk9ubGluZSBUcmFja2luZzogQSAxTS1zaXRlIE1lYXN1cmVtZW50IGFuZCBBbmFseXNpcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3JhbmRvbXdhbGtlci5pbmZvXFwvcHVibGljYXRpb25zXFwvT3BlbldQTV8xX21pbGxpb25fc2l0ZV90cmFja2luZ19tZWFzdXJlbWVudC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg3NzE0OTRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU0VDIHNldHRsZXMgd2l0aCBFdGhlckRlbHRhIGZvdW5kZXIgZm9yIHJ1bm5pbmcgYW4gdW5saWNlbnNlZCBleGNoYW5nZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuc2VjLmdvdlxcL2xpdGlnYXRpb25cXC9hZG1pblxcLzIwMThcXC8zNC04NDU1My5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0MTA0ODNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTmFtaW5nIGFuZCBTeW5jaHJvbml6YXRpb24gaW4gYSBEZWNlbnRyYWxpemVkIENvbXB1dGVyIFN5c3RlbSAoMTk3OSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuZHRpYy5taWxcXC9kdGljXFwvdHJcXC9mdWxsdGV4dFxcL3UyXFwvYTA2MTQwNy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgyNjcwMjJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTWV0aG9kcyBmb3IgU3R1ZHlpbmcgQ29pbmNpZGVuY2VzICgxOTg5KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5tYXRoLnVjaGljYWdvLmVkdVxcL35mY2FsZVxcL0NDQ1xcL0RDLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjI5NzA2N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUbyBFeHBsYWluIG9yIHRvIFByZWRpY3Q/ICgyMDEwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5nYWxpdHNobXVlbGkuY29tXFwvc3lzdGVtXFwvZmlsZXNcXC9TdGF0JTIwU2NpZW5jZSUyMHB1Ymxpc2hlZC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1MDk0MDdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEludGVsIDgweDg2IFByb2Nlc3MgQXJjaGl0ZWN0dXJlOiBQaXRmYWxscyBmb3IgU2VjdXJlIFN5c3RlbXMgKDE5OTUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3BkZnMuc2VtYW50aWNzY2hvbGFyLm9yZ1xcLzIyMDlcXC80MjgwOTI2MmMxN2I2NjMxYzBmNjUzNmM5MWFhZjc3NTY4NTcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MTAxNzE5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkltcGVyZmVjdCBGb3J3YXJkIFNlY3JlY3k6IEhvdyBEaWZmaWUtSGVsbG1hbiBGYWlscyBpbiBQcmFjdGljZVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9qaGFsZGVybS5jb21cXC9wdWJcXC9wYXBlcnNcXC93ZWFrZGgtY2FjbTE5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODcyNTgyNFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJGcm9pZDogT3B0aW1pemF0aW9uIG9mIEltcGVyYXRpdmUgUHJvZ3JhbXMgaW4gYSBSZWxhdGlvbmFsIERhdGFiYXNlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LnZsZGIub3JnXFwvcHZsZGJcXC92b2wxMVxcL3A0MzItcmFtYWNoYW5kcmEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NzQ3ODA3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlN1Y2NpbmN0ZXIgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0OSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9wZW9wbGUuY3NhaWwubWl0LmVkdVxcL21pcFxcL3BhcGVyc1xcL3N1Y2NpbmN0XFwvc3VjY2luY3QucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NzAxNTQwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFuIEZQR0EgSW1wbGVtZW50YXRpb24gb2YgYSBEaXN0cmlidXRlZCBWaXJ0dWFsIE1hY2hpbmUgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0OCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNzLnVubS5lZHVcXC9+d2lsbGlhbXNcXC9mcGdhLXVjbmMxOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3NjAyNjdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFRyb3VibGUgd2l0aCBNYWNyb2Vjb25vbWljcyAoMjAxNikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0OCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcGF1bHJvbWVyLm5ldFxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAxNlxcLzA5XFwvV1AtVHJvdWJsZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgxNzk5ODlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ2xhc2NhbCBSZWZlcmVuY2UgTWFudWFsIGZvciB0aGUgTGlzYSAoMTk4MykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0OCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cubWlycm9yc2VydmljZS5vcmdcXC9zaXRlc1xcL3d3dy5iaXRzYXZlcnMub3JnXFwvcGRmXFwvYXBwbGVcXC9saXNhXFwvdG9vbGtpdF91bml2ZXJzaXR5XFwvQ2xhc2NhbF9SZWZlcmVuY2VfTWFudWFsX01hcjgzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzU5MTcyOFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTZWxmLUNlbnNvcnNoaXAgaW4gUHVibGljIERpc2NvdXJzZTogQSBUaGVvcnkgb2YgJ1BvbGl0aWNhbCBDb3JyZWN0bmVzcycgKDE5OTQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5icm93bi5lZHVcXC9EZXBhcnRtZW50c1xcL0Vjb25vbWljc1xcL0ZhY3VsdHlcXC9HbGVubl9Mb3VyeVxcL2xvdXJ5aG9tZXBhZ2VcXC9wYXBlcnNcXC9Mb3VyeV9Qb2xpdGljYWxfQ29ycmVjdG5lc3MucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NDQyMzQ3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBTY2hlbWUgTWFjaGluZSAoMTk5NCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0NyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9idXJnZXJyZy5naXRodWIuaW9cXC9UUjQxMy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3MDI0MjBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTWF0aGVtYXRpY3MgaW4gdGhlIDIwdGggY2VudHVyeSBcXHUyMDEzIFNpciBNaWNoYWVsIEF0aXlhaCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5tYXRoLnRhbXUuZWR1XFwvfnJvamFzXFwvYXRpeWFoMjB0aGNlbnR1cnkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NzMwNDM2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIldoeSBFY2hvIENoYW1iZXJzIEFyZSBVc2VmdWwgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0NyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmVjb25vbWljcy5veC5hYy51a1xcL21hdGVyaWFsc1xcL2ptX3BhcGVyc1xcLzkyMVxcL2VjaG9jaGFtYmVycy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgzNzU0MDlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQnVpbGRpbmcgYSBCdy1UcmVlIFRha2VzIE1vcmUgVGhhbiBKdXN0IEJ1enogV29yZHMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0NyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZGIuY3MuY211LmVkdVxcL3BhcGVyc1xcLzIwMThcXC9tb2QzNDItd2FuZ0EucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MDQxNjE2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBIaXN0b3J5LCBDb250cm92ZXJzeSwgYW5kIEV2b2x1dGlvbiBvZiB0aGUgR290byBTdGF0ZW1lbnQgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0NixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93ZWIuc29ub21hLmVkdVxcL3VzZXJzXFwvbFxcL2x1dmlzaVxcL2dvdG9cXC9nb3RvLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQ4NDIyMVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBdXRvbWF0ZWQgUENCIFJldmVyc2UgRW5naW5lZXJpbmcgKDIwMTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy51c2VuaXgub3JnXFwvc3lzdGVtXFwvZmlsZXNcXC9jb25mZXJlbmNlXFwvd29vdDE3XFwvd29vdDE3LXBhcGVyLWtsZWJlci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwODI0NjVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTmV3IEhhcmR3YXJlIGZvciBNYXNzaXZlIE5ldXJhbCBOZXR3b3JrcyAoMTk4OCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0NixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcGFwZXJzLm5pcHMuY2NcXC9wYXBlclxcLzIyLW5ldy1oYXJkd2FyZS1mb3ItbWFzc2l2ZS1uZXVyYWwtbmV0d29ya3MucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MzcyOTUzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkVudGl0eSBDb21wb25lbnQgU3lzdGVtcyBhbmQgRGF0YSBPcmllbnRlZCBEZXNpZ24gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0NixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9hcmFzLXAuaW5mb1xcL3RleHRzXFwvZmlsZXNcXC8yMDE4QWNhZGVteSUyMC0lMjBFQ1MtRG9ELnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODIwMjMwOFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUZXN0aW5nIFRoZW9yaWVzIG9mIEFtZXJpY2FuIFBvbGl0aWNzOiBFbGl0ZXMsIEludGVyZXN0IEdyb3VwcywgQ2l0aXplbnMgKDIwMTQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3NjaG9sYXIucHJpbmNldG9uLmVkdVxcL3NpdGVzXFwvZGVmYXVsdFxcL2ZpbGVzXFwvbWdpbGVuc1xcL2ZpbGVzXFwvZ2lsZW5zX2FuZF9wYWdlXzIwMTRfLXRlc3RpbmdfdGhlb3JpZXNfb2ZfYW1lcmljYW5fcG9saXRpY3MuZG9jLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODMyNDU5MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUZWNobm9sb2dpY2FsIENoYW5nZSBhbmQgT2Jzb2xldGUgU2tpbGxzOiBFdmlkZW5jZSBmcm9tIE1lblxcdTIwMTlzIFBybyBUZW5uaXMgKDIwMTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvaW5kaXZpZHVhbC51dG9yb250by5jYVxcL2poYWxsXFwvZG9jdW1lbnRzXFwvVGVubmlzVGVjaENoYW5nZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY3MjA0NjhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRmxhcmU6IEFuIEFwcHJvYWNoIHRvIFJvdXRpbmcgaW4gTGlnaHRuaW5nIE5ldHdvcmsgKDIwMTYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvYml0ZnVyeS5jb21cXC9jb250ZW50XFwvZG93bmxvYWRzXFwvd2hpdGVwYXBlcl9mbGFyZV9hbl9hcHByb2FjaF90b19yb3V0aW5nX2luX2xpZ2h0bmluZ19uZXR3b3JrXzdfN18yMDE2LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzA1NzQ0MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJCaWN5Y2xlIFRlY2hub2xvZ3kgKDE5NzMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvdmV0ZXJhbmN5Y2xlY2x1YmxpYnJhcnkub3JnLnVrXFwvbmNsXFwvcGljc1xcL0JpY3ljbGUlMjBUZWNobm9sb2d5JTIwU2NpZW50aWZpYyUyMEFtZXJpY2FuJTIwTWFyY2glMjAxOTczJTIwKFYtQ0MlMjBMaWJyYXJ5KS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc5NjgyNjdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSG93IEJyb3dzZXJzXFx1MjAxOSBFeHBsYW5hdGlvbnMgSW1wYWN0IE1pc2NvbmNlcHRpb25zIEFib3V0IFByaXZhdGUgQnJvd3NpbmcgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmJsYXNldXIuY29tXFwvcGFwZXJzXFwvd3d3MThwcml2YXRlYnJvd3NpbmcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NDU2MDQ3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk92ZXJsb2FkIENvbnRyb2wgZm9yIFNjYWxpbmcgV2VDaGF0IE1pY3Jvc2VydmljZXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNzLmNvbHVtYmlhLmVkdVxcL35ydWlndVxcL3BhcGVyc1xcL3NvY2MxOC1maW5hbDEwMC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg2OTE0NjJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUG9wdWxhcml0eSBEeW5hbWljcyBhbmQgSW50cmluc2ljIFF1YWxpdHkgaW4gUmVkZGl0IGFuZCBIYWNrZXIgTmV3cyAoMjAxNSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0NSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcGRmcy5zZW1hbnRpY3NjaG9sYXIub3JnXFwvY2NmNlxcLzBkMDhiZGQ5ODllYTM1OTViYmJkYTEzMmRlZGQ3MWM0N2FjZi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgyOTA5MDRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU2hvdyBITjogQSBSb290IENhdXNlIEFuYWx5c2lzIEVCb29rIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LnNvbG9naWMuY29tXFwvc2l0ZXNcXC9kZWZhdWx0XFwvZmlsZXNcXC9wZGZcXC9SQ0EtZWJvb2stbXktYm9zcy10b2xkLW1lLXRvLWRvLXJjYS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY0ODM3NjJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU3Vydml2YWwgaW4gdGhlIGZpcnN0IGhvdXJzIG9mIHRoZSBDZW5vem9pYyAoMjAwNCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0NCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC91YWhvc3QudWFudHdlcnBlbi5iZVxcL2Z1bm1vcnBoXFwvcmFvdWxcXC9tYWNyb2V2b2x1dGllXFwvUm9iZXJ0c29uMjAwNC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3NDg5OTVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIERpc2NvdmVyaWVzIG9mIENvbnRpbnVhdGlvbnMgKDE5OTMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3Lm1hdGguYmFzLmJnXFwvfmJhbnRjaGV2XFwvcGxhY2VcXC9pc3dpbVxcL2NvbnRpLWRpc2NvLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQ1NzkxNFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJPcmFsIEhpc3Rvcnkgb2YgSm9obiBCYWNrdXMgKDIwMDYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvYXJjaGl2ZS5jb21wdXRlcmhpc3Rvcnkub3JnXFwvcmVzb3VyY2VzXFwvYWNjZXNzXFwvdGV4dFxcLzIwMTNcXC8wNVxcLzEwMjY1Nzk3MC0wNS0wMS1hY2MucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTY0MTg2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlBlZWtpbmcgQmVoaW5kIHRoZSBDdXJ0YWlucyBvZiBTZXJ2ZXJsZXNzIFBsYXRmb3JtcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3BhZ2VzLmNzLndpc2MuZWR1XFwvfmxpYW5nd1xcL3B1YlxcL2F0YzE4LWZpbmFsMjk4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzY4NjIyM1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIE1hdGhlbWF0aWNpYW5cXHUyMDE5cyBBcG9sb2d5ICgxOTQwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQ0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5tYXRoLnVhbGJlcnRhLmNhXFwvfm1zc1xcL21pc2NcXC9BJTIwTWF0aGVtYXRpY2lhbiUyN3MlMjBBcG9sb2d5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODAzNzU1MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJMSEQ6IEltcHJvdmluZyBDYWNoZSBIaXQgUmF0ZSBieSBNYXhpbWl6aW5nIEhpdCBEZW5zaXR5IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmNzLmNtdS5lZHVcXC9+YmVja21hbm5cXC9wdWJsaWNhdGlvbnNcXC9wYXBlcnNcXC8yMDE4Lm5zZGkubGhkLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjgyNTkzMVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEaXJlY3Rpb24gZm9yIElTTyBDKysgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cub3Blbi1zdGQub3JnXFwvSlRDMVxcL1NDMjJcXC9XRzIxXFwvZG9jc1xcL3BhcGVyc1xcLzIwMThcXC9wMDkzOXIwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjM5NDA0MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJGb3J0aWZ5aW5nIE1hY3JvcyAoMjAxMCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Mi5jY3MubmV1LmVkdVxcL3JhY2tldFxcL3B1YnNcXC9pY2ZwMTAtY2YucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MzcyMTAzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRlcHJlY2F0aW5nIHRoZSBPYnNlcnZlciBQYXR0ZXJuICgyMDEwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9pbmZvc2NpZW5jZS5lcGZsLmNoXFwvcmVjb3JkXFwvMTQ4MDQzXFwvZmlsZXNcXC9EZXByZWNhdGluZ09ic2VydmVyc1RSMjAxMC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc4NDUzNDFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ29tcGlsZXIgRnV6emluZyBUaHJvdWdoIERlZXAgTGVhcm5pbmcgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0MyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9ob21lcGFnZXMuaW5mLmVkLmFjLnVrXFwvaGxlYXRoZXJcXC9wdWJsaWNhdGlvbnNcXC8yMDE4X2RlZXBmdXp6aW5nX2lzc3RhLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODc0ODE5M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJZb3UgQ291bGQgSGF2ZSBJbnZlbnRlZCBTcGVjdHJhbCBTZXF1ZW5jZXMgKDIwMDYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvdGltb3RoeWNob3cubmV0XFwvc3BlY3RyYWwwMi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwNjM5OTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUmVsYXRpb25zaGlwIEJldHdlZW4gUHJhY3RpY2UgYW5kIFBlcmZvcm1hbmNlIGluIFNwb3J0czogQSBNZXRhLUFuYWx5c2lzICgyMDE2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9hcnRzY2ltZWRpYS5jYXNlLmVkdVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvc2l0ZXNcXC8xNDFcXC8yMDE2XFwvMDlcXC8xNDIxNDg1NlxcL01hY25hbWFyYS1Nb3JlYXUtSGFtYnJpY2stMjAxNi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc4NzQwNjlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSGVyYmVydCBTaW1vbjogVGhlIEFyY2hpdGVjdHVyZSBvZiBDb21wbGV4aXR5ICgxOTYyKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2Vjb3BsZXhpdHkub3JnXFwvZmlsZXNcXC91cGxvYWRzXFwvU2ltb24ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MzkyMjIzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlJlbWluaXNjZW5jZXMgb2YgdGhlIFZMU0kgUmV2b2x1dGlvbiAoMjAxMikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93b3JyeWRyZWFtLmNvbVxcL3JlZnNcXC9Db253YXklMjAtJTIwUmVtaW5pc2NlbmNlcyUyMG9mJTIwdGhlJTIwVkxTSSUyMFJldm9sdXRpb24ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MTQwMjk3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZpbmdlciBQcmludGluZyBEYXRhIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VwcmludC5pYWNyLm9yZ1xcLzIwMThcXC81MDMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MTYyNjE5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlF1YW50aXRhdGl2ZSBhbmFseXNpcyBvZiBmYW1pbHkgdHJlZXMgd2l0aCBtaWxsaW9ucyBvZiByZWxhdGl2ZXMgKDIwMTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5iaW9yeGl2Lm9yZ1xcL2NvbnRlbnRcXC9iaW9yeGl2XFwvZWFybHlcXC8yMDE3XFwvMDJcXC8wN1xcLzEwNjQyNy4xLmZ1bGwucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NDk5MjQxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNsb3VkS2l0OiBTdHJ1Y3R1cmVkIFN0b3JhZ2UgZm9yIE1vYmlsZSBBcHBsaWNhdGlvbnMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0MixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cudmxkYi5vcmdcXC9wdmxkYlxcL3ZvbDExXFwvcDU0MC1zaHJhZXIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MjgxMjcwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoaXJ0eSBZZWFycyBMYXRlcjogTGVzc29ucyBmcm9tIHRoZSBNdWx0aWNzIFNlY3VyaXR5IEV2YWx1YXRpb24gKDIwMDIpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5hY3NhYy5vcmdcXC8yMDAyXFwvcGFwZXJzXFwvY2xhc3NpYy1tdWx0aWNzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjk1NjM4NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIaW50cyBmb3IgQ29tcHV0ZXIgU3lzdGVtIERlc2lnbiAoMTk4MykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lm1pY3Jvc29mdC5jb21cXC9lbi11c1xcL3Jlc2VhcmNoXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDE2XFwvMDJcXC9hY3JvYmF0LTE3LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzU4Nzc0OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgQ29tcHV0ZXIgYW5kIHRoZSBCcmFpbiAoMTk1OCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvaWE4MDA4MDAudXMuYXJjaGl2ZS5vcmdcXC80XFwvaXRlbXNcXC9UaGVDb21wdXRlckFuZFRoZUJyYWluXFwvVGhlJTIwQ29tcHV0ZXIlMjBhbmQlMjBUaGUlMjBCcmFpbl90ZXh0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzQ2MTE1MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJOYXR1cmFsIFNvdW5kaW5nIEFydGlmaWNpYWwgUmV2ZXJiZXJhdGlvbiAoMTk2MikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0MSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9jaGFybGVzYW1lcy5uZXRcXC9wZGZcXC9NUlNjaHJvZWRlclxcL2FydGlmaWNpYWwtcmV2ZXJiLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjMwNDM1NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTZWxmLXJlZmVyZW5jZSBhbmQgTG9naWMgKDIwMDUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmltbS5kdHUuZGtcXC9+dG9ib1xcL2Vzc2F5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzg0NTI4OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUZWNobmlxdWVzIG9mIFN5c3RlbXMgQW5hbHlzaXMgKDE5NTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNDAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5yYW5kLm9yZ1xcL2NvbnRlbnRcXC9kYW1cXC9yYW5kXFwvcHVic1xcL3Jlc2VhcmNoX21lbW9yYW5kYVxcLzIwMDZcXC9STTE4MjktMS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYzNTU4ODZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSW1wbGVtZW50aW5nIFNJUCBUZWxlcGhvbnkgaW4gUHl0aG9uICgyMDA4KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcLzM5cGVlcnMubmV0XFwvZG93bmxvYWRcXC9kb2NcXC9yZXBvcnQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzU3NzM3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlByYWN0aWNhbCBNZW1vcnkgU2FmZXR5IHdpdGggUmFuZG9tIEVtYmVkZGVkIFNlY3JldCBUb2tlbnMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0MCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuY3MuY29sdW1iaWEuZWR1XFwvfnNpbWhhXFwvcHJlcHJpbnRfaXNjYTE4X1JFU1RfbWVtb3J5X3NhZmV0eS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY4OTEzMTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU2NhbGFibGUgMTAgR2JwcyBUQ1BcXC9JUCBTdGFjayBBcmNoaXRlY3R1cmUgZm9yIFJlY29uZmlndXJhYmxlIEhhcmR3YXJlICgyMDE1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2Rhdmlkc2lkbGVyLmNoXFwvZmlsZXNcXC9mY2NtMjAxNS10Y3BpcC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc5OTQ3MTNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVW5kZXJzdGFuZCBhbmQgRWxpbWluYXRlIEpWTSBXYXJtLVVwIE92ZXJoZWFkIGluIERhdGEtUGFyYWxsZWwgU3lzdGVtcyAoMjAxNikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnVzZW5peC5vcmdcXC9zeXN0ZW1cXC9maWxlc1xcL2NvbmZlcmVuY2VcXC9vc2RpMTZcXC9vc2RpMTYtbGlvbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc5OTUwNTVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFR5cmFubnkgb2YgdGhlIENsb2NrICgyMDEyKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5lbmcuYXVidXJuLmVkdVxcL351Z3VpblxcL3RlYWNoaW5nXFwvUkVBRElOR1xcL0U2MjAwXFwvU3V0aGVybGFuZF9UeXJhbm55X29fQ2xvY2sucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTc3Njc3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkJmbG9hdDE2IFxcdTIwMTMgSGFyZHdhcmUgTnVtZXJpY3MgRGVmaW5pdGlvbiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9zb2Z0d2FyZS5pbnRlbC5jb21cXC9zaXRlc1xcL2RlZmF1bHRcXC9maWxlc1xcL21hbmFnZWRcXC80MFxcLzhiXFwvYmYxNi1oYXJkd2FyZS1udW1lcmljcy1kZWZpbml0aW9uLXdoaXRlLXBhcGVyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQ3NTU3NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDb21waWxpbmcgYSBTdWJzZXQgb2YgQVBMIGludG8gYSBUeXBlZCBJbnRlcm1lZGlhdGUgTGFuZ3VhZ2UgKDIwMTQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvaGlwZXJmaXQuZGtcXC9wZGZcXC9hcnJheTE0X2ZpbmFsLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjIzMDA2N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJHZW5ldGljIFByZWRpc3Bvc2l0aW9uIHRvIE9iZXNpdHkgYW5kIE1lZGljYXJlIEV4cGVuZGl0dXJlcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuZ3dlcm4ubmV0XFwvZG9jc1xcL2dlbmV0aWNzXFwvc2VsZWN0aW9uXFwvMjAxNy13ZWhieS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY0MzQ2OTdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSW1wZXJmZWN0IEZvcndhcmQgU2VjcmVjeTogSG93IERpZmZpZS1IZWxsbWFuIEZhaWxzIGluIFByYWN0aWNlICgyMDE1KVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93ZWFrZGgub3JnXFwvaW1wZXJmZWN0LWZvcndhcmQtc2VjcmVjeS1jY3MxNS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg3MjU4MjRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTWF0aGVtYXRpY2FsIE1ldGFwaHlzaWNzICgyMDE1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3NoZWxmMS5saWJyYXJ5LmNtdS5lZHVcXC9IU1NcXC8yMDE1XFwvYTE2MjYxOTAucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NDYyOTQ3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlJldHBvbGluZTogQSBCcmFuY2ggVGFyZ2V0IEluamVjdGlvbiBNaXRpZ2F0aW9uIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3NvZnR3YXJlLmludGVsLmNvbVxcL3NpdGVzXFwvZGVmYXVsdFxcL2ZpbGVzXFwvbWFuYWdlZFxcLzFkXFwvNDZcXC9SZXRwb2xpbmUtQS1CcmFuY2gtVGFyZ2V0LUluamVjdGlvbi1NaXRpZ2F0aW9uLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjQyMzQwMVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJFc3NlbnRpYWxzIG9mIE1ldGFoZXVyaXN0aWNzICgyMDE1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9jcy5nbXUuZWR1XFwvfnNlYW5cXC9ib29rXFwvbWV0YWhldXJpc3RpY3NcXC9Fc3NlbnRpYWxzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQ5MTI3NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJWZXJpZnlpbmcgQ29uY3VycmVudCBQcm9ncmFtcyBVc2luZyBDb250cmFjdHMgKDIwMTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmZpdC52dXRici5jelxcL352b2puYXJcXC9QdWJsaWNhdGlvbnNcXC9pY3N0MTctY29udHJhY3RzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQwMzI0NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgVFgtMiBDb21wdXRlciBhbmQgU2tldGNocGFkICgyMDEyKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cubGwubWl0LmVkdVxcL3B1YmxpY2F0aW9uc1xcL2xhYm5vdGVzXFwvTG9va2luZ0JhY2tfMTlfMS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYwNTg5NjZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiR3JvdW5kOiBBIERhdGEgQ29udGV4dCBTZXJ2aWNlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3Jpc2UuY3MuYmVya2VsZXkuZWR1XFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDE3XFwvMDNcXC9DSURSMTcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDE1NDU2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNvQyBpdCB0byBFTTogRU0gc2lkZS1jaGFubmVsIGF0dGFja3Mgb24gYSBjb21wbGV4IFNvQyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuaWFjci5vcmdcXC9hcmNoaXZlXFwvY2hlczIwMTVcXC85MjkzMDU5OVxcLzkyOTMwNTk5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzIyMDY2MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJJQ0FOTiBzZWVraW5nIGlucHV0IG9uIGNlZGluZyBjb250cm9sIG9mIFdIT0lTIHByaXZhY3kgdG8gZ292ZXJubWVudHMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzOCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmljYW5uLm9yZ1xcL2VuXFwvc3lzdGVtXFwvZmlsZXNcXC9maWxlc1xcL3Byb3Bvc2VkLWludGVyaW0tbW9kZWwtZ2Rwci1jb21wbGlhbmNlLXN1bW1hcnktZGVzY3JpcHRpb24tMjhmZWIxOC1lbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY0OTE1NjZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTklTVCBVbmNlcnRhaW50eSBNYWNoaW5lIFxcdTIwMTMgVXNlclxcdTIwMTlzIE1hbnVhbCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC91bmNlcnRhaW50eS5uaXN0LmdvdlxcL05JU1RVbmNlcnRhaW50eU1hY2hpbmUtVXNlck1hbnVhbC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcwMDg3MDVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhyZWUgR2VuZXJhdGlvbnMgb2YgQXN5bmNocm9ub3VzIE1pY3JvcHJvY2Vzc29ycyAoMjAwMykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9tYWlsLmFzeW5jLmNhbHRlY2guZWR1XFwvUHVic1xcL1BERlxcLzIwMDNfdGhyZWVnZW4ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTQ2NzMxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkluc2lkZXIgQWNjb3VudHMgb2YgQ29tcHV0aW5nIGFuZCBMaWZlIGF0IEJCTjogQSBzaXh0eS15ZWFyIHJlcG9ydCAoMjAxMSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93YWxkZW4tZmFtaWx5LmNvbVxcL2JiblxcL2Jibi1wcmludDIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MTY2NjgwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk1pbGwgQ1BVIGlzIEltbXVuZSB0byBTcGVjdHJlLCBNZWx0ZG93biBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9taWxsY29tcHV0aW5nLmNvbVxcL2Jsb2dcXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMThcXC8wMVxcL1NwZWN0cmUuMDMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MTUzNTcwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIldoeSBKb2hubnkgRG9lc25cXHUyMDE5dCBVc2UgVHdvIEZhY3RvciBcXHUyMDEzIEEgU3R1ZHkgb2YgdGhlIEZJRE8gVTJGIFNlY3VyaXR5IEtleSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9mYzE4LmlmY2EuYWlcXC9wcmVwcm9jZWVkaW5nc1xcLzExMS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3MzI0NjBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ29udHJhY3RzIGluIE9wZW5CU0QgKDIwMTApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwva2luZHNvZnR3YXJlLmNvbVxcL2RvY3VtZW50c1xcL3JlcG9ydHNcXC9Ub3JsYWtjaWsxMC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc5Mzk3OTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSG91c2Ugb2YgQ29tbW9ucyBjb21taXR0ZWUgcmUtaW52aXRlcyB0byBNYXJrIFp1Y2tlcmJ1cmcgdG8gYXBwZWFyIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5wYXJsaWFtZW50LnVrXFwvZG9jdW1lbnRzXFwvY29tbW9ucy1jb21taXR0ZWVzXFwvY3VsdHVyZS1tZWRpYS1hbmQtc3BvcnRcXC8xODA1MDEtQ2hhaXItdG8tUmViZWNjYS1TdGltc29uLUZhY2Vib29rLXJlLW9yYWwtZXZpZGVuY2UtZm9sbG93LXVwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjk2Njg4MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTY2llbmNlIGFuZCBMaW5ndWlzdGljcyAoMTk0MClcIixcbiAgICAgICAgXCJzY29yZVwiOiAzNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93ZWIubWl0LmVkdVxcL2FsbGFubWNcXC93d3dcXC93aG9yZi5zY2llbmNlYW5kbGluZ3Vpc3RpY3MucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MDcyNzk4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkdyYXkgRmFpbHVyZTogVGhlIEFjaGlsbGVzJyBIZWVsIG9mIENsb3VkLVNjYWxlIFN5c3RlbXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNzLmpodS5lZHVcXC9+aHVhbmdcXC9wYXBlclxcL2dyYXlmYWlsdXJlLWhvdG9zMTcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MjUzNDA1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIktMRUFLOiBQcmFjdGljYWwgS2VybmVsIE1lbW9yeSBEaXNjbG9zdXJlIERldGVjdGlvbiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9uZXRic2Qub3JnXFwvZ2FsbGVyeVxcL3ByZXNlbnRhdGlvbnNcXC9tYXh2XFwva2xlYWsucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NjQ4MDYwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBEZXNpZ24gYW5kIEltcGxlbWVudGF0aW9uIG9mIEh5cGVydXBjYWxscyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cudXNlbml4Lm9yZ1xcL3N5c3RlbVxcL2ZpbGVzXFwvY29uZmVyZW5jZVxcL2F0YzE4XFwvYXRjMTgtYW1pdC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1MTM1MzBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiT24gdGhlIFdvcmsgb2YgRWR3YXJkIFdpdHRlbiAoMTk5MCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9ib2hyLnBoeXNpY3MuYmVya2VsZXkuZWR1XFwvcmVpbnNjaFxcL3BoeXMxMDVzcHIyMDE0XFwvZmlsZXNcXC9XaXR0ZW5fQXRpeWFoLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjQ1MzE2M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgZnVuY3Rpb24gb2YgZHJlYW0gc2xlZXAgKDE5ODMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3Byb2ZpbGVzLm5sbS5uaWguZ292XFwvcHNcXC9hY2Nlc3NcXC9zY2JjZGsucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDA1ODEwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlJlY29sbGVjdGlvbnMgb2YgRWFybHkgQ2hpcCBEZXZlbG9wbWVudCBhdCBJbnRlbCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9sYXJrLnR1LXNvZmlhLmJnXFwvbnR0XFwvZXVza3VcXC9yZWFkaW5nc1xcL2FydF8xLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODYyNDcyMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgdHJhZ2VkeSBvZiB0aGUgY29tbW9ucyBpbiBldm9sdXRpb25hcnkgYmlvbG9neSAoMjAwNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cua29ra29udXRzLm9yZ1xcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvUmFua2luX1RvQy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg1NTc2NTdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSG93IE5ld3MgQWdncmVnYXRvcnMgSGVscCBEZXZlbG9wbWVudCBDb21tdW5pdGllcyBTaGFwZSBhbmQgU2hhcmUgS25vd2xlZGdlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2N0cmV1ZGUuZmlsZXMud29yZHByZXNzLmNvbVxcLzIwMThcXC8wMlxcL2ljc2UxOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcwNTc4NTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVW5pcXVlIElQdjYgcHJlZml4IHBlciBob3N0IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3JpcGU3Ni5yaXBlLm5ldFxcL3ByZXNlbnRhdGlvbnNcXC8xNDMtcmZjODI3My12NS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcwOTExNzZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUGVwcGVyJ3MgQ29uZTogQW4gSW5leHBlbnNpdmUgRG8tSXQtWW91cnNlbGYgM0QgRGlzcGxheSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2dyYWlsLmNzLndhc2hpbmd0b24uZWR1XFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDE3XFwvMTBcXC9sdW8yMDE3cGNhLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjA1MTA3OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJCYVNpWCBcXHUyMDEzIEEgQmFzaWMgaW50ZXJwcmV0ZXIgd3JpdHRlbiBpbiBUZVggKDE5OTApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LnR1Zy5vcmdcXC9UVUdib2F0XFwvdGIxMS0zXFwvdGIyOWdyZWVuZS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1MDk1MTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIE1ldGFwaHlzaWNhbCBUcmFuc3BhcmVuY3kgb2YgVHJ1dGggKDIwMTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy51dm0uZWR1XFwvfmxkZXJvc3NlXFwvdHJhbnNwYXJlbmN5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzU4MTc5OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTdGF0ZWxlc3MgTmV0d29yayBGdW5jdGlvbnMgKDIwMTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy51c2VuaXgub3JnXFwvc3lzdGVtXFwvZmlsZXNcXC9jb25mZXJlbmNlXFwvbnNkaTE3XFwvbnNkaTE3LWthYmxhbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc0NzA3NDhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGlyZWN0IENvbnZlcnNpb24gUmVjZWl2ZXJzOiBTb21lIEFtYXRldXIgUmFkaW8gSGlzdG9yeSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDM0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3c3em9pLm5ldFxcL2Rjcng2OC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0NDk0MDdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiI2lmZGVmIGNvbnNpZGVyZWQgaGFybWZ1bCAoMTk5MikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvdXNlbml4Lm9yZ1xcL2xlZ2FjeVxcL3B1YmxpY2F0aW9uc1xcL2xpYnJhcnlcXC9wcm9jZWVkaW5nc1xcL3NhOTJcXC9zcGVuY2VyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzYyNDAxNFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgRm9yZ2V0ZnVsbmVzcyBvZiBCZWluZ3MgKDE5OTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL21hcml0YWluLm5kLmVkdVxcL2FtYVxcL0NpYXBhbG9cXC9DaWFwYWxvMTQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NDMyNTYwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkRlc2lnbmluZyBleHBlcmltZW50cyBmb3IgdW5kZXJzdGFuZGluZyBwZXJmb3JtYW5jZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC90aW1oYXJyaXMudWtcXC9taXNjXFwvZml2ZS13YXlzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjM0NjEzOFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJWaXN1YWwgb3ZlcnZpZXcgb2YgcmFkaWF0b3IgdmFsdmVzIHVzZWQgaW4gR2VybWFueSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuZXEtMy5kZVxcL0Rvd25sb2Fkc1xcL2VxM1xcL2Rvd25sb2FkJTIwYmVyZWljaFxcL1ZlbnRpbGtvbXBhdGliaWxpdGFldGVuLU1vZGVsLU4ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NTMyNDQ2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNvZGUgSW5mbGF0aW9uICgyMDE1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuY29tcHV0ZXIub3JnXFwvY21zXFwvQ29tcHV0ZXIub3JnXFwvQ29tcHV0aW5nTm93XFwvaXNzdWVzXFwvMjAxNVxcLzA0XFwvbXNvMjAxNTAyMDAxMC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3ODc5MjJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIE5hdHVyYWwgUmF0ZSBvZiBJbnRlcmVzdCBJcyBaZXJvICgyMDA0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5jZmVwcy5vcmdcXC9wdWJzXFwvd3AtcGRmXFwvV1AzNy1Nb3NsZXJGb3JzdGF0ZXIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NDE0MTk5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRpbWluZyBBbmFseXNpcyBvZiBLZXlzdHJva2VzIGFuZCBUaW1pbmcgQXR0YWNrcyBvbiBTU0ggKDIwMDEpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3Blb3BsZS5lZWNzLmJlcmtlbGV5LmVkdVxcL35kYXdcXC9wYXBlcnNcXC9zc2gtdXNlMDEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NTU3OTE2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBIaXN0b3J5IGFuZCBDb25jZXB0IG9mIENvbXB1dGFiaWxpdHkgKDE5OTYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LnBlb3BsZS5jcy51Y2hpY2Fnby5lZHVcXC9+c29hcmVcXC9IaXN0b3J5XFwvaGFuZGJvb2sucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4Mjk4Mzg5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk5JU1Q6IFVzYWJpbGl0eSBhbmQgS2V5IE1hbmFnZW1lbnQgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvY3NyYy5uaXN0LmdvdlxcL0NTUkNcXC9tZWRpYVxcL1ByZXNlbnRhdGlvbnNcXC9Vc2FiaWxpdHktYW5kLUtleS1NYW5hZ2VtZW50XFwvaW1hZ2VzLW1lZGlhXFwvVXNhYmlsaXR5X2FuZF9LZXlfTWdtdC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc4MDg5MTBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQW4gQW5hbHlzaXMgb2YgdGhlIFByb3Rvbk1haWwgQ3J5cHRvZ3JhcGhpYyBBcmNoaXRlY3R1cmUgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZXByaW50LmlhY3Iub3JnXFwvMjAxOFxcLzExMjEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NTAwOTI0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFkdmFuY2VzIGluIE9wZW5CU0QgcGFja2FnZXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lm9wZW5ic2Qub3JnXFwvcGFwZXJzXFwvZXVyb2JzZGNvbl8yMDE4X2h0dHBzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODA1Njc3NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIE1vZGVsIG9mIE1lbnRhbCBGbHVpZGl0eSBhbmQgQW5hbG9neS1NYWtpbmcgKDE5OTQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvcG9ydGFsLnVuaS1mcmVpYnVyZy5kZVxcL2NvZ25pdGlvblxcL2xlaHJlXFwvYXJjaGl2XFwvV1MwOTEwXFwvYW5hbG9naWVtYXRcXC82dGhzaXR0aW5nXFwvVm9ydHJhZ1xcL2NvcHljYXRhbW9kZWxvZm1lbnRhbGZsdWlkaXR5YW5kYW5hbG9neW1ha2luZy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYyOTk4MDRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ29tcGFyaXNvbiBvZiBNZXRhaGV1cmlzdGljcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dzIuY3NjYW1tLnVtZC5lZHVcXC9wdWJsaWNhdGlvbnNcXC9Cb29rQ2hhcHRlcl9DUy0wOS0xMy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0OTEyNzhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUHl0aG9uXFx1MjAxOXMgTWV0YS1PYmplY3QgUHJvdG9jb2wgKDIwMTIpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvbGFzZXIuaW5mLmV0aHouY2hcXC8yMDEyXFwvc2xpZGVzXFwvdmFuUm9zc3VtXFwvbGFzZXItbW9wLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzY2OTYyMVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIEhpc3Rvcnkgb2YgSW5kaXZpZHVhbGx5IFdyYXBwZWQgQ2hlZXNlIFNsaWNlcyAoMTk3OSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3c1Ni5ob21lcGFnZS52aWxsYW5vdmEuZWR1XFwvZGF2aWQubmF3cm9ja2lcXC9Bcm5vbGQlMjBOYXdyb2NraSUyMElXUyUyMFBhcGVyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzYzOTUxNFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJWb2ljZS1tYXRjaGluZyB0ZWNobm9sb2d5IHdhcyBkZXZlbG9wZWQgYnkgTUlUXFwvTGluY29sbiBMYWJzIHVuZGVyIE5TQSBjb250cmFjdCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9hc3NldHMuZG9jdW1lbnRjbG91ZC5vcmdcXC9kb2N1bWVudHNcXC80MzUxOTg3XFwvMjAwNi0wMS0wNC1UZWNobm9sb2d5LVRoYXQtSWRlbnRpZmllcy1QZW9wbGUtYnkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MTk1MDM4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNvZ25pdGl2ZSBOZXR3b3JrczogQnJhaW5zLCBJbnRlcm5ldCwgYW5kIENpdmlsaXphdGlvbnMgKDIwMTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3BkZnMuc2VtYW50aWNzY2hvbGFyLm9yZ1xcLzM0MmRcXC82NzJiYTY1NjEwMmZkNWE5OGRmMmM4ODI3MjNlZjMwMjJlZmUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NDg1MTUxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlNxdWVhazogQSBMYW5ndWFnZSBmb3IgQ29tbXVuaWNhdGluZyB3aXRoIE1pY2UgKDE5ODUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvb3JkaWVjb2xlLmNvbVxcL3NxdWVha1xcL2NhcmRlbGxpX3NxdWVhazE5ODUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3Nzg3NzgxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk5ldXJvbW9ycGhpYyBjb21wdXRpbmcgd2l0aCBtdWx0aS1tZW1yaXN0aXZlIHN5bmFwc2VzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5uYXR1cmUuY29tXFwvYXJ0aWNsZXNcXC9zNDE0NjctMDE4LTA0OTMzLXkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzEyODk2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlJldmlzaXRpbmcgdGhlIFJpc2tzIG9mIEJpdGNvaW4gQ3VycmVuY3kgRXhjaGFuZ2UgQ2xvc3VyZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC90eWxlcm1vb3JlLnV0dWxzYS5lZHVcXC90b2l0MTcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MzM3NzgyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgRGVjYWRlIG9mIExhdHRpY2UgQ3J5cHRvZ3JhcGh5ICgyMDE2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3dlYi5lZWNzLnVtaWNoLmVkdVxcL35jcGVpa2VydFxcL3B1YnNcXC9sYXR0aWNlLXN1cnZleS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3MDExNDhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRmllbGQgR3VpZGUgZm9yIERlc2lnbmluZyBIdW1hbiBJbnRlcmFjdGlvbiB3aXRoIEludGVsbGlnZW50IFN5c3RlbXMgKDE5OTgpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3N0b24uanNjLm5hc2EuZ292XFwvY29sbGVjdGlvbnNcXC90cnNcXC9fdGVjaHJlcFxcL1RNLTE5OTgtMjA4NDcwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODA0OTk0NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDcmFiczogdGhlIGJpdG1hcCB0ZXJyb3IgKDE5ODUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMzAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvbHVjYWNhcmRlbGxpLm5hbWVcXC9QYXBlcnNcXC9DcmFicy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY5Njc1MjlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU3VnYXI6IFNlY3VyZSBHUFUgQWNjZWxlcmF0aW9uIGluIFdlYiBCcm93c2VycyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuaWNzLnVjaS5lZHVcXC9+YXJkYWxhblxcL3BhcGVyc1xcL1lhb19BU1BMT1MxOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc4MDI1NjdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTm90IEFsbCBQYXR0ZXJucywgYnV0IEVub3VnaCAoMjAwOCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNzLnlvcmsuYWMudWtcXC9wbGFzbWFcXC9wdWJsaWNhdGlvbnNcXC9wZGZcXC9NaXRjaGVsbFJ1bmNpbWFuSGFza2VsbDA4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQzMTIyOFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJOb3cgeW91IHNlZSB0aGVtOiBEQVJQQSdzIFN0ZWFsdGggUmV2b2x1dGlvbiAoMjAwOCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmRhcnBhLm1pbFxcL2F0dGFjaG1lbnRzXFwvKDJPMjQpJTIwR2xvYmFsJTIwTmF2JTIwLSUyMEFib3V0JTIwVXMlMjAtJTIwSGlzdG9yeSUyMC0lMjBSZXNvdXJjZXMlMjAtJTIwNTB0aCUyMC0lMjBTdGVhbHRoJTIwKEFwcHJvdmVkKS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY2MTA2NTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUGVyc29uYWwgQ29tcHV0aW5nICgxOTc1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9tcHJvdmUuZGVcXC9kaXBsb21cXC9ndWlcXC9LYXk3NS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwNDQ3ODVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ29tcG9zaW5nIHdpdGggVGFwZSBSZWNvcmRlcnM6IE11c2lxdWUgQ29uY3JcXHUwMGU4dGUgZm9yIEJlZ2lubmVycyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9tb25vc2tvcC5vcmdcXC9pbWFnZXNcXC9iXFwvYjNcXC9Ed3llcl9UZXJlbmNlX0NvbXBvc2luZ193aXRoX1RhcGVfUmVjb3JkZXJzX011c2lxdWVfQ29uY3JldGVfZm9yX0JlZ2lubmVycy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTczMzgwOTJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUXVhbnRpZnlpbmcgdGhlIFBlcmZvcm1hbmNlIG9mIEdhcmJhZ2UgQ29sbGVjdGlvbiAoMjAwNSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAzMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNzLnVtYXNzLmVkdVxcL35lbWVyeVxcL3B1YnNcXC9nY3ZzbWFsbG9jLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODc2MDExMVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDaWNhZGE6IERlcGVuZGFibHkgRmFzdCBNdWx0aS1Db3JlIEluLU1lbW9yeSBUcmFuc2FjdGlvbnMgKDIwMTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2h5ZW9udGFlay5jb21cXC9wYXBlcnNcXC9jaWNhZGEtc2lnbW9kMjAxNy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgxNTc5NzNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ29tbW9uIExpc3AsIFR5cGluZyBhbmQgTWF0aGVtYXRpY3MgKDIwMDEpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy1mb3VyaWVyLnVqZi1ncmVub2JsZS5mclxcL35zZXJnZXJhclxcL1BhcGVyc1xcL0V6Y2FyYXkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3Nzc0NTE2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgU3R1ZHkgb2YgTGludXggRmlsZSBTeXN0ZW0gRXZvbHV0aW9uICgyMDEzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cudXNlbml4Lm9yZ1xcL3N5c3RlbVxcL2ZpbGVzXFwvbG9naW5cXC9hcnRpY2xlc1xcLzAzX2x1XzAxMC0wMTdfZmluYWwucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MDk4MjYxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBXaGF0XFx1MjAxOXMgTmV4dCBJbnRlcm1pdHRlbnQgQ29tcHV0aW5nIEFyY2hpdGVjdHVyZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5lZWNnLnRvcm9udG8uZWR1XFwvfmdhbmVzYTEwXFwvYXNzZXRzXFwvcGRmc1xcL3doYXRzbmV4dC1ocGNhMjAxOS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg3MDA2MTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGVwdGgtZmlyc3Qgc2VhcmNoIGFuZCBsaW5lYXIgZ3JhcGggYWxnb3JpdGhtcyAoMTk3MikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyOCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcmpsaXB0b24uZmlsZXMud29yZHByZXNzLmNvbVxcLzIwMDlcXC8xMFxcL2RmczE5NzEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NTE4NzMyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgVHlwZSBvZiBTaW11bGF0aW9uIFdoaWNoIFNvbWUgRXhwZXJpbWVudGFsIEV2aWRlbmNlIFN1Z2dlc3RzIFdlIERvbid0IExpdmUgSW4gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyOCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcGhpbHBhcGVycy5vcmdcXC9hcmNoaXZlXFwvQUxFQVRPLTYucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzE4ODY0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk5hcG9sZW9uIGFzIE9yZ2FuaXphdGlvbmFsIERlc2lnbmVyICgyMDA5KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5kdGljLm1pbFxcL2R0aWNcXC90clxcL2Z1bGx0ZXh0XFwvdTJcXC9hNTAxNTgwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzQ5ODU3N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJJbmZpbml0ZXNpbWFsIG1hY2hpbmVyeSAoMTk5MykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyOCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcGVvcGxlLmVlY3MuYmVya2VsZXkuZWR1XFwvfnBpc3RlclxcLzI5MEdcXC9QYXBlcnNcXC9GZXlubWFuODMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NjM3MjI2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBjb29sZXN0IHdheSB0byBnZW5lcmF0ZSBiaW5hcnkgc3RyaW5ncyAoMjAxMykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyOCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnJlc2VhcmNoZ2F0ZS5uZXRcXC9wcm9maWxlXFwvQWFyb25fV2lsbGlhbXMxMFxcL3B1YmxpY2F0aW9uXFwvMjU3Mzc2Mjk0X1RoZV9Db29sZXN0X1dheV90b19HZW5lcmF0ZV9CaW5hcnlfU3RyaW5nc1xcL2xpbmtzXFwvNTcyYTEyY2YwOGFlMDU3YjBhMDc4N2Y5XFwvVGhlLUNvb2xlc3QtV2F5LXRvLUdlbmVyYXRlLUJpbmFyeS1TdHJpbmdzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODcxNTA1NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEeW5hbWljIEhhc2ggVGFibGVzICgxOTg4KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5jc2QudW9jLmdyXFwvfmh5NDYwXFwvcGRmXFwvRHluYW1pYyUyMEhhc2glMjBUYWJsZXMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NjA4NjEzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZhdWx0IGF0dGFja3Mgb24gc2VjdXJlIGNoaXBzOiBmcm9tIGdsaXRjaCB0byBmbGFzaCAoMjAxMSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNsLmNhbS5hYy51a1xcL35zcHMzMlxcL0VDUllQVDIwMTFfMS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcxMTMzNjRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBjb21wYXJpc29uIG9mIGFkYXB0aXZlIHJhZGl4IHRyZWVzIGFuZCBoYXNoIHRhYmxlcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9iaWdkYXRhLnVuaS1zYWFybGFuZC5kZVxcL3B1YmxpY2F0aW9uc1xcL0FSQ0QxNS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcxODEzMzRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUGhvbmVtZS0gYW5kIFdvcmQtQmFzZWQgTGVhcm5pbmcgb2YgRW5nbGlzaCBXb3JkcyBQcmVzZW50ZWQgdG8gdGhlIFNraW5cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcmVzZWFyY2guZmIuY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDE4XFwvMDRcXC9hLWNvbXBhcmF0aXZlLXN0dWR5LW9mLXBob25lbWUtYW5kLXdvcmQtYmFzZWQtbGVhcm5pbmctb2YtZW5nbGlzaC13b3Jkcy1wcmVzZW50ZWQtdG8tdGhlLXNraW4ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MjE0OTg2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFuIEFkYXB0aXZlIFBhY2tlZC1NZW1vcnkgQXJyYXkgKDIwMDcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dzMuY3Muc3Rvbnlicm9vay5lZHVcXC9+YmVuZGVyXFwvbmV3cHViXFwvQmVuZGVySHUwNy1UT0RTLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjE5MTE0NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgZVhwcmVzcyBEYXRhIFBhdGg6IEZhc3QgUHJvZ3JhbW1hYmxlIFBhY2tldCBQcm9jZXNzaW5nIGluIHRoZSBPUyBLZXJuZWwgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZ2l0aHViLmNvbVxcL3RvaG9qb1xcL3hkcC1wYXBlclxcL2Jsb2JcXC9tYXN0ZXJcXC94ZHAtdGhlLWV4cHJlc3MtZGF0YS1wYXRoLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODI5MDUxOFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBY2U6IGEgc3ludGF4LWRyaXZlbiBDIHByZXByb2Nlc3NvciAoMTk4OSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvc3d0Y2guY29tXFwvZ29zbGluZzg5YWNlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzIwNjQxNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDb21wdXRhdGlvbiBhdCB0aGUgRWRnZSBvZiBDaGFvcyAoMTk5MCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcGRmcy5zZW1hbnRpY3NjaG9sYXIub3JnXFwvY2I0Y1xcL2RmNzgxMmZjOGFkNTZkMTMzMTdlYWFiYzk5Yjc2NjU5ZTk1Zi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1MTU3OTNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSW50ZXJuZXQgQXJjaGl0ZWN0dXJlIEJvYXJkIG9uIHRoZSBBdXN0cmFsaWFuIEFzc2lzdGFuY2UgYW5kIEFjY2VzcyBCaWxsIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5pYWIub3JnXFwvd3AtY29udGVudFxcL0lBQi11cGxvYWRzXFwvMjAxOFxcLzA5XFwvSUFCLUNvbW1lbnRzLW9uLUF1c3RyYWxpYW4tQXNzaXN0YW5jZS1hbmQtQWNjZXNzLUJpbGwtMjAxOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc5NTg3NzhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFdoeSBvZiBZICgyMDAxKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuZHJlYW1zb25ncy5jb21cXC9GaWxlc1xcL1doeU9mWS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg2Mzc5MzlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGVsdGEgUG9pbnRlcnM6IEJ1ZmZlciBPdmVyZmxvdyBDaGVja3MgV2l0aG91dCB0aGUgQ2hlY2tzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jcy52dS5ubFxcL35oZXJiZXJ0YlxcL2Rvd25sb2FkXFwvcGFwZXJzXFwvZGVsdGEtcG9pbnRlcnNfZXVyb3N5czE4LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjkxNTk1N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIGdlbmVyYWwgbWVtcmlzdG9yLWJhc2VkIHBhcnRpYWwgZGlmZmVyZW50aWFsIGVxdWF0aW9uIHNvbHZlclwiLFxuICAgICAgICBcInNjb3JlXCI6IDI2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dzIuZWNlLnJvY2hlc3Rlci5lZHVcXC9+eGlndW9cXC9nb21hYzE1LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzY2Mjg2NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIEZvcm1hbCBBcG9sb2d5IGZvciBNZXRhcGh5c2ljcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9waGlscGFwZXJzLm9yZ1xcL2FyY2hpdmVcXC9CQVJBRkEtNi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg3MzkzMTFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ29tcGlsaW5nIG1hY2hpbmUgbGVhcm5pbmcgcHJvZ3JhbXMgdmlhIGhpZ2gtbGV2ZWwgdHJhY2luZyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuc3lzbWwuY2NcXC9kb2NcXC8xNDYucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NTAwNzg0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIktudXQgV2lja3NlbGw6IHRoZSBCaXJ0aCBvZiBNb2Rlcm4gTW9uZXRhcnkgUG9saWN5ICgyMDA0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuZGFsbGFzZmVkLm9yZ1xcL35cXC9tZWRpYVxcL2RvY3VtZW50c1xcL3Jlc2VhcmNoXFwvZWlcXC9laTA0MDEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NTQwMTQ5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlZvbGF0aWxpdHkgYW5kIHRoZSBBbGNoZW15IG9mIFJpc2sgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvc3RhdGljMS5zcXVhcmVzcGFjZS5jb21cXC9zdGF0aWNcXC81NTgxZjE3ZWU0YjAxZjU5YzJiMTUxM2FcXC90XFwvNTllYTE2ZjdlNWRkNWIyMzA2M2EzMTU0XFwvMTUwODUxMzUzMzU3N1xcL0FydGVtaXNfVm9sYXRpbGl0eSthbmQrdGhlK0FsY2hlbXkrb2YrUmlza18yMDE3LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjQwOTYwMVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJMZWFrYWdlLVJlc2lsaWVudCBDbGllbnQtU2lkZSBEZWR1cGxpY2F0aW9uIG9mIEVuY3J5cHRlZCBEYXRhIGluIENsb3VkIFN0b3JhZ2UgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZXByaW50LmlhY3Iub3JnXFwvMjAxMVxcLzUzOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc5OTM3OTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRW5naW5lZXJpbmcgYW5kIFNvZnR3YXJlIEVuZ2luZWVyaW5nICgyMDEwKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL21jcy5vcGVuLmFjLnVrXFwvbWo2NjVcXC9Gb1NFWnVyaWNoMjAxMC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcxMjUzODNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRHRocmVhZHM6IEVmZmljaWVudCBEZXRlcm1pbmlzdGljIE11bHRpdGhyZWFkaW5nICgyMDExKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3Blb3BsZS5jcy5rc3UuZWR1XFwvfmRhbmllbHdhbmdcXC9JbnZlc3RpZ2F0aW9uXFwvU3lzdGVtX1NlY3VyaXR5XFwvZHRocmVhZHMtc29zcDExLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzc1Njc3NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIYXJkd2FyZSBNYXNraW5nLCBSZXZpc2l0ZWQgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmVtc2VjLnJ1Yi5kZVxcL21lZGlhXFwvY3J5cHRvXFwvdmVyb2VmZmVudGxpY2h1bmdlblxcLzIwMThcXC8wNFxcLzE2XFwvUEROX01hc2tpbmcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MTU0MjMwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBTdGF0ZSBvZiB0aGUgVGNsUXVhZGNvZGUgY29tcGlsZXIgKDIwMTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy50Y2wudGtcXC9jb21tdW5pdHlcXC90Y2wyMDE3XFwvYXNzZXRzXFwvdGFsazEwMVxcL1BhcGVyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODE3OTk3NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJNdWx0aXBsZSBMaW5lYXIgUmVncmVzc2lvbiAoMjAxMikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9tZXpleWxhYi5jYi5ic2NiLmNvcm5lbGwuZWR1XFwvbGFibWVtYmVyc1xcL2RvY3VtZW50c1xcL3N1cHBsZW1lbnQlMjA1JTIwLSUyMG11bHRpcGxlJTIwcmVncmVzc2lvbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3ODc2MTVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiWERQOiAxLjUgeWVhcnMgaW4gcHJvZHVjdGlvbiBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3ZnZXIua2VybmVsLm9yZ1xcL2xwY19uZXQyMDE4X3RhbGtzXFwvTFBDX1hEUF9TaGlyb2tvdl92Mi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0OTMzMDRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEVhcmx5IEhpc3Rvcnkgb2YgUHJvZ3JhbW1pbmcgTGFuZ3VhZ2VzICgxOTc2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2JpdHNhdmVycy50cmFpbGluZy1lZGdlLmNvbVxcL3BkZlxcL3N0YW5mb3JkXFwvY3NfdGVjaFJlcG9ydHNcXC9TVEFOLUNTLTc2LTU2Ml9FYXJseURldmVsUGdtZ0xhbmdfQXVnNzYucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzM1ODY2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlJhaUJsb2NrczogQSBGZWVsZXNzIERpc3RyaWJ1dGVkIENyeXB0b2N1cnJlbmN5IE5ldHdvcmsgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcmFpYmxvY2tzLm5ldFxcL21lZGlhXFwvUmFpQmxvY2tzX1doaXRlcGFwZXJfX0VuZ2xpc2gucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MDUzMDQ4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhvdyBCYWQgSXMgU2VsZmlzaCBSb3V0aW5nPyAoMjAwMSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC90aGVvcnkuc3RhbmZvcmQuZWR1XFwvfnRpbVxcL3BhcGVyc1xcL3JvdXRpbmcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzQxNjQxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoaW5ncyBXZSBOZWVkIHRvIEtub3cgQWJvdXQgVGVjaG5vbG9naWNhbCBDaGFuZ2UgKDE5OTgpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd2ViLmNzLnVjZGF2aXMuZWR1XFwvfnJvZ2F3YXlcXC9jbGFzc2VzXFwvMTg4XFwvbWF0ZXJpYWxzXFwvcG9zdG1hbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1MjIzMTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRmFzdC1QYXRoIExvb3AgVW5yb2xsaW5nIG9mIE5vbi1Db3VudGVkIExvb3BzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvc3N3LmprdS5hdFxcL0dlbmVyYWxcXC9TdGFmZlxcL0xlb3BvbGRzZWRlclxcL21hbmxhbmcyMDE4LWZhc3RfcGF0aF91bnJvbGxpbmdfYXV0aG9ycHJlcHJpbnQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NjQzODAyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhvdyB0byB1c2UgMTAwMCByZWdpc3RlcnMgKDE5NzkpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvY2FsdGVjaGNvbmYubGlicmFyeS5jYWx0ZWNoLmVkdVxcLzIwMFxcLzFcXC9SaWNoYXJkTFNpdGVzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODA5ODU4OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIU04tMTAwMCBOdWNsZWFyIEV2ZW50IERldGVjdG9yICgyMDA1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDI0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5tYXh3ZWxsLmNvbVxcL2ltYWdlc1xcL2RvY3VtZW50c1xcL2hzbjEwMDBfcmV2My5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg1MzI1MzZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU3BlZWNoIEludGVsbGVnaWJpbGl0eSBpbiBOYXZhbCBBaXJjcmFmdCBSYWRpb3MgKDE5NzIpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmR0aWMubWlsXFwvZHRpY1xcL3RyXFwvZnVsbHRleHRcXC91MlxcLzc0ODIwMi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1MzQ0ODBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUmVhbGl6YWJpbGl0eSBvZiBHcmFwaHMgKDIwMDgpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvZmFjdWx0eS5iYXJkLmVkdVxcL21iZWxrXFwvRGlzY3JldGVNYXRoRGF5VGFsay5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc5NTY1ODlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFVucmVhc29uYWJsZSBFZmZlY3RpdmVuZXNzIG9mIERhdGEgKDIwMDkpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3N0YXRpYy5nb29nbGV1c2VyY29udGVudC5jb21cXC9tZWRpYVxcL3Jlc2VhcmNoLmdvb2dsZS5jb21cXC9lblxcL1xcL3B1YnNcXC9hcmNoaXZlXFwvMzUxNzkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MDk2MTg2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkdvb2QgSWRlYXMsIFRocm91Z2ggdGhlIExvb2tpbmcgR2xhc3MgKDIwMDUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5pbmYuZXRoei5jaFxcL3BlcnNvbmFsXFwvd2lydGhcXC9BcnRpY2xlc1xcL0dvb2RJZGVhc19vcmlnRmlnLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzMzMTE2OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJPbi1DaGlwIEludGVyY29ubmVjdGlvbiBBcmNoaXRlY3R1cmUgb2YgdGhlIFRpbGUgUHJvY2Vzc29yICgyMDA3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cucHJpbmNldG9uLmVkdVxcL353ZW50emxhZlxcL2RvY3VtZW50c1xcL1dlbnR6bGFmZi4yMDA3LklFRUVfTWljcm8uVGlsZXJhLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzc0MTk3MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJNaWxsaW9uIERvbGxhciBQcm9ibGVtcyAoMjAwMCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cubWF0aC5idWZmYWxvLmVkdVxcL35zd3dcXC8wcGFwZXJzXFwvbWlsbGlvbi5idWNrLnByb2JsZW1zLm1pLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODAwNTE4M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJSZWFsIHdvcmxkIEROU1NFQytEQU5FIGZvciBzZWN1cmUgaW50ZXItZG9tYWluIG1haWwgdHJhbnNwb3J0IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3N0YXRpYy5wdGJsLmNvXFwvc3RhdGljXFwvYXR0YWNobWVudHNcXC8xNjkzMTlcXC8xNTIwOTA0NjkyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjYxNzg5M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJGb3VudGFpbiBjb2RlcyAoMjAwNSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZG9jcy5zd2l0emVybmV0LmNvbVxcL3Blb3BsZVxcL2VtaW4tZ2FicmllbHlhblxcLzA2MDExMi1jYXBpbGxhcnktcmVmZXJlbmNlc1xcL3JlZlxcL01hY0theTA1LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODM4NTM4NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIFF1aWNrIFJlZmVyZW5jZSB0byBBaXJmaWVsZCBTdGFuZGFyZHMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmZhYS5nb3ZcXC9haXJwb3J0c1xcL3NvdXRoZXJuXFwvYWlycG9ydF9zYWZldHlcXC9wYXJ0MTM5X2NlcnRcXC9tZWRpYVxcL2Fzby1haXJmaWVsZC1zdGFuZGFyZHMtcXVpY2stcmVmZXJlbmNlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQ5MjkzMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgU0lHQUJBXFwvRUNNIElJIENpcGhlciBNYWNoaW5lOiBcXHUyMDFjQSBCZWF1dGlmdWwgSWRlYVxcdTIwMWQgKDIwMTUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5uc2EuZ292XFwvYWJvdXRcXC9jcnlwdG9sb2dpYy1oZXJpdGFnZVxcL2hpc3RvcmljYWwtZmlndXJlcy1wdWJsaWNhdGlvbnNcXC9wdWJsaWNhdGlvbnNcXC9hc3NldHNcXC9maWxlc1xcL3NpZ2FiYS1lY20taWlcXC9UaGVfU0lHQUJBX0VDTV9DaXBoZXJfTWFjaGluZV9BX0JlYXV0aWZ1bF9JZGVhMy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc1NDk4OTdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRmluYWwgUmVwb3J0IG9uIHRoZSBBdWd1c3QgMTQsIDIwMDMgQmxhY2tvdXQgKDIwMDQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5lbmVyZ3kuZ292XFwvc2l0ZXNcXC9wcm9kXFwvZmlsZXNcXC9vZXByb2RcXC9Eb2N1bWVudHNhbmRNZWRpYVxcL0JsYWNrb3V0RmluYWwtV2ViLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzE2ODMzOFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJOZXVyb2xvZ3kgaW4gQW5jaWVudCBGYWNlcyAoMjAwMSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3Lm5jYmkubmxtLm5paC5nb3ZcXC9wbWNcXC9hcnRpY2xlc1xcL1BNQzE3MzcyODdcXC9wZGZcXC92MDcwcDAwNTI0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjExODM4N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJaaXBmXFx1MjAxOXMgTGF3IGluIFBhc3N3b3JkcyAoMjAxNykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93YW5nZGluZ2cud2VlYmx5LmNvbVxcL3VwbG9hZHNcXC8yXFwvMFxcLzNcXC82XFwvMjAzNjY5ODdcXC9pZWVldGlmczE3X2ZpbmFsLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODA2MjEzMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEb3BwZWxnXFx1MDBlNG5nZXIgRmluZGVyOiBUYWtpbmcgU3R5bG9tZXRyeSB0byB0aGUgVW5kZXJncm91bmQgKDIwMTQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dzEuaWNzaS5iZXJrZWxleS5lZHVcXC9+c2FkaWFcXC9wYXBlcnNcXC9vYWtsYW5kMjAxNC11bmRlcmdyb3VuZC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgzMjgyNzBcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSHlicmlkIEZpZWxkLUVmZmVjdCBUcmFuc2lzdG9ycyBCYXNlZCBvbiBDZWxsdWxvc2UgRmliZXIgUGFwZXIgKDIwMDgpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3J1bi51bmwucHRcXC9iaXRzdHJlYW1cXC8xMDM2MlxcLzMyNDJcXC8xXFwvRm9ydHVuYXRvXzIwMDgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NTIwNzY3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBQb3RlbnRpb21ldGVyIEhhbmRib29rICgxOTc1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuYm91cm5zLmNvbVxcL3BkZnNcXC9PbmxpbmVQb3RlbnRpb21ldGVySGFuZGJvb2sucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MzkxMDc2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlN0cm9uZ2x5IFR5cGVkIEhldGVyb2dlbmVvdXMgQ29sbGVjdGlvbnMgKDIwMDQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvb2ttaWoub3JnXFwvZnRwXFwvSGFza2VsbFxcL0hMaXN0LWV4dC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwMDQ3MDhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSGFja2luZyBjaGVtaWNhbCBwbGFudHMgZm9yIGNvbXBldGl0aW9uIGFuZCBleHRvcnRpb24gKDIwMTUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5ibGFja2hhdC5jb21cXC9kb2NzXFwvdXMtMTVcXC9tYXRlcmlhbHNcXC91cy0xNS1Lcm90b2ZpbC1Sb2NraW5nLVRoZS1Qb2NrZXQtQm9vay1IYWNraW5nLUNoZW1pY2FsLVBsYW50LUZvci1Db21wZXRpdGlvbi1BbmQtRXh0b3J0aW9uLXdwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODY5MjkwMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDb21waWxlZCBhbmQgVmVjdG9yaXplZCBRdWVyaWVzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LnZsZGIub3JnXFwvcHZsZGJcXC92b2wxMVxcL3AyMjA5LWtlcnN0ZW4ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDgxNDc3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBFZmZlY3Qgb2YgWm9uaW5nIG9uIEhvdXNpbmcgUHJpY2VzIFxcdTIwMTMgUmVzZWFyY2ggZnJvbSBBdXN0cmFsaWEncyBSZXNlcnZlIEJhbmsgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnJiYS5nb3YuYXVcXC9wdWJsaWNhdGlvbnNcXC9yZHBcXC8yMDE4XFwvcGRmXFwvcmRwMjAxOC0wMy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY1NzE5OTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGVidWdnaW5nIERpc3RyaWJ1dGVkIFN5c3RlbXMgV2l0aCBXaHktQWNyb3NzLVRpbWUgUHJvdmVuYW5jZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9td2hpdHRha2VyLmdpdGh1Yi5pb1xcL3B1YmxpY2F0aW9uc1xcL3dhdF9TT0NDMTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MTkzOTIxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk1hdGhlbWF0aWNzIGFwcGxpZWQgdG8gZHJlc3NtYWtpbmcgKDE5OTMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5sbXMuYWMudWtcXC9zaXRlc1xcL2xtcy5hYy51a1xcL2ZpbGVzXFwvMTk5NCUyME1hdGhlbWF0aWNzJTIwYXBwbGllZCUyMHRvJTIwZHJlc3NtYWtpbmclMjAlMjhwcmVwcmludCUyOS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgyOTg1ODZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIFBzeWNob2xvZ3kgb2YgU2VjdXJpdHkgKDIwMDgpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5zY2huZWllci5jb21cXC9hY2FkZW1pY1xcL3BhcGVyZmlsZXNcXC9wYXBlci1wc3ljaG9sb2d5LW9mLXNlY3VyaXR5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzk1ODU2MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgUG9zdGdyZXMgUnVsZSBNYW5hZ2VyICgxOTg4KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2RiLmNzLmJlcmtlbGV5LmVkdVxcL3BhcGVyc1xcL3RzZTg4LXJ1bGVtZ3IucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NTgxODgwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkZhaWx1cmUgUmF0ZXMgaW4gSW50cm9kdWN0b3J5IFByb2dyYW1taW5nICgyMDA3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIxLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3VzZXJzLWNzLmF1LmRrXFwvbWljXFwvcHVibGljYXRpb25zXFwvam91cm5hbFxcLzI1LS1idWxsZXRpbjIwMDcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MTg2ODQ3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgU2NhbGFibGUsIENvbW1vZGl0eSBEYXRhIENlbnRlciBOZXR3b3JrIEFyY2hpdGVjdHVyZSAoMjAwOCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9jY3Iuc2lnY29tbS5vcmdcXC9vbmxpbmVcXC9maWxlc1xcL3A2My1hbGZhcmVzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzI5MDM4OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDYWNoZSBNb2RlbGluZyBhbmQgT3B0aW1pemF0aW9uIFVzaW5nIE1pbmlhdHVyZSBTaW11bGF0aW9ucyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cudXNlbml4Lm9yZ1xcL3N5c3RlbVxcL2ZpbGVzXFwvY29uZmVyZW5jZVxcL2F0YzE3XFwvYXRjMTctd2FsZHNwdXJnZXIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MzE4NjI4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIklzIHRoZSBzY2llbnRpZmljIHBhcGVyIGZyYXVkdWxlbnQ/ICgxOTY0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2Jsb2cudGhlZ3JhbmRsb2N1cy5jb21cXC9zdGF0aWNcXC9taXNjXFwvaXNfdGhlX3NjaWVudGlmaWNfcGFwZXJfZnJhdWR1bGVudC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc2MjQ3ODdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRml2ZSBkZWVwIHF1ZXN0aW9ucyBpbiBjb21wdXRpbmcgKDIwMDgpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMjAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmNzLmNtdS5lZHVcXC9+d2luZ1xcL3B1YmxpY2F0aW9uc1xcL1dpbmcwOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3NTU2MDVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGlzY2VybmluZyB0aGUgT3V0LU9mLU9yZGVyIEFkdmFudGFnZTogSXMgSXQgU3BlY3VsYXRpb24gb3IgRHluYW1pc20/ICgyMDEzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3ppbGxlcy5jcy5pbGxpbm9pcy5lZHVcXC9wYXBlcnNcXC9tY2Zhcmxpbl9hc3Bsb3NfMjAxMy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc4ODExMzJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSW50ZW50aW9uYWwgQWNvdXN0aWMgSW50ZXJmZXJlbmNlIERhbWFnZXMgQXZhaWxhYmlsaXR5IGFuZCBJbnRlZ3JpdHkgaW4gSEREcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDIwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9zcHFyLmVlY3MudW1pY2guZWR1XFwvcGFwZXJzXFwvYm9sdG9uLWJsdWUtbm90ZS1JRUVFU1NQLTIwMTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3Mjk1NTk1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbXByZWhlbmRpbmcgUmluZ2FkcyAoMjAxNikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAyMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuY3Mub3guYWMudWtcXC9qZXJlbXkuZ2liYm9uc1xcL3B1YmxpY2F0aW9uc1xcL3JpbmdhZHMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MDAxNDc4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkEgQ29tcHV0ZXIgU2NpZW50aXN0XFx1MjAxOXMgR3VpZGUgdG8gQ2VsbCBCaW9sb2d5IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmNzLmNtdS5lZHVcXC9+d2NvaGVuXFwvR3VpZGVUb0Jpb2xvZ3ktc2FtcGxlQ2hhcHRlci1yZWxlYXNlMS40LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODc3ODQ5OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJMdW5hciBMYXNlciBSYW5naW5nOiBhIGNvbnRpbnVpbmcgbGVnYWN5IG9mIHRoZSBBcG9sbG8gcHJvZ3JhbSAoMTk5NCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmhxLm5hc2EuZ292XFwvYWxzalxcL0xSUlItOTQtMDE5My5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3ODA1MzJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVW5kZXJzdGFuZGluZyBSZWR1Y2VkLVZvbHRhZ2UgT3BlcmF0aW9uIGluIE1vZGVybiBEUkFNIERldmljZXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cucGRsLmNtdS5lZHVcXC9QREwtRlRQXFwvTlZNXFwvMTdzaWdtZXRyaWNzX3ZvbHRyb24ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MzA3MTExXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkJldHRlciBkb2N1bWVudGF0aW9uIFxcdTIwMTMgb24gdGhlIHdlYiBhbmQgZm9yIExpYnJlU1NMIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5vcGVuYnNkLm9yZ1xcL3BhcGVyc1xcL2V1cm9ic2Rjb24yMDE4LW1hbmRvYy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgxMTAwMzNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiT3Blbi1Tb3VyY2UgQml0c3RyZWFtIEdlbmVyYXRpb24gKDIwMTMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5pc2kuZWR1XFwvc2l0ZXNcXC9kZWZhdWx0XFwvZmlsZXNcXC91c2Vyc1xcL25zdGVpbmVyXFwvc29uaS0yMDEzLWJpdHN0cmVhbS1mY2NtMTMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDg4MDIwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNoZXJyeS1QaWNraW5nIGFuZCB0aGUgU2NpZW50aWZpYyBNZXRob2QgKDIwMTMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmNzLmNvZmMuZWR1XFwvfmJvd3JpbmdcXC9jbGFzc2VzXFwvY3NjaSUyMDM2MlxcL2RvY3NcXC9wMzItbmV2aWxsZS1uZWlsLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQ5MjI2MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDb25zdHJ1Y3Rpb24gb2YgdGhlIFRyYW5zcmVhbCBOdW1iZXJzIGFuZCBBbGdlYnJhaWMgVHJhbnNmaWVsZHMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxOCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuaWFlbmcub3JnXFwvSUpBTVxcL2lzc3Vlc192NDZcXC9pc3N1ZV8xXFwvSUpBTV80Nl8xXzAzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjczMDQ1N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDcnlwa28gV2hpdGUgUGFwZXI6IENyeXB0b2NvbGxlY3RpYmxlIEdhbWUgRW1wb3dlcmVkIGJ5IEdBTnMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxOCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvY3J5cGtvLmFpXFwvc3RhdGljXFwvZmlsZXNcXC9jcnlwa28td2hpdGVwYXBlci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY5OTAzNDdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVHdvIGN1cmlvdXMgaW50ZWdyYWxzIGFuZCBhIGdyYXBoaWMgcHJvb2YgKDIwMTQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvc2NobWlkLXdlcnJlbi5jaFxcL2hhbnNwZXRlclxcL3B1YmxpY2F0aW9uc1xcLzIwMTRlbGVtYXRoLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzg4MzM0OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJYb29kb28gY29va2Jvb2sgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxOCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvZXByaW50LmlhY3Iub3JnXFwvMjAxOFxcLzc2Ny5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc4NDQ1NDJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ2FzdFNhbjogZWZmaWNpZW50IGRldGVjdGlvbiBvZiBiYWQgQysrIGNhc3RzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5kb2Nkcm9pZC5uZXRcXC9JTldZQkY3XFwvY2FzdHNhbi1lc29yaWNzMTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzgzMzE3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkJlYXN0bHkgTnVtYmVycyAoMTk5NikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcGVvcGxlLmVlY3MuYmVya2VsZXkuZWR1XFwvfndrYWhhblxcL3Rlc3RzXFwvbnVtYmVhc3QucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MDA2MDQxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkp1bGlhIGZvciBSIHByb2dyYW1tZXJzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5zdGF0Lndpc2MuZWR1XFwvfmJhdGVzXFwvSnVsaWFGb3JSUHJvZ3JhbW1lcnMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzIzOTc3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBjYXNlIGZvciB3cml0aW5nIHBhcGVycyBpbiBlY29ub21pY3MgdXNpbmcgZmFLZSBMYVRlWCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5mYXJtZG9jLmlsbGlub2lzLmVkdVxcL2lyd2luXFwvcmVzZWFyY2hcXC9UaGVfQ2FzZV9mb3JfRmFrZV9MYVRlWF9Cb2R5X0ZlYiUyMDIwMTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NTkyNDAxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkhpc3Rvcnkgb2YgQ29tYmluYXRvcmlhbCBHZW5lcmF0aW9uICgyMDA0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5hbnRpcXVhcmsuY29tXFwvYmxvZ2ltZ1xcL2Zhc2M0Yi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYzOTUyMjJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU2NyYXBpbm8gXFx1MjAxMyBTZWxmLXN1c3RhaW5hYmxlIHJvYm90IGZyb20gZS1zY3JhcCB1c2luZyByZW5ld2FibGUgZW5lcmd5IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5zY2llbmNlZGlyZWN0LmNvbVxcL3NjaWVuY2VcXC9hcnRpY2xlXFwvcGlpXFwvUzI0MDU4OTYzMTgzMjg1OTNcXC9wZGY/bWQ1PWFjN2ZhZTE3NDcxMGRhMGE1MDM1MDI2Zjg4ZTA1NTliJnBpZD0xLXMyLjAtUzI0MDU4OTYzMTgzMjg1OTMtbWFpbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg2ODc5MjNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQXR0YWNrIERpcmVjdG9yaWVzLCBOb3QgQ2FjaGVzOiBTaWRlLUNoYW5uZWwgQXR0YWNrcyBpbiBhIE5vbi1JbmNsdXNpdmUgV29ybGQgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9pYWNvbWEuY3MudWl1Yy5lZHVcXC9pYWNvbWEtcGFwZXJzXFwvc3NwMTkucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDA3ODUwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBUcmFuc2x1Y2VudCBGaWxlIFNlcnZpY2UgKDE5ODgpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvbWN2b3kuY29tXFwvbG1cXC9wYXBlcnNcXC9TdW5PUy50ZnMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzQzOTMzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNyaW1pbmFsIExhdyAyLjAgKDIwMTUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2dlb3JnZXRvd25sYXdqb3VybmFsLm9yZ1xcL2Fzc2V0c1xcL2tvemluc2tpLWFyY3AtcHJlZmFjZS05YTk5MGYwOGYzZjAwNjU1OGVhYTAzY2NjNDQwZDMwNzhmNTg5OWIzNDI2ZWM0N2FhZWRiODljNjA2Y2FlYWU3LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjYxNjcyMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJNYXAgUHJvamVjdGlvbnMgXFx1MjAxMyBBIFdvcmtpbmcgTWFudWFsICgxOTg3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9wdWJzLnVzZ3MuZ292XFwvcHBcXC8xMzk1XFwvcmVwb3J0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODA5OTAyOVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJWcmFua2VuRnV6eiBcXHUyMDEzIGEgbXVsdGktc2Vuc29yLCBtdWx0aS1nZW5lcmF0b3IgbXV0YXRpb25hbCBmdXp6IHRlc3RpbmcgZW5naW5lIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2d1aWRvdnJhbmtlbi5maWxlcy53b3JkcHJlc3MuY29tXFwvMjAxOFxcLzA3XFwvdnJhbmtlbmZ1enoucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NDY4Mzc3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNhbiBtb29ucyBoYXZlIG1vb25zPyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9hcnhpdi5vcmdcXC9wZGZcXC8xODEwLjAzMzA0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODIxNzY0NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJNYWNoaW5lIExlYXJuaW5nIG9uIDJLQiBvZiBSQU0gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9tYW5pa3Zhcm1hLm9yZ1xcL3B1YnNcXC9rdW1hcjE3LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODIzMTIzOVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJRdWF0ZXJuaW9ucyBhbmQgUmVmbGVjdGlvbnMgKDE5NDYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3Lm1hdGgudXRhaC5lZHVcXC9+cHRyYXBhXFwvbWF0aC1saWJyYXJ5XFwvY294ZXRlclxcL0NveGV0ZXItUXVhdGVybmlvbnMtYW5kLXJlZmxlY3Rpb25zLUFNTS0xOTQ2LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODUyNTgwMVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQaHlzaWNhbCBBZGRyZXNzaW5nIG9uIFJlYWwgSGFyZHdhcmUgaW4gSXNhYmVsbGVcXC9IT0wgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcGVvcGxlLmluZi5ldGh6LmNoXFwvdHJvc2NvZVxcL3B1YnNcXC9hY2hlcm1hbm5faXRwXzIwMTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MzczODk2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlByb2R1Y3QgRXZhbHVhdGlvbiBvZiB0aGUgWmlsb2cgWjgwLUNUQyAoMTk3OSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9zbWl0aHNvbmlhbmNoaXBzLnNpLmVkdVxcL2ljZVxcL09DUl9TY2FuUEUxMjVcXC9QRTEyNSgxMDM3OS1LKS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3MzkyMTRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBTdXJ2ZXkgb2YgUm9sbGJhY2stUmVjb3ZlcnkgUHJvdG9jb2xzIGluIE1lc3NhZ2UtUGFzc2luZyBTeXN0ZW1zICgyMDAyKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuY3MudXRleGFzLmVkdVxcL35sb3JlbnpvXFwvcGFwZXJzXFwvU3VydmV5RmluYWwucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2ODg2MTY1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkV4YW1pbmluZyBDaGlsZHJlblxcdTIwMTlzIE9ubGluZSBQcml2YWN5IFByb3RlY3Rpb24gQWN0IGNvbXBsaWFuY2UgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvcGV0c3ltcG9zaXVtLm9yZ1xcLzIwMThcXC9maWxlc1xcL3BhcGVyc1xcL2lzc3VlM1xcL3BvcGV0cy0yMDE4LTAwMjEucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2ODQ4MTQ4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBDb21wbGV4aXR5IG9mIFNvbmdzICgxOTc3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2ZpdmVkb3RzLmNvZS5wc3UuYWMudGhcXC9Tb2Z0d2FyZS5jb2VcXC8yNDItNTM1X0FEQVxcL0JhY2tncm91bmRcXC9SZWFkaW5nc1xcL2tudXRoX3NvbmdfY29tcGxleGl0eS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwNDQ2MDNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGlmZmVyZW50aWFibGUgUHJvZ3JhbW1pbmcgZm9yIEltYWdlIFByb2Nlc3NpbmcgYW5kIERlZXAgTGVhcm5pbmcgaW4gSGFsaWRlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3Blb3BsZS5jc2FpbC5taXQuZWR1XFwvdHp1bWFvXFwvZ3JhZGllbnRfaGFsaWRlXFwvZ3JhZGllbnRfaGFsaWRlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzkyOTE0NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgRGViYXNlbWVudCBQdXp6bGU6IGFuIEVzc2F5IG9uIE1lZGlldmFsIE1vbmV0YXJ5IEhpc3RvcnkgKDE5OTcpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5taW5uZWFwb2xpc2ZlZC5vcmdcXC9yZXNlYXJjaFxcL3FyXFwvcXIyMTQyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODY5MjE3MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBbiBJUHY2IFVwZGF0ZSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDE0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9jb25mZXJlbmNlLmFwbmljLm5ldFxcLzQ2XFwvYXNzZXRzXFwvZmlsZXNcXC9BUE5DNDAyXFwvQW4tSVB2Ni1VcGRhdGUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3OTU3NTMxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlJldmlzaXRpbmcgYSBTdW1tZXIgVmFjYXRpb246IERpZ2l0YWwgUmVzdG9yYXRpb24gYW5kIFR5cGVzZXR0ZXIgRm9yZW5zaWNzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmVwcmcub3JnXFwvcGFwZXJzXFwvMjAycGFwZXIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2MDUxNTIwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkMgU3RhbmRhcmQgVW5kZWZpbmVkIEJlaGF2aW9yIHZzLiBXaXR0Z2Vuc3RlaW4gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxNCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cueW9kYWlrZW4uY29tXFwvd3AtY29udGVudFxcL3VwbG9hZHNcXC8yMDE4XFwvMDVcXC91Yi0xLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzE5NTcxMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJOWSBBdHRvcm5leSBHZW5lcmFsIFJlcG9ydCBvbiBDcnl0cG9jdXJyZW5jeSBNYXJrZXQgSW50ZWdyaXR5XCIsXG4gICAgICAgIFwic2NvcmVcIjogMTMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2FnLm55LmdvdlxcL3NpdGVzXFwvZGVmYXVsdFxcL2ZpbGVzXFwvdm1paV9yZXBvcnQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDE3OTIyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkV2b2x1dGlvbiBvZiBNdWx0aWNlbGx1bGFyIENvbXB1dGluZzogUGFyYWxsZWxzIHdpdGggTXVsdGljZWxsdWxhciBMaWZlICgyMDA5KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5ldm9sdXRpb25vZmNvbXB1dGluZy5vcmdcXC9CaXJtaW5naGFtMDlTZW1pbmFyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODY1NDk4OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJFbnRlcnByaXNlIE9iamVjdHMgRnJhbWV3b3JrIERldmVsb3BlclxcdTIwMTlzIEd1aWRlIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2RldmVsb3Blci5hcHBsZS5jb21cXC9saWJyYXJ5XFwvYXJjaGl2ZVxcL2RvY3VtZW50YXRpb25cXC9MZWdhY3lUZWNobm9sb2dpZXNcXC9XZWJPYmplY3RzXFwvV2ViT2JqZWN0c180LjBcXC9TeXN0ZW1cXC9Eb2N1bWVudGF0aW9uXFwvRGV2ZWxvcGVyXFwvRW50ZXJwcmlzZU9iamVjdHNcXC9HdWlkZVxcL0VPRkRldkd1aWRlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzU5MTU1NFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJVU1BUTyBpc3N1ZXMgMTAgbWlsbGlvbnRoIHBhdGVudCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC8xMG1pbGxpb25wYXRlbnRzLnVzcHRvLmdvdlxcL2RvY3NcXC9wYXRlbnQxMG1pbGxpb24ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MzQ5OTM5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBLZXlob2xlIFByb2JsZW0gKDIwMDIpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmFyaXN0ZWlhLmNvbVxcL1RLUFxcL2RyYWZ0UGFwZXIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MjkzMjYzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFiZWwncyBUaGVvcmVtIGluIFByb2JsZW1zIGFuZCBTb2x1dGlvbnMgKDIwMDQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3Lm1hdGhzLmVkLmFjLnVrXFwvfnYxcmFuaWNrXFwvcGFwZXJzXFwvYWJlbC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcyMDk2MzVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiRGVzaWduIG9mIHRoZSBCdXJyb3VnaHMgQjE3MDAgKDE5NzIpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3BkZnMuc2VtYW50aWNzY2hvbGFyLm9yZ1xcL2NmZjZcXC82YjJlYmEyMGE3MTcyYzVkYjI4MWU4NDYwMDA0OWUxZTgyZmUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MTE0NDgyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBEaWZmaWN1bHR5IG9mIEZha2luZyBEYXRhICgxOTk5KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEzLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5ra3VuaXl1ay5jb21cXC9NYXRoMTE5RmFraW5nRGF0YS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcwMjAyMjZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBCcmllZiBIaXN0b3J5IG9mIEp1c3QtSW4tVGltZSAoMjAwMykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9lZWNzLnVjZi5lZHVcXC9+ZGNtXFwvVGVhY2hpbmdcXC9DT1Q0ODEwLVNwcmluZzIwMTFcXC9MaXRlcmF0dXJlXFwvSnVzdEluVGltZUNvbXBpbGF0aW9uLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODY5MzUwMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgQ3VsdCBvZiB0aGUgQm91bmQgVmFyaWFibGU6IElDRlAgUHJvZ3JhbW1pbmcgQ29udGVzdCAoMjAwNikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9ib3VuZHZhcmlhYmxlLm9yZ1xcL3ByZXNzXFwvdHItMDYtMTYzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODcwODM2NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUaGUgQ2l2aWMgTGFib3Igb2YgT25saW5lIE1vZGVyYXRvcnMgKDIwMTYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvYmxvZ3Mub2lpLm94LmFjLnVrXFwvaXBwLWNvbmZlcmVuY2VcXC9zaXRlc1xcL2lwcFxcL2ZpbGVzXFwvZG9jdW1lbnRzXFwvSk5NLVRoZV9DaXZpY19MYWJvcl9vZl9PbmxpbmVfTW9kZXJhdG9yc19fSW50ZXJuZXRfUG9saXRpY3NfUG9saWN5Xy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg1MDY3NDZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGVjaG5pY2FsIFNwZWNpZmljYXRpb24gZm9yIHRoZSBEZWxpdmVyeSBvZiBUZWxldmlzaW9uIFByb2dyYW1zIHRvIHRoZSBCQkMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9kcHAtYXNzZXRzLnMzLmFtYXpvbmF3cy5jb21cXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcL3NwZWNzXFwvYmJjXFwvVGVjaG5pY2FsRGVsaXZlcnlTdGFuZGFyZHNCQkNGaWxlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODIwNDA5OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJUcmlidXRlIHRvIFZsYWRpbWlyIEFybm9sZCAoMjAxMikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cuYW1zLm9yZ1xcL25vdGljZXNcXC8yMDEyMDNcXC9ydHgxMjAzMDAzNzhwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjMzMDkyNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJGYWxjb24gSGVhdnkgRGVtb25zdHJhdGlvbiBNaXNzaW9uIChvdmVydmlldyBhbmQgdGltZWxpbmUpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LnNwYWNleC5jb21cXC9zaXRlc1xcL3NwYWNleFxcL2ZpbGVzXFwvZmFsY29uaGVhdnlwcmVzc2tpdF92MS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYzMTczMDRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIG1pc3NpbmcgbGluazogZXhwbGFpbmluZyBFTEYgc3RhdGljIGxpbmtpbmcsIHNlbWFudGljYWxseSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2RvbWluaWMtbXVsbGlnYW4uY28udWtcXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMTFcXC8wOFxcL29vcHNsYS1lbGYtbGlua2luZy0yMDE2LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODcxMzIzMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJSZXNwb25zZSB0aW1lIGluIG1hbi1jb21wdXRlciBjb252ZXJzYXRpb25hbCB0cmFuc2FjdGlvbnMgKDE5NjgpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5jb21wdXRlci5vcmdcXC9jc2RsXFwvcHJvY2VlZGluZ3NcXC9hZmlwc1xcLzE5NjhcXC81MDcyXFwvMDBcXC81MDcyMDI2Ny5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY4MDk4NDZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUmlnb3JvdXMgQmVuY2htYXJraW5nIGluIFJlYXNvbmFibGUgVGltZSAoMjAxMykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwva2FyLmtlbnQuYWMudWtcXC8zMzYxMVxcLzdcXC9wYXBlci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY4NDM4MDhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVHhGUzogTGV2ZXJhZ2luZyBGaWxlLVN5c3RlbSBDcmFzaCBDb25zaXN0ZW5jeSB0byBQcm92aWRlIFRyYW5zYWN0aW9ucyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEyLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5jcy51dGV4YXMuZWR1XFwvJTdFdmlqYXlcXC9wYXBlcnNcXC9hdGMxOC10eGZzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzgwNzI3MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJOZXR3b3JraW5nIE5hbWVkIENvbnRlbnQgKDIwMDkpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2NvbmZlcmVuY2VzLnNpZ2NvbW0ub3JnXFwvY28tbmV4dFxcLzIwMDlcXC9wYXBlcnNcXC9KYWNvYnNvbi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc5MzM1NDNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIGdyYW5kIGNoYWxsZW5nZXMgb2YgXFx1MjAxY1NjaWVuY2UgUm9ib3RpY3NcXHUyMDFkIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3Lm5hbm9zY2llbmNlLmdhdGVjaC5lZHVcXC9wYXBlclxcLzIwMThcXC8xOF9TUl8wMS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcxNjE2NDJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiV2hhdCBpcyB0aGUgTW9uc3Rlcj8gKDIwMDIpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmFtcy5vcmdcXC9ub3RpY2VzXFwvMjAwMjA5XFwvd2hhdC1pcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg0ODM5MjlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIE9uLUxpbmUgRW5jeWNsb3BlZGlhIG9mIEludGVnZXIgU2VxdWVuY2VzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5hbXMub3JnXFwvam91cm5hbHNcXC9ub3RpY2VzXFwvMjAxODA5XFwvcm5vdGktcDEwNjIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDE1NDkzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBNb3N0IEluZmx1ZW50aWFsIFBhcGVyIEdlcmFyZCBTYWx0b24gTmV2ZXIgV3JvdGUgKDIwMDQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5pZGVhbHMuaWxsaW5vaXMuZWR1XFwvYml0c3RyZWFtXFwvaGFuZGxlXFwvMjE0MlxcLzE2OTdcXC9EdWJpbjc0ODc2NC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgyMDE1OTdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQXBwbHlpbmcgYXVjdGlvbiBtZWNoYW5pc21zIHRvIG1lZXRpbmcgc2NoZWR1bGluZyAoMjAxMCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnNlYXMuaGFydmFyZC5lZHVcXC9zaXRlc1xcL2RlZmF1bHRcXC9maWxlc1xcL2ZpbGVzXFwvYXJjaGl2ZWRcXC9YdS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTczOTAxMDVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQW4gSW50cm9kdWN0aW9uIHRvIEluZm9ybWF0aW9uIFNlY3VyaXR5IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTEsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL252bHB1YnMubmlzdC5nb3ZcXC9uaXN0cHVic1xcL1NwZWNpYWxQdWJsaWNhdGlvbnNcXC9OSVNULlNQLjgwMC0xMnIxLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjQ1ODU3N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJDYXRlZ29yaWZ5aW5nIGNhcmRpbmFsIGFyaXRobWV0aWMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93d3cubWF0aC5qaHUuZWR1XFwvfmVyaWVobFxcL2FyaXRobWV0aWMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzAyMjI4XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIipBTlkqIEFuZHJvaWQgbWFudWZhY3R1cmVyIG1vbml0b3JzIHVzZXJzIHdpdGhvdXQgY29uc2VudCBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDExLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2VwcmludHMubmV0d29ya3MuaW1kZWEub3JnXFwvMTc0NFxcLzFcXC90cmFja2Vycy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg2MzUwNjJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTGVnYWwgQ3VyaW9zaXRpZXM6IEZhY3Qgb3IgRmFibGU/ICgyMDE1KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5sYXdjb20uZ292LnVrXFwvYXBwXFwvdXBsb2Fkc1xcLzIwMTVcXC8wM1xcL0xlZ2FsX09kZGl0aWVzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODY1NDQzOFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJIb3cgV2UgQ3JhY2tlZCB0aGUgQ29kZSBCb29rIENpcGhlcnMgKDIwMDApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvY29kZWJvb2sub3JnXFwvY29kZWJvb2tfc29sdXRpb24ucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NjkyNDc3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkFsZnJlZCBTdGllZ2xpdHoncyBMYW50ZXJuIFNsaWRlczogSGlzdG9yeSwgVGVjaG5pcXVlIGFuZCBBbmFseXNpcyAoMjAxNSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiAxMCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnJlc2VhcmNoZ2F0ZS5uZXRcXC9wcm9maWxlXFwvUm9zaW5hX0hlcnJlcmFfR2Fycmlkb1xcL3B1YmxpY2F0aW9uXFwvMjY2MjUxMzk2X0FsZnJlZF9TdGllZ2xpdHolMjdzX0xhbnRlcm5fU2xpZGVzX0hpc3RvcnlfVGVjaG5pcXVlX2FuZF9UZWNobmljYWxfQW5hbHlzaXNcXC9saW5rc1xcLzU0ZjgxZjI5MGNmMmNjZmZlOWRjZDM0OVxcL0FsZnJlZC1TdGllZ2xpdHpzLUxhbnRlcm4tU2xpZGVzLUhpc3RvcnktVGVjaG5pcXVlLWFuZC1UZWNobmljYWwtQW5hbHlzaXMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3OTA1ODI5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlJlbWVtYmVyIHRoZSBWYXNhIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvb3Blbi1zdGQub3JnXFwvSlRDMVxcL1NDMjJcXC9XRzIxXFwvZG9jc1xcL3BhcGVyc1xcLzIwMThcXC9wMDk3N3IwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzE3MjA1N1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEZXNpZ24gYW5kIEV2YWx1YXRpb24gb2YgYSBDb250aW51b3VzIENvbnNpc3RlbmN5IE1vZGVsIGZvciBSZXBsaWNhdGVkIFNlcnZpY2VzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy51c2VuaXgub3JnXFwvbGVnYWN5XFwvZXZlbnRcXC9vc2RpMDBcXC9mdWxsX3BhcGVyc1xcL3l1dmFoZGF0XFwveXV2YWhkYXQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2ODMxODI1XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRhbWluZyBQZXJmb3JtYW5jZSBWYXJpYWJpbGl0eSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cudXNlbml4Lm9yZ1xcL3N5c3RlbVxcL2ZpbGVzXFwvb3NkaTE4LW1hcmljcS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgxNjkzODVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiR0xMIFBhcnNpbmcgd2l0aCBGbGV4aWJsZSBDb21iaW5hdG9ycyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9wdXJlLnJveWFsaG9sbG93YXkuYWMudWtcXC9wb3J0YWxcXC9maWxlc1xcLzMxMTY5NTY1XFwvcGFwZXIucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4Mzk5ODk5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlJlcHJlc2VudGluZyBDb250cm9sIGluIHRoZSBQcmVzZW5jZSBvZiBPbmUtU2hvdCBDb250aW51YXRpb25zICgxOTk2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDEwLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuY3MuaW5kaWFuYS5lZHVcXC9+ZHliXFwvcHVic1xcL2NhbGwxY2MucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2OTYwNzQwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkdyYW5kIFB3bmluZyBVbml0OiBBY2NlbGVyYXRpbmcgTWljcm9hcmNoaXRlY3R1cmFsIEF0dGFja3Mgd2l0aCB0aGUgR1BVIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy52dXNlYy5uZXRcXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMThcXC8wNVxcL2dsaXRjaC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY5ODQ4NjhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUHJpdmFjeSBieSBEZXNpZ24gKDIwMTApIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogMTAsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2xpbmsuc3ByaW5nZXIuY29tXFwvY29udGVudFxcL3BkZlxcLzEwLjEwMDclMkZzMTIzOTQtMDEwLTAwNTUteC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYyNjI4MjRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU3RhdHVzIG9mIGNvbGxlY3RpdmVseSBiYXJnYWluZWQgYmVuZWZpdHMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5taWxsaW1hbi5jb21cXC91cGxvYWRlZEZpbGVzXFwvaW5zaWdodFxcLzIwMThcXC9zdGF0dXMtY29sbGVjdGl2ZWx5LWJhcmdhaW5lZC1iZW5lZml0cy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3NDEyNDlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIGVycm9ycywgaW5zaWdodHMgYW5kIGxlc3NvbnMgb2YgZmFtb3VzIEFJIHByZWRpY3Rpb25zICgyMDE0KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDksXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmZoaS5veC5hYy51a1xcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvRkFJQy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc5NTM1ODdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUG9saXRpY3MgaW4gdGhlIEZhY2Vib29rIEVyYTogRXZpZGVuY2UgZnJvbSB0aGUgMjAxNiBVUyBQcmVzaWRlbnRpYWwgRWxlY3Rpb25zIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd2Fyd2ljay5hYy51a1xcL2ZhY1xcL3NvY1xcL2Vjb25vbWljc1xcL3Jlc2VhcmNoXFwvY2VudHJlc1xcL2NhZ2VcXC9tYW5hZ2VcXC9wdWJsaWNhdGlvbnNcXC8zODktMjAxOF9yZWRvYW5vLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQ3MjE4OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJBIE1pbmltYWwgWlpTdHJ1Y3R1cmUgTmF2aWdhdG9yIFVzaW5nIGEgWmlnWmFnLVN0eWxlIEludGVyZmFjZSAoMjAxMykgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA5LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5sb3JkLWVua2kubmV0XFwvWmlnWmFnUHJvamVjdC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc3MDgxMTFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUmV3cml0ZSBDb21iaW5hdG9ycyBpbiBIYXNrZWxsIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9kZXYuc3RlcGhlbmRpZWhsLmNvbVxcL3Jld3JpdGUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDg1MzUzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk1hdGEgSGFyaSB3aXRoIGEgQ2xvY2t3b3JrIEV5ZSwgQWxsaWdhdG9ycyBpbiB0aGUgU2V3ZXIgKDE5NjMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9ncmFwaGljczgubnl0aW1lcy5jb21cXC9wYWNrYWdlc1xcL3BkZlxcL2Jvb2tzXFwvUHluY2hvbl9WLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjc4MjM2MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJGYWNpbGl0YXRpb24gVG9vbHMgZm9yIE1lZXRpbmdzIGFuZCBXb3Jrc2hvcHMgKDIwMTMpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvc2VlZHNmb3JjaGFuZ2Uub3JnLnVrXFwvdG9vbHMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MTQ2OTA2XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSByZWdyZXNzIGFyZ3VtZW50IGFnYWluc3QgQ2FydGVzaWFuIHNrZXB0aWNpc20gKDIwMTIpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9pbmRpdmlkdWFsLnV0b3JvbnRvLmNhXFwvam13aWxzb25cXC9XaWxzb24tVGhlLVJlZ3Jlc3MtQXJndW1lbnQtQWdhaW5zdC1DYXJ0ZXNpYW4tU2tlcHRpY2lzbS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc5OTIxMDJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiUmVzb3VyY2UgbWFuYWdlbWVudDogTGludXgga2VybmVsIE5hbWVzcGFjZXMgYW5kICBjZ3JvdXBzICgyMDEzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDgsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmhhaWZ1eC5vcmdcXC9sZWN0dXJlc1xcLzI5OVxcL25ldExlYzcucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NzY4OTkyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNvdW50ZXIgQ3VsdHVyZTogVG93YXJkcyBhIEhpc3Rvcnkgb2YgR3JlZWsgTnVtZXJhY3kgKDIwMDIpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC93b3JyeWRyZWFtLmNvbVxcL3JlZnNcXC9OZXR6JTIwLSUyMENvdW50ZXIlMjBDdWx0dXJlJTIwLSUyMFRvd2FyZHMlMjBhJTIwSGlzdG9yeSUyMG9mJTIwR3JlZWslMjBOdW1lcmFjeS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg1NTQ2OTVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQ29sbGFwc2luZyBhIFJlZmxlY3RpdmUgVG93ZXIgKDIwMTYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9sYW1wd3d3LmVwZmwuY2hcXC9+YW1pblxcL2RvY1xcL2xtcy1ibGFjay5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTg3NTEwODRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQUkgYW5kIEludGVybmF0aW9uYWwgVHJhZGUgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA4LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5uYmVyLm9yZ1xcL3BhcGVyc1xcL3cyNDI1NC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYzMTY2MzVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTWFraW5nIFxcdTIwMWNQdXNoIG9uIEdyZWVuXFx1MjAxZCBhIFJlYWxpdHkgKDIwMTQpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnVzZW5peC5vcmdcXC9zeXN0ZW1cXC9maWxlc1xcL2xvZ2luXFwvYXJ0aWNsZXNcXC9sb2dpbl8xNDEwXzA1X2tsZWluLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjk1NjUwNVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJMYW5kIFN1cnZleWluZyBpbiBBbmNpZW50IEVneXB0IFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogOCxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmZpZy5uZXRcXC9yZXNvdXJjZXNcXC9wcm9jZWVkaW5nc1xcL2ZpZ19wcm9jZWVkaW5nc1xcL2NhaXJvXFwvcGFwZXJzXFwvd3Noc18wMlxcL3dzaHMwMl8wMl9wYXVsc29uLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzIxNTMzMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJSYW1hbnVqYW4gZ3JhcGhzIGluIGNyeXB0b2dyYXBoeSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2VwcmludC5pYWNyLm9yZ1xcLzIwMThcXC81OTMucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3MzE2NDk0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlByZWNpc2UgYW5kIFNjYWxhYmxlIERldGVjdGlvbiBvZiBEb3VibGUtRmV0Y2ggQnVncyBpbiBPUyBLZXJuZWxzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LXVzZXJzLmNzLnVtbi5lZHVcXC9+a2psdVxcL3BhcGVyc1xcL2RlYWRsaW5lLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODE1ODIyOVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJXaXJlR3VhcmQ6IE5leHQgR2VuZXJhdGlvbiBLZXJuZWwgTmV0d29yayBUdW5uZWwgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cud2lyZWd1YXJkLmNvbVxcL3BhcGVyc1xcL3dpcmVndWFyZC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc2OTA1OThcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBOZXcgUmVmdXRhdGlvbiBvZiBUaW1lICgxOTQ3KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5nd2Vybi5uZXRcXC9kb2NzXFwvYm9yZ2VzXFwvMTk0Ny1ib3JnZXMtYW5ld3JlZnV0YXRpb25vZnRpbWUucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NDgzNzQwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIk1ldGhvZCBhbmQgYXBwYXJhdHVzIGZvciBjb250cm9sbGluZyBlbGVjdHJpYyBjdXJyZW50cyAoMTkyNSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9wYXRlbnRpbWFnZXMuc3RvcmFnZS5nb29nbGVhcGlzLmNvbVxcL2ZhXFwvNWRcXC8zM1xcL2VkMjc2OWQ0OGZhYzRkXFwvVVMxNzQ1MTc1LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjQ3MzQ1NlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJQaHlzaWNpYW5zIGdpdmUgcGF0aWVudHMgYW4gYXZlcmFnZSBvZiAxMSBzZWNvbmRzIGJlZm9yZSBjdXR0aW5nIHRoZW0gb2ZmIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvbGluay5zcHJpbmdlci5jb21cXC9jb250ZW50XFwvcGRmXFwvMTAuMTAwNyUyRnMxMTYwNi0wMTgtNDU0MC01LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzU4MjAwOFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJLb2RhayBQcm9mZXNzaW9uYWwgZGlnaXRhbCBjYW1lcmEgc3lzdGVtcyAxOTg3LTIwMDQgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3d3dy5uaWtvbndlYi5jb21cXC9maWxlc1xcL0RDU19TdG9yeS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc2MDYxNzFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSGFyZHdhcmUgTXVsdGl0aHJlYWRlZCBUcmFuc2FjdGlvbnMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA3LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2xpYmVydHkucHJpbmNldG9uLmVkdVxcL1B1YmxpY2F0aW9uc1xcL2FzcGxvczE4X2htdHgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3ODYwODcxXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkxpZmUgQmV5b25kIERpc3RyaWJ1dGVkIFRyYW5zYWN0aW9uczogQW4gQXBvc3RhdGVcXHUyMDE5cyBPcGluaW9uIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNyxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cDpcXC9cXC9hZHJpYW5tYXJyaW90dC5uZXRcXC9sb2dvc3Jvb3RcXC9wYXBlcnNcXC9MaWZlQmV5b25kVHhucy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTYxMTMzNDRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQSBVc2VyLUNlbnRyZWQgQXBwcm9hY2ggdG8gRnVuY3Rpb25zIGluIEV4Y2VsICgyMDAzKVwiLFxuICAgICAgICBcInNjb3JlXCI6IDcsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5taWNyb3NvZnQuY29tXFwvZW4tdXNcXC9yZXNlYXJjaFxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAxNlxcLzA3XFwvZXhjZWwucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE2NTYyMzAwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBGbGF0bmVzcyBvZiBVLlMuIFN0YXRlcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmRpc3J1cHRpdmVnZW8uY29tXFwvYmxvZ1xcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAxNFxcLzA4XFwvRmxhdE1hcF9HZW9ncmFwaGljYWxSZXZpZXdfRG9ic29uQ2FtcGJlbGxfMjAxM05vdi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc0MzM5MDRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhyb3doYW1tZXI6IFJvd2hhbW1lciBBdHRhY2tzIE92ZXIgdGhlIE5ldHdvcmsgYW5kIERlZmVuc2VzIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNzLnZ1Lm5sXFwvfmhlcmJlcnRiXFwvZG93bmxvYWRcXC9wYXBlcnNcXC90aHJvd2hhbW1lcl9hdGMxOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcwMzg2MjhcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiTW96aWxsYSBncmFudCBmb3IgbWFjaGluZSBsZWFybmluZyBwcm9qZWN0cyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2Jsb2cubW96aWxsYS5vcmdcXC93cC1jb250ZW50XFwvdXBsb2Fkc1xcLzIwMThcXC8wNlxcLzIwMTgtTW96aWxsYS1Bd2FyZHMtQXBwbGljYXRpb24tR3VpZGVfLUNyZWF0aXZlLU1lZGlhLUF3YXJkcy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTczMzY0MTFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIEMgT2JqZWN0IFN5c3RlbSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvbGRlbmlhdS53ZWIuY2Vybi5jaFxcL2xkZW5pYXVcXC9odG1sXFwvY29zLWRsczA5LWRyYWZ0LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODc3NTgyNlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJFeHBlcmllbmNlIHdpdGggVmlydXNlcyBvbiBVbml4IHN5c3RlbXMgKDE5ODkpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnVzZW5peC5vcmdcXC9sZWdhY3lcXC9wdWJsaWNhdGlvbnNcXC9jb21wc3lzdGVtc1xcLzE5ODlcXC9zcHJfZHVmZi5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTcwMzYyOTdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiT24gTGlicmFyeSBDb3JyZWN0bmVzcyBVbmRlciBXZWFrIE1lbW9yeSBDb25zaXN0ZW5jeSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDYsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LnNvdW5kYW5kY29tcGxldGUub3JnXFwvcGFwZXJzXFwvTGlicmFyaWVzLVBPUEwtMjAxOS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgzNTYxOTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiR3JhcGggYWxnb3JpdGhtcyB2aWEgU3VpdGVTcGFyc2U6R3JhcGhCTEFTOiB0cmlhbmdsZSBjb3VudGluZyBhbmQgSy10cnVzcyAoMjAxOCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL2ZhY3VsdHkuY3NlLnRhbXUuZWR1XFwvZGF2aXNcXC9HcmFwaEJMQVNcXC9IUEVDMThcXC9EYXZpc19IUEVDMTgucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4MDg4MTExXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkVtcGlyaWNhbCBTdHVkaWVzIG9mIFByb2dyYW1taW5nIEtub3dsZWRnZSAoMTk4NCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuaWNzLnVjaS5lZHVcXC9+cmVkbWlsZXNcXC9pbmYyMzMtRlEwN1xcL29sZHBhcGVyc1xcL1NvbGxvd2F5RWhybGljaC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc5NTA1OTdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSGlnaGVyLW9yZGVyIHRydXRocyBhYm91dCBDaG1lc3MgKDIwMDYpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvYXNlLnR1ZnRzLmVkdVxcL2NvZ3N0dWRcXC9kZW5uZXR0XFwvcGFwZXJzXFwvY2htZXNzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzk0NzIzOFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJSb2JlcnQgUGlyc2lnIG9uIFRoZSBTY2llbnRpZmljIE1ldGhvZCAoMTk3NCkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA2LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9ra2gubHRyci5hcml6b25hLmVkdVxcL2traFxcL25hdHNnY1xcL1BERnMtMjAxM1xcL1JvYmVydC1QaXJzaWctT24tU2NpZW50aWZpYy1NZXRob2QucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NDE1Njg3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRoZSBNeXRoaWNhbCBNYXRjaGVkIE1vZHVsZXMgKDIwMDkpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LmNsLmNhbS5hYy51a1xcL3Jlc2VhcmNoXFwvc3JnXFwvbmV0b3NcXC9wYXBlcnNcXC8yMDA5LWtlbGwyMDA5bXl0aGljYWwucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE4NjM0MDE3XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkl0IFRha2VzICQ0LjJNIE5ldCBXb3J0aCB0byBCZSBDb25zaWRlcmVkIFdlYWx0aHkgaW4gU2lsaWNvbiBWYWxsZXkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9hYm91dHNjaHdhYi5jb21cXC9pbWFnZXNcXC91cGxvYWRzXFwvaW5saW5lXFwvQ2hhcmxlcy1TY2h3YWItTW9kZXJuLVdlYWx0aC1JbmRleC1CYXktQXJlYS1QcmVzcy1SZWxlYXNlLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzE3NTA5MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJJbnRlcnZpZXdzIHdpdGggSm9obiBDYXJtYWNrIFt+MTk5Ny0yMDA4XSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvZmFiaWVuc2FuZ2xhcmQubmV0XFwvZmRfcHJveHlcXC9kb29tM1xcL3BkZnNcXC9qb2huYy1pbnRlcnZpZXdzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzkzOTY3M1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJGb3JlbnNpYyBBbmFseXNpcyBhbmQgQW5vbnltaXNhdGlvbiBvZiBQcmludGVkIERvY3VtZW50cyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvZGVsaXZlcnkuYWNtLm9yZ1xcLzEwLjExNDVcXC8zMjEwMDAwXFwvMzIwNjAxOVxcL3AxMjctcmljaHRlci5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc0MDU1ODZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiQW4gQXJjaGl0ZWN0dXJlIGZvciAgQW5hbHlzaXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuY3MudWNzYi5lZHVcXC9+am1jbWFoYW5cXC9yZXNlYXJjaFxcL3RvcF9waWNrc18xOC5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTgwODYxNTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIERhbmdlcnMgb2YgS2V5IFJldXNlOiBQcmFjdGljYWwgQXR0YWNrcyBvbiBJUHNlYyBJS0UgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuZWkucnViLmRlXFwvbWVkaWFcXC9uZHNcXC92ZXJvZWZmZW50bGljaHVuZ2VuXFwvMjAxOFxcLzA4XFwvMTNcXC9zZWMxOC1mZWxzY2gucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NzYwNTAyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbXB1dGVyIFZpc2lvbiBmb3IgYXV0b25vbW91cyBuYXZpZ2F0aW9uKDE5ODgpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvd3d3LnJpLmNtdS5lZHVcXC9wdWJfZmlsZXNcXC9wdWIzXFwvaGViZXJ0X21hcnRpYWxfMTk4OF8zXFwvaGViZXJ0X21hcnRpYWxfMTk4OF8zLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzUzODk0OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTUElSQUw6IEV4dHJlbWUgUGVyZm9ybWFuY2UgUG9ydGFiaWxpdHkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3VzZXJzLmVjZS5jbXUuZWR1XFwvfmZyYW56ZlxcL3BhcGVyc1xcLzA4NTEwOTgzX1NwaXJhbF9JRUVFX0ZpbmFsLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODQ2ODA2NVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJaZW5lciBkaW9kZXMgaGF2ZSBjb3VwbGVkIHF1YW50dW0gbm9pc2UgdGhhdCB0cmF2ZWxzIGF0IGMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3ZpeHJhLm9yZ1xcL3BkZlxcLzE2MDMuMDM4OXYyLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODE4MTg5OFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJMb29wIFJlY29nbml0aW9uIGluIEMrK1xcL0phdmFcXC9Hb1xcL1NjYWxhICgyMDExKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDUsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL2RheXMyMDExLnNjYWxhLWxhbmcub3JnXFwvc2l0ZXNcXC9kYXlzMjAxMVxcL2ZpbGVzXFwvd3MzLTEtSHVuZHQucGRmXCIsXG4gICAgICAgIFwiY29tbWVudHNMaW5rXCI6IFwiaHR0cHM6XFwvXFwvbmV3cy55Y29tYmluYXRvci5jb21cXC9pdGVtP2lkPTE3NjgwNzkwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlRlYXNpbmcsIEdvc3NpcCwgYW5kIExvY2FsIE5hbWVzIG9uIFJhcGFudWkgKDE5NzkpIFtwZGZdXCIsXG4gICAgICAgIFwic2NvcmVcIjogNSxcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6XFwvXFwvc2Nob2xhcnNwYWNlLm1hbm9hLmhhd2FpaS5lZHVcXC9iaXRzdHJlYW1cXC8xMDEyNVxcLzE5MjExXFwvMVxcL0FQLXYyMm4xLTQxLTYwLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODI5ODc0MVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJSZWNvbmNpbGluZyBIaWdoLUxldmVsIE9wdGltaXphdGlvbnNcXC9Mb3ctTGV2ZWwgQ29kZSB3aXRoIFR3aW4gTWVtb3J5IEFsbG9jYXRpb24gW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA1LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwOlxcL1xcL3NmLnNudS5hYy5rclxcL3B1YmxpY2F0aW9uc1xcL2xsdm10d2luLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzQ2Mzg1MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJEb2N1bWVudGVkIEdsb2JhbCBMaWdodG5pbmcgRmF0YWxpdGllcyBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL215LnZhaXNhbGEubmV0XFwvVmFpc2FsYSUyMERvY3VtZW50c1xcL1NjaWVudGlmaWMlMjBwYXBlcnNcXC8yMDE2JTIwSUxEQyUyMElMTUNcXC9Sb24lMjBIb2xsZS4lMjBOdW1iZXIlMjBvZiUyMERvY3VtZW50ZWQlMjBHbG9iYWwlMjBMaWdodG5pbmclMjBGYXRhbGl0aWVzLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzE5NTQ1OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJSZXNpc3RhbmNlIHRvIHRoZSBVc2Ugb2YgQW5lc3RoZXNpYSBpbiB0aGUgTWlkLTE5dGggQ2VudHVyeSAoMjAwNSkgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuZG9jZHJvaWQubmV0XFwvVjBzOXVEcFxcL21leWVyMjAxNS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc4MDU3NTdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiVGhlIG1vZGFsaXR5IG9mIG1vcnRhbGl0eSBpbiBkb21haW4gbmFtZXM6IGFuIGluLWRlcHRoIHN0dWR5IG9mIGRvbWFpbiBsaWZldGltZXMgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC93d3cuZmFyc2lnaHRzZWN1cml0eS5jb21cXC9hc3NldHNcXC9tZWRpYVxcL2Rvd25sb2FkXFwvVkIyMDE4LXN0dWR5LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xODYwNzE1MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJTY2llbnRpZmljIFVzZXMgb2YgdGhlIE1BTklBQyAoMTk4NikgW3BkZl1cIixcbiAgICAgICAgXCJzY29yZVwiOiA0LFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczpcXC9cXC9kYXNoZXIud3VzdGwuZWR1XFwvY2hlbTQzMFxcL3JlYWRpbmdcXC9qc3RhdHBoeXMtNDMtNzMxLTg2LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNzUzNTEzOFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJGcmllemUgR3JvdXBzICgxOTk2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvd3d3LmdsYXNzbmVyLmNvbVxcL3dwLWNvbnRlbnRcXC91cGxvYWRzXFwvMjAxNFxcLzA0XFwvQ0ctQ0dBLVBERi05Ni0wNS1GcmllemUtR3JvdXBzLU1heTk2LnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjc5MTQ1MlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjogXCJGYXN0IFByb2dyYW1tYWJsZSBNYXRjaC1BY3Rpb24gUHJvY2Vzc2luZyBpbiBIYXJkd2FyZSBmb3IgU0ROICgyMDEzKSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDQsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwveXViYS5zdGFuZm9yZC5lZHVcXC9+Z3JnXFwvZG9jc1xcL3Nkbi1jaGlwLXNpZ2NvbW0tMjAxMy5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTc0OTczOTVcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiSXZhbiBTdXRoZXJsYW5kOiBUZWNobm9sb2d5IGFuZCBDb3VyYWdlICgxOTk2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHA6XFwvXFwvY3Nld2ViLnVjc2QuZWR1XFwvfndnZ1xcL3NtbGlfcHMtMS5wZGZcIixcbiAgICAgICAgXCJjb21tZW50c0xpbmtcIjogXCJodHRwczpcXC9cXC9uZXdzLnljb21iaW5hdG9yLmNvbVxcL2l0ZW0/aWQ9MTY5MTg3OTZcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6IFwiU2ltb24gQnJvd25lOiB0aGUgc291bC1tdXJkZXJlZCB0aGVvbG9naWFuICgxOTk2KSBbcGRmXVwiLFxuICAgICAgICBcInNjb3JlXCI6IDMsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOlxcL1xcL3d3dy5nd2Vybi5uZXRcXC9kb2NzXFwvcHN5Y2hvbG9neVxcLzE5OTYtYmVybWFuLnBkZlwiLFxuICAgICAgICBcImNvbW1lbnRzTGlua1wiOiBcImh0dHBzOlxcL1xcL25ld3MueWNvbWJpbmF0b3IuY29tXFwvaXRlbT9pZD0xNjM1NTg4N1wiXG4gICAgfVxuXTtcbiJdfQ==