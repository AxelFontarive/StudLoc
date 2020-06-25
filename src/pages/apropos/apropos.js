import React from 'react';
import '../../css/apropos.css';
import Entete from '../../images/BleuEntete.png'

function Apropos() {

    return(
        <div>
            <h1>Site web réalisé par :</h1>
            <div className="center">
                <img className="SeparateurRemer" src={Entete}/>
            </div>
            <table id="TableDev">
                <tbody>
                    <tr>
                        <td className="tdTable">
                            <div>Valentin Charles</div>
                            <div className="center">
                                <img className="SeparateurNom" src={Entete}/>
                            </div>
                        </td>
                        <td className="tdTable">
                            <div>Axel Fontarive</div>
                            <div className="center">
                                <img className="SeparateurNom" src={Entete}/>
                            </div>
                        </td>
                        <td className="tdTable">
                            <div>Quentin Girié</div>
                            <div className="center">
                                <img className="SeparateurNom" src={Entete}/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="tdTable">
                            <div>Guillaume Jacques</div>
                            <div className="center">
                                <img className="SeparateurNom" src={Entete}/>
                            </div>
                        </td>
                        <td className="tdTable">
                            <div>Elliot Pujol</div>
                            <div className="center">
                                <img className="SeparateurNom" src={Entete}/>
                            </div>
                        </td>
                        <td className="tdTable">
                            <div>Fatih Tokgoz</div>
                            <div className="center">
                                <img className="SeparateurNom" src={Entete}/>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br/><br/><br/>
            <h1>Nous remercions :</h1>
            <table id="TableAide">
                <tbody>
                    <tr>
                        <td className="tdTableAide">
                            <div>Cody Zuschlag</div>
                        </td>
                        <td className="tdTableAide">
                            <div className="center">
                                <img className="SeparateurAide" src={Entete}/>
                            </div>
                        </td>
                        <td className="tdTableAide">
                            <div>Nicolas Voiron</div>
                        </td>
                        <td className="tdTableAide">
                            <div className="center">
                                <img className="SeparateurAide" src={Entete}/>
                            </div>
                        </td>
                        <td className="tdTableAide">
                            <div>Elisa Trolez</div>
                        </td>
                    </tr>
                    <tr>
                        <td className="tdTableAide"></td>
                        <td className="tdTableAide">
                            <div>François Béruard</div>
                        </td>
                        <td className="tdTableAide">
                            <div className="center">
                                <img className="SeparateurAide2" src={Entete}/>
                            </div>
                        </td>
                        <td className="tdTableAide">
                            <div>Tétras Annecy</div>
                        </td>
                        <td className="tdTableAide"></td>
                    </tr>
                </tbody>
            </table>
            
            <footer>
                <div id="DivFooter1">
                    <p id="Version">V1.5</p>
                </div>
                <div id="DivFooter2">Tétras CPINFO19</div>
            </footer>
        </div>
    )
}

export default Apropos;