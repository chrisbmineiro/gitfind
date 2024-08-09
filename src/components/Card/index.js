import './styles.css'

const Card = ({ user, username, description }) => {
    return (<>
        <div className='perfil'>
            <img src="https://avatars.githubusercontent.com/u/165342064?v=4" alt="foto de perfil" />
            <div>
                <h3>{user}</h3>
                <span>{username}</span>
                <p>{description}</p>
            </div>
        </div>
        <hr style={{ marginTop: '20px'}} />
    </>
    );
}

export default Card;