

let NavigationComponent = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Fake Bank</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Products & Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Online Banking</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Offers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Recommend Us</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn btn-sm btn-light mx-2 fw-bold">New Account?</button>
                            <button className="btn btn-sm btn-light mx-2 fw-bold" type ="submit">Login</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavigationComponent;