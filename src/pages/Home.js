import React from 'react';
import '../App.css';
import InputControl from '../components/InputControl';
import { Form } from 'react-bootstrap';

function Home() {
  return (
    <div className='home'>
      <div class="HomeMain">
      </div>
      <div class='AboutUS'>
        <h2>O nama</h2>
        <div class="aboutText">
          <p>Članica smo IATA-e od samog osnivanja.
          Konstantno napredujući, uspeli smo, na osnovu rezultata poslovanja - da se svrstamo u red vodećih turističkih agencija na našem tržištu. To smo postigli realizacijom ispravne poslovne politike koju sprovodi tim (60 stalno zaposlenih u agenciji i preko 80 kolega koji rade na terenu) u poslovnici koja je optimalno tehnički opremljena.

          Sopstveni vozni park (trenutno - dvanaest modernih, turističkih autobusa, mini busevi i komforni automobili I klase za prevoz VIP gostiju), je izuzetna prednost koju znalački iskorišćavamo.</p>
          <p>O našem ugledu rečito govori i podatak da više od 500 turističkih agencija prodaje aranžmane, koji su kreirali naši komercijalisti. Stoga ne čudi podatak (za 2015. godinu) da je ova razgranata prodajna mreža opslužila oko 55.000 klijenata.</p>
          <p>Naravno, da smo se intezivno uključili i u mnoge programe receptivnog turizma, u cilju da dostojno reprezentujemo našu zemlju, što bi trebalo da bude i osnovni cilj svih domaćih turističkih agencija. Upravo u tom kontekstu, organizovali smo u poslednjih par godina nekoliko kongresa i savetovanja, kao i kružne ture po Srbiji, što je na naše zadovoljstvo, ocenjeno kao veoma uspešno i čini nas gostoljubivim domaćinima. </p>
        </div>
        <div class="arrangements">
          <h2>Izdvajamo iz ponude</h2>
              <div class='arrangementOffer'>
                  <div class="proba">
                      <img src='najbolje-destinacije-za-letovanje-turska.jpg' alt=""/>
                      <div>
                        <h3>Letovanje u Turskoj koje će vam se isplatiti</h3>
                        <p>Sa prelepim pejzažom, neverovatno bogatom istorijom i širokom ponudom aktivnosti u prirodi, Turska stvarno vredi svaku paru. Sa smeštajem duž Tirkizne obale – tzv. Turske rivijere – bićete u neposrednoj blizini popularnog Marmarisa koji je prepun klubova kao i Ičmelera gde možete uživati u uzbudljivim sportovima na vodi. Ako želite da se osamite, ne postoji bolje mesto od netaknute Patare u Antaliji, plaže duge 17 kilometara gde glavate kornjače dolaze da polažu jaja.</p>
                      </div>
                  </div>
                  <div class="proba"> 
                      <img src='najbolje-destinacije-za-letovanje-azija.jpg' alt=""/>
                      <div>
                        <h3>Neverovatna letovanja u Aziji koja možete priuštiti</h3>
                        <p>Azija se može pohvaliti nekim od najpoznatijih morskih destinacija – pomislite na Puket i Bali – ali takođe ima mesta koja su podjednako lepa ili još lepša a nije vam potreban dubok džep. Letujte u novembru po neverovatno jeftinim ponudama kada prođu monsunske kiše, na plažama nema putnika koji su pobegli iz hladnijih krajeva a smeštaj možete dobiti po vansezonskim cenama.</p>
                      </div>
                  </div>
                  <div class="proba">
                      <img src='najbolje-destinacije-za-letovanje-bugarska.jpg' alt=""/>
                      <div>
                        <h3>Jeftini odmori na Crnom moru u Bugarskoj</h3>
                        <p>Kada govorimo o jeftinim morskim destinacijama u Evropi, Bugarsku je teško premašiti. Obala Crnog mora – nazvana bugarskom rivijerom – zauzima prvo mesto kada je u pitanju odnos novac – kvalitet. Privlačni Sunčev Breg je bugarsko najveće i najbolje letovalište, sa zlatnim peščanim plažama i odličnim žurkama na plaži. Ako vam se više sviđa nešto mirnije, uputite se do Ahtopola ili nudističke plaže Irakli.</p>
                      </div>
                  </div>
              </div>
        </div>
      </div>
      <div className='destinacije'>
      <h1>Destinacije</h1>
        <div className="main">
         <h3>Izbor destinacije</h3>
          <div className="search-form">
           <Form>
            <InputControl
              name="country"
              label="Unesite zemlju"
              placeholder="Unesite zemlju u koju biste želeli da putujete"
            />
           </Form>
          </div>
        </div>
    </div>
    </div>
  );
}

export default Home;
