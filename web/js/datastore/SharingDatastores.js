"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Preconditions_1 = require("polar-shared/src/Preconditions");
const SharingDatastore_1 = require("./SharingDatastore");
class SharingDatastores {
    static create(url = this.currentURL()) {
        const params = this.parseURL(url);
        if (!params) {
            throw new Error("Not a sharing URL: " + url);
        }
        return new SharingDatastore_1.SharingDatastore(params.doc, params.fingerprint);
    }
    static isSupported() {
        const params = this.parseURL();
        return params !== undefined;
    }
    static parseURL(url = this.currentURL()) {
        const parsedURL = new URL(url);
        if (parsedURL.hostname.endsWith(".getpolarized.io")) {
            const shared = parsedURL.searchParams.get("shared");
            const doc = parsedURL.searchParams.get("doc");
            const fingerprint = parsedURL.searchParams.get("fingerprint");
            if (shared === 'true' && Preconditions_1.isPresent(doc)) {
                return {
                    shared: true,
                    doc: doc,
                    fingerprint: fingerprint
                };
            }
        }
        return undefined;
    }
    static currentURL() {
        return document.location.href;
    }
}
exports.SharingDatastores = SharingDatastores;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hhcmluZ0RhdGFzdG9yZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTaGFyaW5nRGF0YXN0b3Jlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGtFQUF5RDtBQUN6RCx5REFBb0Q7QUFJcEQsTUFBYSxpQkFBaUI7SUFLbkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFjLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFFaEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUUsTUFBTSxFQUFFO1lBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNoRDtRQUVELE9BQU8sSUFBSSxtQ0FBZ0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUVoRSxDQUFDO0lBS00sTUFBTSxDQUFDLFdBQVc7UUFFckIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQy9CLE9BQU8sTUFBTSxLQUFLLFNBQVMsQ0FBQztJQUVoQyxDQUFDO0lBRU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFjLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFFbkQsTUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFL0IsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1lBRWpELE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELE1BQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlDLE1BQU0sV0FBVyxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRTlELElBQUksTUFBTSxLQUFLLE1BQU0sSUFBSSx5QkFBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUVyQyxPQUFPO29CQUNILE1BQU0sRUFBRSxJQUFJO29CQUNaLEdBQUcsRUFBRSxHQUFJO29CQUNULFdBQVcsRUFBRSxXQUFZO2lCQUM1QixDQUFDO2FBRUw7U0FFSjtRQUVELE9BQU8sU0FBUyxDQUFDO0lBRXJCLENBQUM7SUFFTyxNQUFNLENBQUMsVUFBVTtRQUNyQixPQUFPLFFBQVEsQ0FBQyxRQUFTLENBQUMsSUFBSSxDQUFDO0lBQ25DLENBQUM7Q0FFSjtBQXpERCw4Q0F5REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZpcmViYXNlRG9jTWV0YUlEfSBmcm9tICcuL0ZpcmViYXNlRGF0YXN0b3JlJztcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtTaGFyaW5nRGF0YXN0b3JlfSBmcm9tICcuL1NoYXJpbmdEYXRhc3RvcmUnO1xuaW1wb3J0IHtVUkxTdHJ9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvU3RyaW5nc1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBTaGFyaW5nRGF0YXN0b3JlcyB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBzaGFyaW5nIGRhdGFzdG9yZSBmcm9tIHRoZSBnaXZlbiBVUkwuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUodXJsOiBVUkxTdHIgPSB0aGlzLmN1cnJlbnRVUkwoKSkge1xuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMucGFyc2VVUkwodXJsKTtcblxuICAgICAgICBpZiAoISBwYXJhbXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBhIHNoYXJpbmcgVVJMOiBcIiArIHVybCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFNoYXJpbmdEYXRhc3RvcmUocGFyYW1zLmRvYywgcGFyYW1zLmZpbmdlcnByaW50KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0cnVlIGlmIHRoZSBjdXJyZW50IFVSTCBpcyBhIHNoYXJpbmcgVVJMLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgaXNTdXBwb3J0ZWQoKTogYm9vbGVhbiB7XG5cbiAgICAgICAgY29uc3QgcGFyYW1zID0gdGhpcy5wYXJzZVVSTCgpO1xuICAgICAgICByZXR1cm4gcGFyYW1zICE9PSB1bmRlZmluZWQ7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBwYXJzZVVSTCh1cmw6IFVSTFN0ciA9IHRoaXMuY3VycmVudFVSTCgpKTogU2hhcmluZ1BhcmFtcyB8IHVuZGVmaW5lZCB7XG5cbiAgICAgICAgY29uc3QgcGFyc2VkVVJMID0gbmV3IFVSTCh1cmwpO1xuXG4gICAgICAgIGlmIChwYXJzZWRVUkwuaG9zdG5hbWUuZW5kc1dpdGgoXCIuZ2V0cG9sYXJpemVkLmlvXCIpKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHNoYXJlZCA9IHBhcnNlZFVSTC5zZWFyY2hQYXJhbXMuZ2V0KFwic2hhcmVkXCIpO1xuICAgICAgICAgICAgY29uc3QgZG9jID0gcGFyc2VkVVJMLnNlYXJjaFBhcmFtcy5nZXQoXCJkb2NcIik7XG4gICAgICAgICAgICBjb25zdCBmaW5nZXJwcmludCA9IHBhcnNlZFVSTC5zZWFyY2hQYXJhbXMuZ2V0KFwiZmluZ2VycHJpbnRcIik7XG5cbiAgICAgICAgICAgIGlmIChzaGFyZWQgPT09ICd0cnVlJyAmJiBpc1ByZXNlbnQoZG9jKSkge1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgc2hhcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkb2M6IGRvYyEsXG4gICAgICAgICAgICAgICAgICAgIGZpbmdlcnByaW50OiBmaW5nZXJwcmludCFcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBjdXJyZW50VVJMKCk6IFVSTFN0ciB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5sb2NhdGlvbiEuaHJlZjtcbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIFNoYXJpbmdQYXJhbXMge1xuICAgIHJlYWRvbmx5IHNoYXJlZDogYm9vbGVhbjtcbiAgICByZWFkb25seSBkb2M6IEZpcmViYXNlRG9jTWV0YUlEO1xuICAgIHJlYWRvbmx5IGZpbmdlcnByaW50OiBzdHJpbmc7XG59XG4iXX0=