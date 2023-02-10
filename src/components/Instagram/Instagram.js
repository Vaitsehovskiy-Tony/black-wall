import { getPhotos } from "../../services/instagram.service";
import { useInstagram } from "../../hooks/useInstagram";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import leftArrow from "../../images/arrow_l_mini.webp";
import rightArrow from "../../images/arrow_r_mini.webp";

export const Instagram = ({ content }) => {
  const { isLoading, res } = useInstagram();
  const [current, setCurrent] = useState(0);
  const isLoop = false;
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => previousSlide(),
  });

  if (isLoading) {
    return <h3>Loading</h3>;
  }

  const photos = !!res.data
    ? getPhotos(res.data)
    : [
      "https://scontent.cdninstagram.com/v/t51.29350-15/323779825_655407419660326_5617931732872599875_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=dF4ABb1M-IwAX-R36D9&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfB-O0to1pmEMfTPy8SHP6ALlaqo1ZNYhlPvAX2GMtWEIg&oe=63E65867",
      "https://scontent.cdninstagram.com/v/t51.29350-15/320539733_830714311566886_2715237974499827688_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=uLVuWUPQJ5UAX_x3kB5&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfD2os4Os9CCmltlgkKxmuL0qtAOTdhASpyqYrSh-EoS9g&oe=63E6912F",
      "https://scontent.cdninstagram.com/v/t51.29350-15/318145875_1218274412366627_2763492686842280228_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=-227HOkbl6IAX_YEmCk&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAjejyUz4N_5534_KJIk7LfQYaiIBS87Id0MUZeK_8pcA&oe=63E72802",
      "https://scontent.cdninstagram.com/v/t51.29350-15/317001489_1369447877215862_964906759222763208_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=dBhzYUwriUIAX-l9of-&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDuv9lM-rWNzCgLC7tplptBCgFE6DVReJEm8qN2lhP6sg&oe=63E5E59F",
      "https://scontent.cdninstagram.com/v/t51.29350-15/316057272_617913556773977_4062022949225592539_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=ryaYVV_jePYAX8OwP_Q&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBwF5mCstrdzKANwn0MI4FgwztHlWJflewCtiWH6r0UsQ&oe=63E58DFE",
      "https://scontent.cdninstagram.com/v/t51.29350-15/315898446_2512972268844560_8119247159201090250_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Ty9rVAIBo1oAX939FLH&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfB5fm0fCr50OpWRB9_pglVnsHZL3wiJqvAFp-paSAa5ag&oe=63E743E7",
      "https://scontent.cdninstagram.com/v/t51.29350-15/314929028_443212191299443_174545800150454425_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Thn2Cdi7B64AX-tPtKH&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBGoBaPT-eEvhEpH3Uyx8CXiARG8FGOKmWTVWpiS6NvJA&oe=63E71212",
      "https://scontent.cdninstagram.com/v/t51.29350-15/313912679_643175404096834_76868450487291515_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=pxrmQY69qr4AX8KJnP9&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDoHZn5xcecUnnpQV_FmCm4k-O_PV78GOx60ZoybBU2eQ&oe=63E57E9C",
      "https://scontent.cdninstagram.com/v/t51.29350-15/313367987_106098118973399_6843856304660012159_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=FTFJ9MoEAzwAX8DMKDp&_nc_oc=AQlvAg0-1G42REz6Iwh-2lNBZ-i_9JgNulzJ0CuvRwyd9HU6hXtVQYBj_j7hs8iOsbg&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCIT30hpRs7CD_DpV2qS_Ix3H7utAXXQT15oKAnH1u9ew&oe=63E5FD24",
      "https://scontent.cdninstagram.com/v/t51.29350-15/312685562_676736993658256_4583274660261443522_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=enr91CZKP8UAX9c5Tj1&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfC5zh9wp4W82eTFeU0-PsKEuXOJf9YIcF0XC5UenkSEmg&oe=63E64911",
      "https://scontent.cdninstagram.com/v/t51.29350-15/297396096_808158233926996_6618245214939210794_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=JFM8qIyHtQwAX-OTUUv&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBY_5otfUc5nBKJ1nCaRQnHOjA9DN2tet9ewetj01XAvg&oe=63E6C081",
      "https://scontent.cdninstagram.com/v/t51.29350-15/296099365_734592284419518_5893000280978785768_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=4JEAOBMar_EAX8H3VhG&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCdnEgO_B-y9OuuhTtUPlK4e9j_LIhUvgdod4zG8QWVcg&oe=63E683C2",
      "https://scontent.cdninstagram.com/v/t51.29350-15/295054398_714289092969846_2461803070429836433_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=IhzN0-RHWToAX9IiQGS&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCI8RLffeQD1OQWD0x-zhX7ZlciUstbhzNLg7QeeBkdDg&oe=63E65A4D",
      "https://scontent.cdninstagram.com/v/t51.29350-15/293858767_151115114171858_781608078046884971_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=-LtrxxP8-vIAX_jTOIj&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDGbWjo3bFqXW0EXK20ZKUVWl5qYlTAgjE7cy-a3e_z2A&oe=63E73439",
      "https://scontent.cdninstagram.com/v/t51.29350-15/292996596_152806167329234_5304140956540030410_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=pFDu3OFOGWMAX-LkKwJ&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCFW7-Y7SsND_7LCZwBJIbGH5N0q3xjw07Cn6ZWRe54nQ&oe=63E5C8D9",
      "https://scontent.cdninstagram.com/v/t51.29350-15/291651685_147120957907126_2323355668487362327_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=sK6QfsweYKgAX-FWAII&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfClC2YG2IiZnpZ_W1DK0stCZcb2qWIVQL1xbH7PZroMOA&oe=63E6EBD8",
      "https://scontent.cdninstagram.com/v/t51.29350-15/290640123_503715341553927_3772784676510112071_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=fNeJf-6_l5AAX_zqek1&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBRlZzcbdYkLlv_zL70ida7lUFfv5YONzBOoXK56wpcVg&oe=63E67DEE",
      "https://scontent.cdninstagram.com/v/t51.29350-15/289888740_1168397137342637_3596945951444567778_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=SZIkNZAPhdcAX-sx5rD&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDjHeW17MZVzA80vR22cGA4OXgYXwafu1Le6w_PTmyrxw&oe=63E5F949"
    ];

  const nextSlide = () => {
    return current < photos.length - 1 ? setCurrent(current + 1) : "";
  };

  const previousSlide = () => {
    return current === -1 ? "" : setCurrent(current - 1);
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 37) {
      previousSlide();
    } else if (event.keyCode === 39) {
      nextSlide();
    }
  };

  return (
    <section className="instagram wrapper">
      <h2 className="instagram__title">{content.title}</h2>
      <div className="instagram__line" />
      <div
        className="instagram__slider"
        style={{
          "--index": current,
        }}
        onKeyDown={handleKeyPress}
        tabIndex={0}
        {...swipeHandlers}
      >
        {photos.map((item, index) =>
          !!item ? (
            <img className="instagram__image" src={item} key={index} alt="instagram"/>
          ) : (
            ""
          )
        )}
      </div>
      <div className="instagram__buttons">
        <img
          className="instagram__button"
          onClick={previousSlide}
          src={leftArrow}
          alt="instagram button"
        />
        <div className="instagram__button-line" />
        <img
          className="instagram__button"
          onClick={nextSlide}
          src={rightArrow}
          alt="instagram button"
        />
      </div>
      <a
        className="instagram__link"
        href={"https://www.instagram.com/blackwall.interior/"}
      >
        {"Instagram black wall"}
      </a>
    </section>
  );
};
