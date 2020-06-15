import {useHistory} from react-router-dom


const transition = () => {
    const history = useHistory()

    setTimeout(function() {
        window.location.href = "http://www.devmedia.com.br";
    }, 5000);
}