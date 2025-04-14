import "./App.css";
import { useRef } from "react";

function App() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();
  return (
    <>
      <div className="body-wrapper h-full w-full bg-[#28292d] flex justify-center">
        <div className="main-wrapper flex flex-col justify-start items-center w-[75%] h-full font-sans">
          <div className=" nav-bar flex justify-center items-center gap-4 mt-10">
            <button
              className="btn-main"
              onClick={() => {
                homeRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Home
            </button>
            <button
              className="btn-main"
              onClick={() => {
                aboutRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About Us
            </button>
            <button
              className="btn-main"
              onClick={() => {
                contactRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Us
            </button>
          </div>
          <div className="home-section flex flex-col justify-center items-center mt-5 text-white ">
            <h3 className="font-bold text-4xl m-5" ref={homeRef}>
              Home
            </h3>
            <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              esse delectus odit sed, eos eveniet nostrum laborum expedita
              doloribus tempore error autem sit ipsam dolore, cumque, iste
              explicabo dolores corporis. Qui hic temporibus molestiae eum. Iste
              recusandae sapiente debitis consequuntur libero magni fugit
              temporibus non, laudantium nisi ipsam quos deleniti beatae quia!
              Quibusdam animi omnis fugiat eius et praesentium nemo?
              Repellendus, dignissimos libero. Iure distinctio libero, cumque
              repellat consequatur unde, eum molestias nostrum quos tempore, ut
              rem! Minima quos deleniti autem cumque neque aspernatur?
              Dignissimos consectetur delectus saepe autem debitis. Aspernatur
              placeat perferendis consequuntur distinctio aut fuga esse,
              architecto dolor repudiandae suscipit repellat vel, cum laboriosam
              consectetur eveniet necessitatibus dicta sed rem, explicabo totam.
              Provident consequuntur incidunt veniam placeat facilis! Cupiditate
              ullam corrupti modi! Quia molestiae aut nesciunt inventore non
              architecto, dolores, sapiente nisi minima, ipsa harum? Rem velit
              fuga eos! Consectetur nostrum nemo autem eos adipisci tempore
              totam inventore. Distinctio numquam illo culpa ratione veniam
              molestias nam libero repellendus voluptas, commodi quas nisi,
              autem consectetur, magnam fuga ut nemo praesentium est doloremque
              eos nostrum dignissimos. Nihil repellat explicabo veritatis.
              Libero commodi totam reprehenderit eaque mollitia, perspiciatis
              eveniet eum quo dolore vel officia molestiae laborum culpa, cumque
              unde quis dolorem ullam repellat eius sunt incidunt animi nemo
              ducimus? Odit, vitae. Consequatur a ratione doloribus maxime? Quo
              facere perspiciatis tenetur sapiente velit ex eveniet placeat
              dolorem! Commodi fuga eligendi, distinctio repellendus, expedita
              aspernatur repudiandae adipisci sint neque vel, aut voluptatem
              voluptate. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Eligendi perspiciatis voluptate laboriosam, sapiente sit
              nulla provident fuga quibusdam laborum soluta, optio reprehenderit
              voluptas modi. Nesciunt laudantium labore quidem incidunt in.
              Error doloribus dolor iusto est saepe fugit vitae neque alias?
              Commodi tempora cumque quibusdam vel amet in dolore dolorem,
              laboriosam nam culpa. Ducimus temporibus placeat similique quam
              harum? Rem, saepe! Dolores numquam minus earum facilis quae
              molestiae ratione, eum ipsum a beatae maiores cupiditate inventore
              odio similique alias quod natus maxime voluptatum. Excepturi omnis
              nam, amet repudiandae molestias vitae neque! Consequatur sit,
              placeat nostrum natus voluptatem eaque! Nostrum hic assumenda,
              officia maxime laborum dolore fugiat commodi facere in impedit
              laboriosam suscipit quam labore repudiandae. Aut repellendus fugit
              neque est vero! Suscipit in quasi adipisci exercitationem aut
              consequatur veniam ea cupiditate esse, consectetur totam ducimus
              sint saepe! Possimus pariatur aperiam blanditiis. Perspiciatis
              sunt corrupti ipsam sit aliquid explicabo et consequatur minus.
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
              aliquid voluptates. Quis, labore excepturi. Illo rem numquam eaque
              nobis, molestias ex iure, excepturi quod debitis repellat,
              consequatur placeat cum nisi! Beatae neque vitae incidunt quasi
              expedita atque consectetur corrupti optio! Maxime nesciunt
              inventore, vel voluptas reiciendis adipisci non! Omnis ducimus
              sapiente error pariatur cum illum nihil accusantium in officiis
              molestias? Laudantium, perferendis a? Facere non, itaque id
              accusamus exercitationem laborum, ex eveniet dolores totam tempora
              ea facilis dignissimos consectetur? Debitis, voluptatibus error
              maiores beatae officiis minus delectus eaque sit et? Quas sit
              ullam sed. Excepturi, id deserunt. Saepe eveniet aliquid omnis
              consectetur provident quibusdam ad mollitia possimus ipsa
              asperiores ea, nesciunt hic, dolores perferendis. Quo officia
              assumenda quod voluptatum soluta! Unde repudiandae iure, voluptas
              qui ex magni nihil aliquam sunt deserunt autem, hic accusamus,
              excepturi alias esse? Quia sed deserunt omnis? Minima a, nulla
              itaque maiores amet labore commodi tempore?
            </p>
          </div>
          <div className="about-section flex flex-col justify-center items-center mt-5 text-white ">
            <h3 className="font-bold text-4xl m-10" ref={aboutRef}>
              About
            </h3>
            <p className="para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              perspiciatis voluptate laboriosam, sapiente sit nulla provident
              fuga quibusdam laborum soluta, optio reprehenderit voluptas modi.
              Nesciunt laudantium labore quidem incidunt in. Error doloribus
              dolor iusto est saepe fugit vitae neque alias? Commodi tempora
              cumque quibusdam vel amet in dolore dolorem, laboriosam nam culpa.
              Ducimus temporibus placeat similique quam harum? Rem, saepe!
              Dolores numquam minus earum facilis quae molestiae ratione, eum
              ipsum a beatae maiores cupiditate inventore odio similique alias
              quod natus maxime voluptatum. Excepturi omnis nam, amet
              repudiandae molestias vitae neque! Consequatur sit, placeat
              nostrum natus voluptatem eaque! Nostrum hic assumenda, officia
              maxime laborum dolore fugiat commodi facere in impedit laboriosam
              suscipit quam labore repudiandae. Aut repellendus fugit neque est
              vero! Suscipit in quasi adipisci exercitationem aut consequatur
              veniam ea cupiditate esse, consectetur totam ducimus sint saepe!
              Possimus pariatur aperiam blanditiis. Perspiciatis sunt corrupti
              ipsam sit aliquid explicabo et consequatur minus.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              eligendi illo magnam hic facere laboriosam deleniti accusantium
              ab, rerum error at soluta, aliquam fugiat fugit quis! Totam optio
              nemo accusantium? Laudantium voluptatum amet maiores? Quos aliquid
              culpa rem rerum alias, dolores nam, autem ducimus vel odit
              sapiente iste labore veniam! Nulla deleniti natus dolore quaerat
              provident harum, delectus fuga debitis. Fugiat, tempora quibusdam
              enim debitis iste porro facilis assumenda soluta minus voluptate!
              Quaerat perspiciatis, tenetur laboriosam quisquam quis repudiandae
              consequuntur itaque, molestiae tempore porro debitis corrupti
              ipsum, illo quod iusto? Nam nostrum quisquam nihil blanditiis
              eaque nisi quia molestias tempora? Sit unde minima, facilis, rerum
              sint accusamus, deleniti quo voluptates deserunt ut itaque. Odit,
              veritatis quasi recusandae quia illo minima? Nam pariatur sint
              atque quo fugiat, perferendis fugit earum ad fuga ex. Excepturi
              unde optio harum dolore debitis earum laboriosam distinctio
              perferendis? Nam amet inventore voluptate, assumenda sit similique
              exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Facilis expedita eius nulla illo eum. Suscipit inventore
              deserunt autem aut consequatur a, nam fugit dolorem omnis quam
              praesentium doloremque voluptatem accusantium! Suscipit
              consequuntur vero iure, amet, quae provident fugiat, error
              assumenda vel doloremque nemo. Cupiditate recusandae doloribus
              facere eum aliquam laboriosam quo aperiam impedit voluptatem.
              Harum sed voluptate adipisci a dolores. Distinctio esse,
              cupiditate aperiam animi exercitationem placeat repudiandae
              suscipit atque mollitia iure illum rerum quam nihil cum ad
              reprehenderit eos provident odit vero ratione natus. Maiores
              exercitationem facere aut necessitatibus! Officia accusantium
              expedita cupiditate repudiandae possimus modi perspiciatis sequi
              nobis quos sint, harum inventore commodi amet iusto soluta iure
              assumenda natus esse minima officiis ad nemo itaque. Corporis,
              assumenda placeat. Ab optio fuga vero facere iste odio voluptatum
              unde, numquam corrupti consequatur dolorem consequuntur,
              laboriosam possimus molestiae mollitia in maiores, quibusdam
              provident similique dolor molestias totam? Voluptatem accusamus
              itaque necessitatibus. Voluptatum consectetur nobis suscipit illo?
              Dicta dolores omnis enim excepturi numquam ab quia consequuntur
              quam magni corrupti facilis provident iste optio aut quasi
              temporibus similique molestiae voluptatibus, ea est maiores!
              Similique alias dicta eos et nulla totam quis nesciunt deserunt
              excepturi, maiores exercitationem a maxime atque sed deleniti
              sunt. Suscipit tempora quo minima voluptatum fugit facilis
              blanditiis corporis at quos. Possimus saepe molestias neque
              repudiandae explicabo perferendis laboriosam nobis ut quia ipsum
              quibusdam qui illo magnam alias, delectus, reprehenderit pariatur.
              Ut earum adipisci, harum reprehenderit cumque non fugit
              repellendus fugiat. Quasi dolor obcaecati consequatur aliquam
              iure, aperiam repudiandae numquam architecto iusto minus, nostrum,
              eligendi adipisci? Voluptatem earum, fugit facilis quibusdam
              obcaecati labore mollitia nobis quasi, iure voluptatum, temporibus
              aliquid. Aliquid? Omnis quos rerum qui magnam labore voluptatibus
              maiores. Laboriosam, omnis sequi iste atque dignissimos tempore
              sed ratione optio fugiat eius voluptatibus, dolorem magni ipsam
              dolore incidunt officiis perspiciatis quibusdam accusantium!
            </p>
          </div>
          <div className="contact-section flex flex-col justify-center items-center mt-5 text-white ">
            <h3 className="font-bold text-4xl m-10" ref={contactRef}>
              Contact
            </h3>
            <p className="para mb-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              perspiciatis voluptate laboriosam, sapiente sit nulla provident
              fuga quibusdam laborum soluta, optio reprehenderit voluptas modi.
              Nesciunt laudantium labore quidem incidunt in. Error doloribus
              dolor iusto est saepe fugit vitae neque alias? Commodi tempora
              cumque quibusdam vel amet in dolore dolorem, laboriosam nam culpa.
              Ducimus temporibus placeat similique quam harum? Rem, saepe!
              Dolores numquam minus earum facilis quae molestiae ratione, eum
              ipsum a beatae maiores cupiditate inventore odio similique alias
              quod natus maxime voluptatum. Excepturi omnis nam, amet
              repudiandae molestias vitae neque! Consequatur sit, placeat
              nostrum natus voluptatem eaque! Nostrum hic assumenda, officia
              maxime laborum dolore fugiat commodi facere in impedit laboriosam
              suscipit quam labore repudiandae. Aut repellendus fugit neque est
              vero! Suscipit in quasi adipisci exercitationem aut consequatur
              veniam ea cupiditate esse, consectetur totam ducimus sint saepe!
              Possimus pariatur aperiam blanditiis. Perspiciatis sunt corrupti
              ipsam sit aliquid explicabo et consequatur minus.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              repellat delectus eveniet reprehenderit quam consequatur,
              distinctio aliquid doloremque impedit, exercitationem iste dolorem
              illum ipsa nihil. Sequi laudantium placeat impedit commodi!
              Laboriosam quo voluptatibus maiores. Iusto eaque facere debitis
              autem cumque natus ab tempore, quod fugiat voluptatum nostrum esse
              numquam consequuntur laboriosam praesentium maiores odit et. Iste
              soluta ex id iure! Consequatur dolorum ab distinctio aspernatur
              dolorem perferendis, soluta neque est. Tempore autem modi quaerat
              explicabo quae eaque voluptatem dignissimos omnis quibusdam,
              exercitationem perspiciatis ratione, qui nesciunt incidunt.
              Facere, ex nihil! Facilis sequi accusantium voluptatum quidem
              architecto doloribus accusamus, possimus vitae assumenda quisquam
              fugit deserunt beatae alias quaerat corporis, maiores illo
              consequuntur minus quibusdam debitis. Repudiandae facilis harum
              eum tempore adipisci! Molestiae distinctio eligendi, amet mollitia
              corporis doloremque fuga eum sapiente dolores in! Atque recusandae
              sapiente rem, ducimus nihil nulla minima tempore magni sequi sit
              consectetur facilis illum corrupti blanditiis fuga. Necessitatibus
              nobis, accusamus consectetur tempore aperiam, laudantium saepe rem
              animi, dignissimos nulla deserunt? Numquam vel, molestias
              similique quibusdam corrupti culpa natus est neque quod. Modi
              necessitatibus tenetur exercitationem beatae commodi!
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis dignissimos aliquam mollitia similique, minima
              accusantium nesciunt aliquid voluptatibus cumque iusto veritatis
              doloribus sequi culpa sapiente corrupti deserunt qui fugiat.
              Alias. Magnam nam, nulla tenetur debitis sit distinctio vitae
              aliquid alias maiores similique eum repellendus ipsa ducimus
              tempore cupiditate necessitatibus sequi culpa quis quae
              aspernatur! Autem, beatae. Sunt iusto distinctio amet! Neque
              exercitationem alias sequi saepe expedita dolorem distinctio
              commodi, nisi earum beatae vitae nostrum fuga ipsa, accusamus
              facere molestias quo architecto corporis qui et. Ex iure hic et
              quibusdam tempora. Magnam odit cupiditate non blanditiis quia
              dolorem, debitis voluptatibus exercitationem illum a, minus vel
              maxime suscipit repellendus ipsum perferendis dolor quisquam
              reiciendis repellat animi, veniam voluptas? Expedita distinctio
              possimus facilis! Ex minus suscipit ratione laboriosam nostrum
              deleniti dicta iure, debitis dolorum unde eos possimus rem
              consequatur quis, impedit molestiae non incidunt magnam expedita
              quibusdam fugit illo porro voluptates. Ut, beatae. Odit similique
              voluptate sed illum quis sunt unde fugit distinctio ipsum neque
              quas ipsam id sint et laborum inventore, vel debitis quos, veniam
              assumenda exercitationem consequatur! Sed natus non aspernatur.
              Quasi quas aut nisi beatae quos ad distinctio reiciendis nulla
              temporibus harum, voluptas adipisci obcaecati accusantium magnam
              neque aliquid similique eos ipsa facilis pariatur ullam? Velit
              quidem voluptatum fuga ea! Deserunt earum rem repellat. Maxime
              ducimus recusandae aperiam similique dolores illo cum doloremque
              tenetur, nesciunt accusamus aspernatur amet officiis reprehenderit
              fugit aut error sequi dicta est assumenda quidem id? Nemo. Hic
              reprehenderit nulla saepe ad voluptates dicta aut, eaque voluptas!
              Quam cupiditate quis cumque, et reprehenderit iusto necessitatibus
              voluptatum maxime veritatis pariatur corrupti quisquam animi
              dolorum laborum consectetur tempora. Accusamus. Explicabo hic
              delectus, adipisci sint facilis sequi eveniet tenetur expedita aut
              inventore, temporibus porro ad, exercitationem reprehenderit iste
              quas optio laboriosam! Labore saepe ipsum aut molestias minus
              unde, culpa architecto.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
