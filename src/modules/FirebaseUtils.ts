import { firebase } from "./../../firebaseConfig";

type UploadFileResponse = {
    fileName: string;
    fileUrl: string;
    path: string;
};

const uploadFile = async (param: UploadFileResponse) => {
    if (!param.fileUrl || param.fileName === 'default-name') return;
    try {
        const blob: Blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.onerror = function () {
                reject(new TypeError("Network request failed"));
            };
            xhr.responseType = "blob";
            xhr.open("GET", param.fileUrl, true);
            xhr.send(null);
        });
        const ref = firebase.storage().ref(param.path).child(param.fileName);
        await ref.put(blob);
        const url = await ref.getDownloadURL();
        return url;
    } catch (error) {
        console.log("Error upload file: ", error);
    }
}

const FirebaseUtils = {
    uploadFile,
};

export default FirebaseUtils;