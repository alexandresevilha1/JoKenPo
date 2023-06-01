import './header.css'

export default function Header() {
    return (
        <>
            <header>
                <div className='logo-header'>
                    <h1>JoKenPo</h1>
                </div>
                <div className='login-registro'>
                    <button>LOGIN</button>
                    <button>CADASTRO</button>
                </div>
                <div className='modo-dark-light'>
                    <p>dark/light</p>
                </div>
            </header>
        </>
    )
}