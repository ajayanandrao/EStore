import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer class="text-center bg-body-tertiary">
                <div class="container pt-4">

                    <section class="mb-4">

                        <a
                            data-mdb-ripple-init
                            class="btn btn-link btn-floating btn-lg text-body m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i style={{fontSize:"22px"}} class="fab fa-facebook-f"></i></a>


                        <a
                            data-mdb-ripple-init
                            class="btn btn-link btn-floating btn-lg text-body m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i style={{fontSize:"22px"}} class="fab fa-twitter"></i></a>


                        <a
                            data-mdb-ripple-init
                            class="btn btn-link btn-floating btn-lg text-body m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i style={{fontSize:"22px"}} class="fab fa-google"></i></a>


                        <a
                            data-mdb-ripple-init
                            class="btn btn-link btn-floating btn-lg text-body m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i style={{fontSize:"22px"}} class="fab fa-instagram"></i></a>


                        <a
                            data-mdb-ripple-init
                            class="btn btn-link btn-floating btn-lg text-body m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i style={{fontSize:"22px"}} class="fab fa-linkedin"></i></a>

                        <a
                            data-mdb-ripple-init
                            class="btn btn-link btn-floating btn-lg text-body m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i style={{fontSize:"22px"}} class="fab fa-github"></i></a>
                    </section>

                </div>

                <div class="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                    <span style={{ color: "#181818" }}> © 2020 Copyright:</span>
                    <a class="text-body" style={{ color: "#181818" }} href="https://mdbootstrap.com/">E-Store.com</a>
                </div>

            </footer >
        </div >
    )
}

export default Footer