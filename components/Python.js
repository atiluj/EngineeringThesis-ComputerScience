import './Teoria.css';
import * as React from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import Collapse from '@mui/material/Collapse';

function Chapter(props) {
    const [show, setShow] = React.useState(false); //domyślnie schowane
    return <>
        <div class="topic" onClick={() => setShow(show => !show)}>
            <a>{props.title}</a>
            {show ? <ExpandLess /> : <ExpandMore />}
        </div>
        <Collapse in={show}>
            {props.children}
        </Collapse>
    </>;
}

export default function () {
    const [show, setShow] = React.useState(false); //domyślnie schowane

    return <main>
        <div class="contents">
            <div class="cont-title">
                <a>SPIS TREŚCI</a>
            </div>

            <div class="cont">

                <div class="topic"><a>0. Wskazówki</a></div>

                <Chapter title="1. Podstawowe konstrukcje">
                    <a href="" class="subtopic">Instrukcje wejścia i wyjścia</a>
                    <a href="" class="subtopic">Warunki</a>
                    <a href="" class="subtopic">Pętle</a>
                    <a href="" class="subtopic">Operacje na plikach</a>

                    <a href="" class="subtopic">Funkcje</a>
                </Chapter>

                <Chapter title="2. Struktury danych">
                <a href="" class="subtopic">Lista</a>
                <a href="" class="subtopic">Lista dwuwymiarowa</a>

                </Chapter>

                <Chapter title="3. Rekurencja">
                    <a href="" class="subtopic">Podejście zachłanne</a>
                    <a href="" class="subtopic">Metoda "dziel i zwyciężaj</a>
                </Chapter>

                <Chapter title="4. Liczby">
                    <a href="" class="subtopic">Liczby pierwsze i doskonałe</a>
                    <a href="" class="subtopic">Rozkładanie liczby na czynniki pierwsze</a>
                    <a href="" class="subtopic">NWD i NWW</a>
                    <a href="" class="subtopic">Liczby Fibonacciego</a>
                </Chapter>

                <Chapter title="4. Proste algorytmy">

                </Chapter>

                <Chapter title="5. Algorytmy sortowania">
                    <a href="" class="subtopic">Bąbelkowy</a>
                    <a href="" class="subtopic">Po przez wybór</a>
                    <a href="" class="subtopic">Przez wstawianie</a>
                    <a href="" class="subtopic">Przez scalanie</a>
                    <a href="" class="subtopic">Szybkie</a>
                    <a href="" class="subtopic">Kubełkowe</a>
                </Chapter>

                <Chapter title="6. Algorytmy numeryczne">
                    <a href="" class="subtopic">obliczanie wartości pierwiastka kwadratowego</a>
                    <a href="" class="subtopic">wyznaczanie miejsc zerowych funkcji</a>
                    <a href="" class="subtopic">obliczanie pola obszarów zamkniętych</a>
                </Chapter>

                <Chapter title="7. Inne algorytmy">
                    <a href="" class="subtopic">Tekstowe</a>
                    <a href="" class="subtopic">Palindromy</a>
                    <a href="" class="subtopic">Wyszukiwanie wzorca w tekście</a>
                    <a href="" class="subtopic">Schemat Horenera</a>
                </Chapter>

                <Chapter title="8. Algorytmy szyfrowania">
                    <a href="" class="subtopic">Szyfr Cezara</a>
                    <a href="" class="subtopic">Przestawieniowy</a>
                </Chapter>



            </div>
            {/* <!-- REKLAMA --> */}
        </div>

        <div class="main">
            <div class="title" style={{ backgroundColor: '#002cb352' }}>
                <a>PYTHON</a>
            </div>
            <article class="second">
                <h1>WSKAZÓWKI</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aliquid rem nemo earum esse minima similique recusandae culpa numquam est officiis, a aliquam rerum autem ratione soluta temporibus. A, doloribus!
                    Ratione eos sunt mollitia voluptatum, laboriosam cum iure excepturi consectetur id nam repellat pariatur perspiciatis accusantium impedit quia rerum incidunt doloremque officia dignissimos tempora inventore explicabo neque aut earum? Possimus?
                    Quo ipsum excepturi, totam iste ipsam laudantium inventore accusantium eveniet, vero odio fuga quam dicta vitae. Nobis iure eum, aperiam recusandae, suscipit aspernatur at dolore exercitationem veritatis necessitatibus omnis itaque.
                    Fugiat tempore illo doloribus autem. Provident dignissimos, magnam laudantium corrupti ea voluptates commodi eligendi praesentium? Quae numquam eligendi facilis consequuntur expedita excepturi inventore reiciendis, magnam, aperiam atque at, similique nostrum!
                    Similique repudiandae quo consequuntur! Ratione repellendus tempore aut recusandae dolorem illo suscipit, laborum labore, et illum maiores id porro nisi iure sed iusto vel expedita consectetur nobis doloremque praesentium veritatis.
                    Reiciendis ipsa quas laborum est exercitationem eaque eligendi, neque veniam quae recusandae rerum, dolorum incidunt modi impedit tenetur alias expedita fugit ullam maxime atque sequi animi aperiam? Eaque, voluptate placeat.
                    Culpa expedita, impedit provident optio delectus fugit quaerat autem? Voluptatem illo reiciendis ullam at, ducimus dolores velit modi distinctio, explicabo accusamus voluptates cum vel molestiae cupiditate blanditiis quasi totam labore?
                    Provident tempora nemo asperiores sint. Expedita fuga itaque inventore dolore dolorem voluptate magnam saepe ipsam ut nesciunt laboriosam dolores et nostrum facilis a, hic dolorum, nam quam quibusdam consequatur velit.
                    Architecto quod nisi natus asperiores eligendi numquam illum rem nobis praesentium et quisquam voluptates assumenda laudantium aspernatur fugiat atque quae quo, sint repellat ex? Dignissimos error similique voluptate illum rem.
                    Inventore, vitae. Optio molestiae impedit tempora alias inventore minus, laborum expedita earum laboriosam atque ea quibusdam reprehenderit deserunt dicta! Aliquid pariatur amet, sit aut iusto a labore? Aliquam, debitis error?
                    Rem amet distinctio nemo quis labore ea sit, inventore nesciunt! Dolorem totam odio a. Culpa nobis quam repellat? Vel sint in nam delectus adipisci doloribus sunt hic mollitia harum distinctio.
                    Excepturi, dignissimos! Ut repellendus quibusdam assumenda, alias id odio consequuntur deleniti obcaecati excepturi fugiat consectetur ducimus quo debitis aperiam earum voluptatum voluptate magnam ex, dicta provident repellat vitae a quaerat?
                    Ut, suscipit quidem corrupti porro eveniet obcaecati quia illo nesciunt nobis doloremque, error impedit veritatis facilis voluptas quam minus quaerat? Unde asperiores ipsam tenetur velit harum eos molestiae. Atque, maiores?
                    Tempora nihil veniam quis odit doloremque deleniti esse sunt suscipit dolore quam maiores eius, iure necessitatibus itaque cumque at dolores veritatis rem autem ex officiis aliquid praesentium iste. Quidem, recusandae.
                    Blanditiis fugiat numquam beatae repellendus quod in dolorum, amet assumenda corporis, inventore veniam illo doloremque impedit tempora at sequi commodi quibusdam exercitationem illum nulla eaque aperiam quas? Ullam, dolorum sit.
                    Voluptates sunt voluptas esse neque voluptatum dolores nemo hic, sequi quam deserunt similique, excepturi, iusto laborum quos voluptatibus ipsam culpa! Facere ad molestiae debitis ea voluptates temporibus a delectus eaque.
                    Hic repudiandae voluptatem praesentium atque ab! Perferendis, vero saepe exercitationem maiores id doloremque quidem dolore? Maiores adipisci, doloribus voluptas explicabo praesentium aut officia nesciunt! Aut maxime hic nisi ullam saepe.
                    Laborum vitae a minus commodi et voluptatibus ab labore nam perspiciatis, voluptas harum aut vero ratione velit temporibus quasi culpa. Quaerat, dolore eveniet! Assumenda incidunt quia consequuntur laborum at fugit!
                    Nisi nobis dicta qui eos pariatur, soluta omnis, iure accusamus delectus magnam repudiandae. Facere iure soluta dignissimos exercitationem voluptas, molestiae aut asperiores. Exercitationem, voluptatibus excepturi. Ad natus dignissimos quis minus?
                    Quidem vero doloribus quasi optio assumenda minus tenetur magni ab eligendi. Inventore, sapiente veniam officia excepturi ullam sed perferendis exercitationem error, velit mollitia eos similique iusto cum vero, itaque nostrum!
                    Debitis totam quidem ut numquam necessitatibus voluptate expedita explicabo, pariatur provident, amet nostrum beatae laborum rerum cum dolore illum ea earum quas cumque ad fugit? Voluptate quam beatae natus ratione.
                    Corrupti blanditiis autem quae dicta placeat nesciunt rerum itaque, labore repudiandae molestiae rem totam suscipit consequuntur exercitationem iure voluptatum omnis tenetur asperiores ipsam ducimus eveniet, consequatur ipsa accusamus. Hic, rem!
                    Cum aspernatur natus voluptatem molestias sunt obcaecati ab pariatur doloribus placeat, alias deserunt consequuntur cupiditate ipsum consectetur maiores aliquam mollitia magni minima facere fugiat optio earum! Deleniti impedit perspiciatis officiis.
                    Explicabo odit, dicta tempore fugiat excepturi vitae cum rerum voluptatum officia itaque molestiae libero nemo! Minima fugiat voluptate fugit nam ipsa reiciendis magni, cupiditate illum tempore ea sequi quibusdam dolorem!
                    Aut consequuntur corrupti rerum, alias quae praesentium dolorum ullam, quis quas repudiandae aspernatur inventore soluta tenetur cumque, odio impedit velit accusantium eligendi suscipit cupiditate ex voluptatum rem commodi dolore? Eum!
                    Asperiores, ipsa voluptas eveniet cum reprehenderit velit tempora, repellat deserunt, a quia facilis excepturi unde? Sit delectus, fugiat dolores sapiente iste aut placeat atque quidem ullam ut. Voluptatum, recusandae autem.
                    Reiciendis quasi, dolorem, illum nihil repellendus tenetur officia nisi debitis possimus sint aliquid. Et, ullam? Quos laborum quo eos cum pariatur! Quia, atque! Fuga suscipit, dolor quis eligendi laudantium placeat.
                    Recusandae earum deleniti nisi dolorem ullam odit a. Dolores officiis, repudiandae sunt unde vero a quas quisquam dolorum corrupti quae rem voluptate, temporibus facere? Deleniti nostrum minus praesentium tempore fugiat.
                    Nobis veniam esse ipsa ad molestiae dignissimos atque sint distinctio autem magnam, blanditiis commodi ut dolor, voluptates eius inventore. Blanditiis porro commodi nulla temporibus ipsa, est autem quos quibusdam rem!
                    Laudantium dolor aliquid, voluptatum rem labore quasi? Cumque repellendus eum cum ipsam sint, quaerat, suscipit inventore nesciunt earum repudiandae sed sunt obcaecati sit ullam, nam consectetur quisquam tempora beatae accusantium.
                    Explicabo dicta odio velit deserunt nam impedit eum id tempore. Minima, sed fuga magni quod rem porro soluta nam veritatis beatae dolores deleniti, exercitationem neque molestiae velit iusto dignissimos ipsam.
                    Fuga exercitationem suscipit voluptate rerum a modi cupiditate nemo recusandae sit ipsam, ea illo velit ex blanditiis adipisci fugiat debitis deserunt deleniti sint consectetur non. Autem nisi neque recusandae ducimus!
                    Expedita et non distinctio voluptatum dolor quod exercitationem corporis aliquid sint cupiditate optio, ex accusantium quibusdam dolorem aut? Culpa ad libero sit odit repellendus reiciendis fugit placeat id perferendis fuga?
                    Error sint ipsam enim quos adipisci esse distinctio eum, recusandae, reprehenderit nobis repellat sit magni? Nostrum, omnis iste fugiat enim accusamus, voluptas velit error aspernatur dolore libero, veritatis rem voluptatibus.
                    Nobis aut perspiciatis quos labore assumenda. Odit deleniti assumenda nam ipsam nobis. Velit corrupti error illo eius incidunt quam, nisi veniam iusto dolorem ipsum, dolorum perferendis id expedita praesentium. Obcaecati.
                    Eaque, placeat amet? Voluptatibus, atque saepe. Nobis iusto cumque sequi minus impedit, dolorum corporis eum qui non, dolores temporibus reiciendis doloribus explicabo fuga sed ut. Aliquam quia architecto inventore cupiditate.
                    Inventore id molestias eum deleniti dicta hic beatae repellendus assumenda dolor possimus obcaecati unde praesentium, excepturi architecto vero! Cupiditate tempore voluptas quam vitae a est voluptatem sapiente deserunt ratione exercitationem!
                    Autem natus nam voluptas harum dicta similique? Debitis qui est officia ducimus voluptate quo minus perferendis vero nulla magnam. Provident id sit iusto vero itaque ab, quas velit eum veniam!
                    Soluta ad minus voluptatibus, su. Reprehenderit molestias, eum libero excepturi modi quia quasi maxime facere sed voluptatum hic totam voluptas, pariatur in, placeat repellendus quisquam illum fugiat quibusdam a enim animi? Recusandae?
                    Incidunt porro, sit maiores ad deleniti dicta error soluta, quidem non harum quos at, rem tempora modi quam. Quam cum ab quasi exercitationem, architecto possimus alias quidem officia doloremque ad?
                    Autem eaque architecto adipisci omnis dolorum nemo soluta numquam ipsam deserunt aut velit, id rem corporis dolor itaque quia optio odit? Laborum explicabo necessitatibus dolor aliquid suscipit voluptates praesentium voluptate?
                    Nisi mollitia quae fugit architecto laudantium est aperiam dolor! Excepturi molestias consequatur nulla. Quae, quasi. Repellendus quidem, distinctio ad quibusdam architecto nemo natus rem voluptatibus asperiores esse consequuntur tempora fugit?
                </p>
            </article>
        </div>
    </main>;
}