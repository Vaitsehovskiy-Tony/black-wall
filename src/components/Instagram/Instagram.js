import { getPhotos } from "../../services/instagram.service";
import { useInstagram } from "../../hooks/useInstagram";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import leftArrow from "../../images/arrow_l_mini.png";
import rightArrow from "../../images/arrow_r_mini.png";

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
  };

  const photos = getPhotos(res.data);

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

  console.log(current, photos.length )

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
            <img className="instagram__image" src={item} key={index} />
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
          alt="left arrow"
        />
        <div className="instagram__button-line" />
        <img
          className="instagram__button"
          onClick={nextSlide}
          src={rightArrow}
          alt="right arrow"
        />
      </div>
      <a className="instagram__link" href={"https://www.instagram.com/blackwall.interior/"}>{"Instagram black wall"}</a>
    </section>
  );
};

//  const photos = [
//   "https://scontent.cdninstagram.com/v/t51.29350-15/323779825_655407419660326_5617931732872599875_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=CZKb3tefSRUAX8rfZOR&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAPttxuCBC_yUkSCaEj98iWHMxoYn490BjouQ066lXJxA&oe=63DE6F67",
//   null,
//   "https://scontent.cdninstagram.com/v/t51.29350-15/320539733_830714311566886_2715237974499827688_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=F6zN6nLK6OoAX8TM1OU&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCrx7-xSRBXzqil0Jh6vH34y_tRxxqBZmGxAl5YNENmDg&oe=63DEA82F",
//   "https://scontent.cdninstagram.com/v/t51.29350-15/318145875_1218274412366627_2763492686842280228_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=0FPoBgjtdPgAX8niXPf&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfChDPHI4W_S5tWYYJ7SHD5wT2wR-Ld_4Nyh0yh8ojUSqg&oe=63DF3F02",
//   "https://scontent.cdninstagram.com/v/t51.29350-15/317001489_1369447877215862_964906759222763208_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Kw6YXG095hMAX-zTbZ5&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfB-1KB0DmRwQ8nYp88h_t39IQxLL3t0ZADbDk2Q6RYQjQ&oe=63DDFC9F",
//   "https://scontent.cdninstagram.com/v/t51.29350-15/316057272_617913556773977_4062022949225592539_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=F5l2SdVuXaIAX_GtlgJ&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCwM_870BQJlS03V9BbULYeki5p8EEDrgJMOpy7ES5mLA&oe=63DDA4FE",
//   "https://scontent.cdninstagram.com/v/t51.29350-15/315898446_2512972268844560_8119247159201090250_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=sFEdZeGU8rIAX83a243&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfB1bInXIZURAWtFPTEJXakcuz6WnOkABMcCium3RlQ9jw&oe=63DD60A7",
//   "https://scontent.cdninstagram.com/v/t51.29350-15/314929028_443212191299443_174545800150454425_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=6kZtWK3VdAEAX8RZheK&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDF0DP1bAqZa50BExxvCJgePuHcq87eHANK4RGHCQ-U7Q&oe=63DF2912",
//   "https://scontent.cdninstagram.com/v/t51.29350-15/313912679_643175404096834_76868450487291515_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=nm6pQ-9szHEAX-sTbyC&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDgqVJ3KCJZZ8-Wh5WdDHz_FstbKWHUUaaooYCJadQMjQ&oe=63DD959C",
//   "https://scontent.cdninstagram.com/v/t51.29350-15/313367987_106098118973399_6843856304660012159_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=wxoLsG3eSLkAX_rAdJY&_nc_oc=AQnmoUUuADjhf67b0MI5luBby6PNdtrjLcWvWizN7IFkNe6C64KR4mdKvfT3cMX9CQs&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCBRF_QRdv0m-LpPuo1EhOeDDfNYbPlUHNr4rm_DLpqjA&oe=63DE1424",
//   "https://scontent.cdninstagram.com/v/t51.29350-15/312685562_676736993658256_4583274660261443522_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=qtXlTqh5TNgAX89Int2&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAhpzNtOCt27m-8ulSuL_1uCiapsd3WW0ka8c7aUAoe1w&oe=63DE6011",
//   "https://scontent.cdninstagram.com/v/t51.29350-15/297396096_808158233926996_6618245214939210794_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=D1Di4QhutAoAX8udnx9&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfD9aiewZMIboCJaB4uPCRxPAcWo_9ogy_kaNfjeE1NLTg&oe=63DED781",
//   "https://scontent.cdninstagram.com/v/t51.29350-15/296099365_734592284419518_5893000280978785768_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=TCah6YsspAUAX8mf_TF&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfA1bYbd_3un2iZ6zLHnus7lM5YB-VOHJZPNP4vhiipL0g&oe=63DE9AC2",
//   "https://scontent.cdninstagram.com/v/t51.29350-15/295054398_714289092969846_2461803070429836433_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=HkNaOrsb6kkAX9cazoV&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAXeqkUJsxwq0XkNSW7Ht3Ic2IC9gjtJHUAC1LM4xga9w&oe=63DE714D",
//   "https://scontent.cdninstagram.com/v/t51.29350-15/293858767_151115114171858_781608078046884971_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=7SftdEn0HmAAX_MXIQr&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDOA5_Ea3hX2e7Px7Ki7329aCgz_Gkpzu9ymCxTtqbkQw&oe=63DD50F9",
//   "https://scontent.cdninstagram.com/v/t51.29350-15/292996596_152806167329234_5304140956540030410_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=ONF0_a1VxgAAX8z1iHO&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCIer9AoynmHIxQMteOHZdRxTAOlmAZFcUQ4UA9QBEwRw&oe=63DDDFD9",
//   "https://scontent.cdninstagram.com/v/t51.29350-15/291651685_147120957907126_2323355668487362327_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Sf7q9PnDUgAAX9OXdnu&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfADdY6wxr0g2ogiL7bfr7Bhku0AdMJU4Fevt1aGvqot-A&oe=63DF02D8",
//   "https://scontent.cdninstagram.com/v/t51.29350-15/290640123_503715341553927_3772784676510112071_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=iz5Z2QuxjfwAX-ztdlM&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCgMWIrHLkUqAvCzLcpDtdqMwSoGfqueZTP9ap7IzJ4cA&oe=63DE94EE",
//   "https://scontent.cdninstagram.com/v/t51.29350-15/289888740_1168397137342637_3596945951444567778_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Bxzs9mlfzFgAX_hPuy0&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfChAMVt272QOQqv5WSbDieN6_ckjO1m-Aved_Y_Tc-Z-Q&oe=63DE1049"
// ]
