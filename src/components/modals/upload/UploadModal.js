import { useState } from "react";

function UploadModal({ onClose }){

    const [progress, setProgress] = useState(0);
    const [file, setFile] = useState(null);


    function uploadPost(e){
        e.preventDefault();

        let tituloPost = document.getElementById('titulo-upload').value;

        const uploadTask = storage.ref(`images/${file.name}`).put(file);

        uploadTask.on("state_changed", function(snapshot){
            const progress = Math.round(snapshot.bytesTransferred/snapshot.totalBytes) * 100;
            setProgress(progress);
        }, function(error){

        }, function(){
            storage.ref("images").child(file.name).getDownloadURL()
            .then(function(url){
                db.collection('posts').add({
                    titulo: tituloPost,
                    image: url,
                    userName: props.user,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                })

                setProgress(0);
                setFile(null);

                alert("Upload Finalizado !");

                document.getElementById("form-upload").reset();
                fecharModalUpload();

            })
        })



    }

    return (
    <div className="modalUpload">
        <div className="formUpload">
            <div onClick={onClose} className="close-modal-upload">X</div>
            <h2> Fazer Upload</h2>
            <form id="form-upload" onSubmit={(e)=>uploadPost(e)}>
                <progress id="progress-upload" value={progress}></progress>
                <input id="titulo-upload" type="text" placeholder="Nome da sua foto" />
                <input onChange={(e)=>setFile(e.target.files[0])} type="file" name="file" />
                <input type="submit" value="Postar" />
            </form>
        </div>
    </div>
    )
}

export default UploadModal;