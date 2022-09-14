import Meta from '../components/Meta'
import { useContext, useEffect } from 'react'
import { AppContext } from '../context/state'
import stylesHome from '../styles/Home.module.css'
import { getSession } from '../lib/get-session'

export default function Home(props) {
const {lang, user} = useContext(AppContext)
const {currentLang}  = lang
const {currentUser, setUser} = user

useEffect(()=>{

  setUser(props.charName)
}, [])
  return (
  <>
  <div className={stylesHome.landing}>
  
  </div>
  {currentLang===`PL`?
    <>

      <Meta title='Useless Idea - Korporacja Eve Onlnie | Głowna'/>
      <div className={stylesHome.headings} onScroll={(e)=>{
        console.log(e.scrollY)
      }} >
        <h1 className={stylesHome.headingL}>Useless Idea</h1>
        <h3 className={stylesHome.headingS}>Polska Korporacja Eve Online</h3>
      </div>
      <div className={stylesHome.dummy} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum eveniet animi debitis quam nisi dolor, corporis neque voluptates dolore praesentium? Voluptatibus eos aut amet? Amet rem vero eius blanditiis ipsum voluptatum odio harum temporibus itaque praesentium! Ipsa modi sit sed sint dolorem voluptas pariatur. Accusamus, placeat deserunt quas amet eveniet blanditiis consectetur officiis unde cum perferendis inventore, quam quasi dolores suscipit reiciendis iure autem fuga voluptate. Consequatur exercitationem dicta harum aut vero quaerat illum iusto asperiores fugit. Eius ipsam perferendis accusamus eum libero molestias quasi aspernatur quis unde repudiandae in fugiat nihil praesentium aliquam autem possimus inventore nam, aut itaque est laborum id voluptates impedit. Aliquam culpa accusantium officia nobis commodi in officiis enim, non dolores ducimus, minima laborum temporibus excepturi consequuntur minus molestiae vel placeat illum eos asperiores libero esse? Cumque aperiam soluta provident quidem earum architecto deserunt magnam est, recusandae quaerat iusto, fugiat quam omnis atque magni. Laborum, quam iure. Reprehenderit aut sint commodi amet, ab obcaecati at, odio autem ratione iure, enim consequuntur totam incidunt explicabo laborum quam dolorem optio in harum? Debitis id, voluptatibus explicabo assumenda, provident nulla dignissimos recusandae mollitia fugit quas facilis corrupti molestias incidunt deserunt maxime. Nisi culpa, voluptate placeat, quidem excepturi ea exercitationem iste, praesentium illo ex quaerat in. Commodi ea necessitatibus eaque hic quaerat corrupti sequi, sapiente voluptatem facilis iste quod repudiandae asperiores doloremque mollitia magni voluptate velit eum. Quod, tempore eos ab eius a rerum exercitationem illo eligendi optio nam beatae et. Nisi, optio. Incidunt, saepe ab tempora officia amet, odio ipsa minima delectus nemo aperiam iure dolorem. Laudantium corrupti accusamus dolorem asperiores eum ex commodi, hic aut illum nobis vero sequi, dolor itaque eos. Sit numquam sed odio dicta et in incidunt architecto? Velit dignissimos architecto voluptas impedit asperiores perferendis fugiat suscipit quasi beatae, quod earum aperiam doloribus rem et nam laborum voluptatibus quo est laudantium nobis dolor vero adipisci eius ducimus! Doloremque et similique ab odit aut. Similique maxime, laudantium asperiores dolor modi minus, libero incidunt voluptatum voluptatibus adipisci consequuntur provident doloremque illum officiis excepturi beatae quos quaerat soluta dolore est? Aliquam, animi ullam nostrum rerum debitis consequuntur incidunt fuga fugiat vel error? Nemo culpa esse repudiandae quidem eaque et perferendis labore fugiat! Veniam autem porro voluptatem iste eius! Beatae error repellat quibusdam illum ratione! Eius, quo magnam reiciendis dolore aliquam labore hic voluptatem, tenetur inventore est ad a optio. Ratione ut aspernatur suscipit provident ipsum dicta aliquam nisi, incidunt nulla pariatur distinctio beatae cumque eos neque commodi necessitatibus asperiores nam eaque accusamus. Exercitationem eveniet ipsa necessitatibus quibusdam aut. Delectus id modi voluptatum veritatis quae hic magnam est ducimus, laudantium perspiciatis excepturi quis. Ratione, autem. Repellat saepe quaerat voluptates unde autem, temporibus amet accusamus veniam dolore. Sit deserunt asperiores beatae esse voluptate quasi nobis, omnis, non itaque cum, unde labore est tempore amet accusamus harum fuga explicabo odio animi tenetur! Corporis, ea a vitae amet reiciendis architecto libero magnam hic saepe, adipisci exercitationem doloribus dolor aperiam, dolorum animi deserunt excepturi rem tempora placeat harum! Velit ut quam at consectetur corporis odit maxime aliquid libero assumenda nam expedita nesciunt voluptate molestias fugit quidem reprehenderit, quis deleniti iste recusandae voluptates fuga. Amet, a aut reprehenderit explicabo, earum laboriosam dignissimos doloremque minus aliquam tenetur aliquid assumenda velit ipsam non, fuga eligendi ratione vero? Consectetur quas iusto voluptatem aspernatur laborum ea doloremque. Assumenda, repellat dolorem a minima, velit voluptates vero deleniti in numquam sapiente debitis eligendi nihil modi dicta inventore eos quidem ipsa voluptas non molestias laudantium tempore explicabo sit libero. Minima accusamus, quisquam, quasi commodi nam recusandae ex vero sed dolores quam aspernatur est beatae temporibus hic, voluptatem adipisci ratione fugiat? Molestias perferendis dolor dicta in autem id at, obcaecati inventore distinctio tempore nobis necessitatibus error ratione totam, amet magnam quibusdam voluptatum porro vitae eaque. Debitis, rem illum cupiditate, alias facere reiciendis adipisci, at voluptatem voluptas sed corrupti numquam neque aut nemo. Iure odit dolore quam voluptas eveniet sequi dolorem corrupti quae totam et molestiae pariatur voluptatem vel doloremque officia quis, illo veniam rem corporis. Hic ea porro voluptates nihil mollitia maxime fugiat numquam quos amet itaque voluptas cumque dolorum, voluptatem officiis quam delectus alias sed iste ipsam! Praesentium nam assumenda magni voluptates aliquam sequi incidunt odit obcaecati corporis reiciendis vero earum vel, cumque enim ea commodi inventore officiis at ipsum, voluptatem quibusdam laboriosam et dolores nostrum! Ipsa recusandae iusto ex nihil, ipsum autem repudiandae culpa odit architecto quisquam, maxime error officiis velit voluptas id vel impedit harum mollitia optio aliquam incidunt iure molestias. Voluptatem quibusdam asperiores consequuntur repudiandae minima quae voluptates, atque molestiae, harum mollitia inventore reiciendis ratione non similique ullam nemo veritatis vel. Consectetur pariatur repudiandae adipisci. Ex accusantium perferendis tenetur iure ipsa laudantium aperiam molestiae ut ullam molestias tempora porro similique, sunt dolorem esse veniam vitae praesentium soluta repudiandae pariatur assumenda aspernatur voluptatum? Assumenda dolorum delectus labore. Illum facere repellendus hic sunt ullam, eligendi officia itaque vero vitae, incidunt sapiente, explicabo accusamus! Voluptates alias ipsum eius sed asperiores? Dolorum, debitis. Quo, quisquam excepturi illum laudantium quis officiis praesentium! Dicta, corrupti ratione. Repellat culpa commodi ipsum animi sit voluptatem, accusamus dolores fugiat dolore odio deleniti quam eaque amet quas illum laborum unde ipsam ratione. Amet sit temporibus sed nihil eos! Eveniet iure quas atque molestias eos, labore mollitia ut quisquam voluptate accusantium nemo laboriosam sit enim ea! Laudantium ipsa aut nam ad nulla. Pariatur ea facilis ipsa dolores porro iste qui animi aliquam corporis mollitia atque, maiores inventore maxime non soluta ab sint consequatur. Fugit aspernatur a perferendis! Accusamus aut, fuga molestiae porro veniam quasi voluptatem maiores optio facere non, ut unde! Maiores quas quia aliquam ex sunt, molestiae culpa, neque nostrum aperiam qui quae laudantium id voluptates dignissimos quam. Sint excepturi ipsa nulla hic sunt, dolore rerum quisquam eius minus, repellendus, dignissimos ut quia ipsum explicabo facere! Laboriosam voluptas ad nisi consequatur, harum assumenda animi reiciendis, provident accusantium autem quas, earum tempora voluptates explicabo facere amet fugiat dolorem error doloremque! Ex sequi voluptate odit. Veritatis eveniet dolore inventore mollitia a pariatur vero dolorem natus tempore, fuga maiores.
      </div>
    </> 
  :
    <>
      <Meta title='Useless Idea - EVE ONLINE Corporation | Home' desc='Homepage of Useless Idea, an Eve Online Corporation' keywords='Eve online, Useless Idea, poland, polish corporation, Discord, pochven, PVP, begginer'/> 
      <div className={stylesHome.headings}>
        <h1 className={stylesHome.headingL}>Useless Idea</h1>
        <h3 className={stylesHome.headingS}>Polish Eve Online Corporation</h3>
      </div>
    </>
  }
  </>
  )
  
}

export async function getServerSideProps({req, res}) {
  const session = await getSession(req, res)
  if(session.charName){
    let charName = session.charName
    return { props: { charName }}

  } else {
    return { props: {  }}
  }
}