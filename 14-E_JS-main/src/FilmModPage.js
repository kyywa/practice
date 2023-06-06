import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export function FilmModPage(props) {
    const params = useParams();
    const id = params.filmId;
    const navigate = useNavigate();
    const [film,setFilm] = useState([]);
    const[modnev,setModnev] = useState('');
    const[modkiadaseve, setModKiadaseve] = useState('');
    const[modertekeles,setModErtekeles] = useState('');
    const[modkepneve,setModkepneve] = useState('');
    console.log(film);
    useEffect(() => {
        (async () => {

            try {
                const res = await fetch(`https://localhost:7017/Film/${id}`)
                const film = await res.json();
                
                setModnev(film.nev);
                console.log(modnev);

                setModKiadaseve(film.kiadasEve);
                console.log(modkiadaseve);

                setModErtekeles(film.ertekeles);
                console.log(modertekeles);

                setModkepneve(film.kepneve);
                console.log(modkepneve);
            }
            catch(error) {
                console.log(error);
            }
        })
        (); 
    }, [id,modnev,modkiadaseve,modertekeles,modkepneve]);
   
    const modNev = event => {
        setModnev(event.target.value);
    }
    const modKiadaseve = event => {
        setModKiadaseve(event.target.value);
    }
    const modErtekeles = event => {
        setModErtekeles(event.target.value);
    }
    const modKepneve = event => {
        setModkepneve(event.target.value);
    }

    return (
        <div className="p-5 content bg-whitesmoke text-center">
            <h2>Film módosítása</h2>
            <form
            onSubmit={(event) => {
                event.persist();
                event.preventDefault();
                fetch(`https://localhost:7017/Film/${id}`, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: event.target.elements.id.value,
                        nev: event.target.elements.nev.value,
                        kiadasEve: event.target.elements.kiadaseve.value,
                        ertekeles: event.target.elements.ertekeles.value,
                        kepneve: event.target.elements.kepneve.value,
                    }),
                })
                .then(() => {
                    navigate("/");
                })
                .catch(console.log);
            }}>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Film ID:</label>
                    <div className="col-sm-9">
                        <input type="text" name="id" className="form-control" value={film.id}/>
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Film neve:</label>
                    <div className="col-sm-9">
                        <input type="text" name="nev" className="form-control" defaultValue={film.nev} onChange={modNev}/>
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Kiadás éve:</label>
                    <div className="col-sm-9">
                        <input type="number" name="kiadaseve" className="form-control" defaultValue={film.kiadasEve} onChange={modKiadaseve}/>
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Értékelés:</label>
                    <div className="col-sm-9">
                        <input type="number" name="ertekeles" className="form-control" defaultValue={film.ertekeles} onChange={modErtekeles}/>
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Kép neve:</label>
                    <div className="col-sm-9">
                        <input type="text" name="kepneve" className="form-control" defaultValue={film.kepneve} onChange={modKepneve}/>
                    <img src={`../${film.kepneve}`} height="200px" alt={film.kepneve}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Küldés</button>
            </form>
        </div>
    );
    }
export default FilmModPage;
