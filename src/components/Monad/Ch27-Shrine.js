import React from "react";
import Item from "./../elements/item";
import Title from './../elements/title'
import SeaPeopleFunction from "./SeaPeople"; // 6
import { Content } from "./styles";
function Intro(props) {
  return (
    <Content>
      <div className="Frame">
        <div className="Content">
          {/* Placeholder */}
          <h4>Shrine Date</h4>
          {/* Mask */}
          <p>
            We walked from the restaurants back to the wooded area of the Niyoshon
            people, we went down a quiet path I had never thought to take
            before. At the bottom was a shrine. A small pond sat in front of the
            shrine with a narrow stone bridge crossing over the middle of the
            pond. The shine itself was made of wood and looked rather unadorned.
          </p>

          <div className="pop">
            Shrine
            <img
              className="popOut"
              src="https://ottotsuma.github.io/images/places/shrine.jpg"
              height="400px"
              alt="Shrine"
            />
          </div>

          <p>
            Once inside we stood side by side, she handed me a coin with a hole
            through the middle. We both tossed our coins into a box in front of
            us. Then we bowed twice, clapped out hands twice and finally bowed
            again. I made a small wish while doing this, unsure if we were
            suppose to wish for anything. Then We walked back outside and
            resumed our conversation.
          </p>

          <p>
            "Oh the witches hat I gave you before, I found out the previous
            owner was the witch of Alden." I said holding my hand out as she
            crossed the small stone bridge.
          </p>

          <p>
            "Wait? Really? That is amazing! How did you find out? Do you need it
            back?" She asked really surprised.
          </p>
          <p>
            "What? no. It was a gift, you have to keep it. Just thought you
            might be interested to know. Ah well there was a diary in the tomb I
            just came back from that said she had lived where I got the hat
            from, that was her study. Although I did not mention that to the
            academy, maybe I should. Speaking of the tomb, I have another gift
            for you." I said suddenly thinking of what I sneaked inside the
            academy.
          </p>
          <p>
            "Eh? Another? You only just gave me the witches hat! I refuse." She
            said in a small panic.
          </p>
          <p>
            "Relax, it is just something I found in the tomb. Since I left for
            so long time it is only right I bring something back with me." I
            said, and she seemed to agree with that sentiment at least.
          </p>
          <p>
            I handed over the set of death and wood attribute clothing. With
            Tisiel gone I would be unable to sell them or even bring them out
            without the academy sticking their noses in deeper. I was hoping
            Tsuma could at least make use of them back in Lakia. I don't know
            why I thought this but since they always lived in the woods I
            assumed they had a connection to the wood element.
          </p>
          {/* The items had to get past the checkpoints so how?  Storage ring ... */}
          <p>
            "T-This, this is death priest clothing from the immortal world." She
            said slowly. "How do you even? From the tomb you just left you said?
            Do you know what this is?" She said going higher pitched to the end.
          </p>
          <p>
            "You know what it is? I found it in the tomb, I have another set of
            fire. The other 4 sets where lost, when I lost my friends."
          </p>
          <p>
            "Sorry again. About your friends." She said apologetically. It was
            not her fault. "I suppose you would not know the stories of the
            immortals." She carried on. "How to say this? There are some people
            who know that the immortals use to be apart of this world but left.
            They built this academy, the portal to come here and many tombs.
            Their tombs were left for their descendants, as trials. Today they
            are a source of wealth and technology or so they use to be until
            recently. The technology we find now is not that far ahead. In some
            areas we have surpassed them. What they considered to be treasures
            are often nothing more then relics now. Anyway, the point is towards
            the end of the immortals era they split into three factions. Life,
            death and balance. Are you with me so far?" She said pausing for a
            moment.
          </p>
          <p>
            "Yeah I am just kind of amazed you know about all this.. It took me
            and Tisiel a lot of research to find out even less then this." I
            said taken back by how much time we could of saved by asking if
            anyone else knew about immortals.
          </p>
          <p>
            "You are not the only ones digging up immortal tombs and doing
            research." She giggled. "Now the three factions all have powerful
            members who ran everything. Ones personal power meant everything to
            them. These outfits were given to the strongest members of each of
            those factions. Fire, earth, water, metal and wood were holy
            elements to them and so the leaders each had a representative
            element. The last leader being the over all leader of the faction
            had the pure element for their faction. These outfits were less for
            battle but more like ceremonial armor. They were still the leaders
            of the top three factions at the end of the world. While not at its
            peak, the materials and craftsman they had access too..." She was
            going to continue her thoughts but I interrupted.
          </p>
          <p>
            "Okay, okay! So it is something real valuable?" I asked a little
            taken back by the flood of knowledge she had.
          </p>
          <p>
            "Ah I was just getting to that part! You see the immortal tomb of
            life was found in a portal in Utnaulach, about 400 years ago. A town
            which Lakia is currently in control of. Inside they found a set like
            this for each of the elements and one final set of pure life
            elemental, after a lot of fighting and exchanges of money and land.
            Alden holds the metal set, Herkikia the water set, Niyosho the wood
            set, The Kingdom of Naj'es the fire set, Chingaling the earth set, leaving the
            final set of pure life in Utnaulach at the academy. What you have
            given me is too much, but I cannot say no... The sets are used to
            research the abilities on them, they are worth starting wars over."
          </p>
          {/* Fire, earth, water, metal and wood */}
          <p>
            I could only stare blankly at what she had just told me. I am
            walking around with items countries would start wars over. I am
            level one right now, the least qualified person in the world to be
            holding these sets.
          </p>

          <p>
            "If that is the case, then can you send it to your people in Lakia?
            If I hold onto it maybe it would not be to my benefit in the end." I
            suggested.
          </p>
          <p>
            "Of course I can there is actually a Niyoshon princess here, it would
            not be a problem for her to do it. However this is taking a big
            research opportunity away from Alden." She replied.
          </p>
          <p>
            "I already gifted to you. It's too late to give it back." I said
            with a smile.
          </p>
          <p>"You are far too trusting..." She gave in holding the items.</p>
          <p>
            "Maybe you can pay me back in information" I suggested "You seem to
            know a lot of things I do not. I did recently lose my source of odd
            knowledge." I commented
          </p>
          <p>
            "Ah, sorry maybe this was a bad time for a date, you just lost a
            friend." She held her head down low and replied softly.
          </p>

          <p>
            "Perfect time for a date, it has cheered me up." I said smiling. I
            took out the mask I had gotten from Leon back when I last visited
            him. We had no clue about what it was or used for but I figured I'd
            give a shot asking, since it looks like a Niyoshon design. I held it
            out in two hands and asked, "Do you know what this is? I don't. It
            was a gift from a friend.."
          </p>

          <p>
            She looked back at the mask then laughed a little, "You must have an
            interesting friend to give you a gift like this. It's a shrine mask.
            We wear them during festivals and special days when we visit the
            shrines. There are two kinds, ceremonial and godly. Once you have a
            god you wish to follow, you take the mask to a shine and get it
            blessed by the god. If the shrine built for that god, the blessing
            would be better, but it is not necessary. The god will bless the
            mask, similar to religious jewelry here in Alden." She said. The
            jewelry I knew, every priest or person of the church of life carried
            a symbol of their faith. I was just finding out they where magic
            items.
          </p>

          <p>
            "Oh, then does this belong to someone already?" I said worried
            someone had lost it.
          </p>

          <p>
            "If it did, it does not now. There is no spirit mark on this mask."
            She held out a white and red mask, it had the face of a tiger. It
            was quite cute, it would only cover the top half of a face. "This is
            my mask, if you let your mana feel the mask you can see that my mana
            is infused with the mask, this is a kind of mark to bind the mask to
            me."
          </p>

          <p>
            I passed my mana over the mask and could feel the familiar mana of
            Tsuma coming from inside the mask. I had to ask. "Would I be able to
            bind with this mask?"
          </p>

          <p>
            "Is that what you want? Once bound it would be very difficult to
            break that connection with the god."
          </p>

          <p>
            "I can have a connection to more then one God right?" I said a
            little confused.
          </p>

          <p>
            She gently placed the tiger mask in her hand onto her face, no
            straps where needed it gently fit into place as if it was made to
            fit, "If other Alden's heard what you just said they would be very
            shocked.." She walked towards the shine and I followed mask in hand.
            "It is not possible to receive the faith spells from more then one
            God. However.. It is possible to make a connection to more then one
            God and wear and receive benefits from the items of other Gods.."
            With a small smile she lead me to the front of the shrine.
          </p>

          {/* Byakko, autumn, west metal, lightning (our book) */}
          {/* white stag,  */}
          <p>
            "The stag mask you have represents one of the gods of lightning. The
            white stag is from one of the local religions, Chingaling I believe.
            They have a similar religion to us, Alden puts Chingaling, Herkikia
            and Niyosho's religions into the same category." Pointing to the white
            tiger mask she has on her face and says "This mask also represents a
            God of lightning, Byakko, he is the lord of season of autumn, the
            west and metal. What is import for us though is that both will be
            Gods of lightning! Although he will not be your faith God if you
            have a first connection already."
          </p>

          <p>
            I could not help but let out a small laugh and smile, seeing that we
            would be bound in this small way gave me a feeling of butterflies in
            the pit of my stomach. To make a connection through the mask I had to
            produce a drop of my blood and place it inside of the mask where the
            mask would touch my face, place it on the alter inside the shrine
            and make an earnest attempt to connect to the white stag God. If all
            went well the god would bless the mask and it would become a magical
            item, then I could fill the mask with my mana and bind it to myself.
          </p>

          {/* god reply? */}

          {/* Hunt / lightning / direction / sun / two brothers (clone?) / white stag / messages / many different white stags different abilities, different gods */}
          {/* https://en.wikipedia.org/wiki/Tenjin_(kami) -- tsuma god -- animal is bull ...*/}

          {/* 
Hungarian
In Hungarian mythology, Hunor and Magor, the founders of the Magyar peoples, chased a white stag in a hunt. The stag lead them into unknown land that they named Scythia. Hunor and Magor populated Scythia with their descendants the Huns and the Magyars. To this day, an important emblem in Hungary is a many-antlered stag with its head turned back over its shoulder.[24]
*/}

          {/* Shinto 
Deer are considered messengers to the gods in Shinto, especially Kasuga Shrine in Nara Prefecture where a white deer had arrived from Kashima Shrine as its divine messenger. It has become a symbol of the city of Nara. Deer in Itsukushima Shrine, located in Miyajima, Hiroshima, are also sacred as divine messengers. In various parts of Northeast Japan, a deer dance called "Shishi-odori" has been traditionally performed as an annual shinto ritual.[28] */}

          {/* Something wrong here */}
          <p>
            I picked up the mask and scanned it with my mana, I was told white
            stag mask would increase my magic or something equivalent, if I had
            a suitable lightning type power then the mask might be blessed with
            a lightning blessing. Either way the item would be a common item and
            the description name would be blue.
          </p>

          <Item
            stats={{
              "Small magic increase" : "+?"
            }}
            name={"Ceremonial White Stag Mask"}
            rating={"normal"}
          />
          <p>
            When I scanned my mask what I saw was surprising, it must have
            something to do with the new class I acquired because the mask was
            not even close to the expected.
          </p>
          <Item
            stats={{
              "Magic" : "+1",
              "Disease resistance": "+20%",
              "Mana regeneration":"+10%"
            }}
            name={"Heavenly White Stag Mask"}
            rating={"unique"}
            long={'Blessing of 建御雷 [Takemikazuchi]: Resist lightning +10%, Lightning cost - 10%, Lightning power +10%.'}
          />
{/* 

          {/*  建御雷 [Takemikazuchi] - Thunder and swords  - https://en.wikipedia.org/wiki/Kasuga-taisha (Ride a white deer)*/}
          {/* Raijin (雷神, lit. "Thunder God") */}
          <Title name={'Found a unique item'} effect={'+1 Strength.'} 
            rank={'unique'} />
          <p>"You said there were two types of masks?"</p>

          <p>
            "Oh, yeah the second type is not a kind of mask you will be able to
            get. It is a godly mask, this kind of mask there is only one of in
            the world and contains the true blessing of that God. These masks
            are held in the main shrine in Otsu the capital city of Niyosho. Yours
            should show an increase in magic right?"
          </p>

          <p>
            "Is that so... Well the magic defiantly increased. Also resistance
            to diseases..." Before I could finish reading the list Tsuma said..
          </p>

          <p>
            "It's a mask, all masks have some disease resistance, I thought
            you'd know that. "She said as if mentioning it was strange. It did
            make sense since it covers your face, but that was not what I wanted
            to focus on, before I replied she carried on. "You have no home
            right? The lady you told me about said you would be coming to live
            near us, well why don't you come back to by house tonight? The place is
            really big because there is a princess staying there so there will
            be lots of room...." She suggested.
          </p>
          <p>
            "I mean, I am suppose to go back to the cliff side and check where I
            have been assigned to, but I guess they will not have done the
            procedures yet. I will come back with you then if that is okay?" I
            replied.
          </p>
          <p>"Sure lets go" She said back with a nod.</p>
        <div className="BreakPoint" />
        <SeaPeopleFunction Chapter={6} />
        </div>
      </div>
    </Content>
  );
}
export default Intro;
