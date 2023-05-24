import firebase from 'firebase';

function CommentForm(){
    

    function comentar(id, e){
        e.preventDefault();
        let comentarioAtual = document.querySelector('#comentario-'+id).value;

        db.collection('posts').doc(id).collection('comentarios').add({
            nome: props.user,
            comentario: comentarioAtual,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        alert('Comentario feito com sucesso !');

        document.querySelector('#comentario-'+id).value = "";
    }

    return (
        <form onSubmit={(e)=>comentar(e)}> 
            <textarea id={"comentario-"}></textarea>
            <input type="submit" value="Comentar" />
        </form>
    )
}

export default CommentForm();