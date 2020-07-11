import React from "react";
import { Form, Input, Button } from "antd";

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: "정중식",
      },
      content: "첫 번째 게시글",
      img:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhMWFRUXFxgYGBcYFxgXFxcYFxcXGBcYFxcYHSggGBolHRcYITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHSUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA+EAABAwIEAggFAgUDAwUAAAABAAIRAyEEEjFBUWEFBiJxgZGh8BMyscHRUuEHFEJi8RUjcqLC0kNTVIKT/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIhEBAQACAgICAwEBAAAAAAAAAAECEQMhEjEEQRNRgWEU/9oADAMBAAIRAxEAPwD2FCVCoAIQhACEIcgyoUAr3hTAo2NHBCRCCKkSoTBEJUkpEEISpg1BQhACEITMJEqRACEJUAiEIQREhSpEwEJUII5CEKFBCEqASElQ2KcmV/lPcg4wKuP7ULQwOM2B8D9juuZGL/3SA3xP+VtYftatE8rFcvHna6suOSN4GRI/wlVLDVi3WSPXx5q64Lql25rNAoQkQkqChIgglWf0t0kKAb2cxM2mAAIkzB4hZWH6wOdVEkCmeIAgRrm3M8OKG+Hx+TPHyk6dIkQ1wIkGQbgi48EJsCpEITMIQkQCoQhAIhNc4IzcEEUoKEhQCoQhBHIQhSoqEiVACbV0PclTamiKc9uVo0QKhgSeJW1hmEcFTAaCbCZ7laZU4QuXDUdOVti9TA4+CnabRss3+YvcKVuJ3C6JlGNi3mvCa5yZnnXZNqvgKto0mzJ8rPOIds2x19PypxOx8ExpR6x4Z72NyCQCS7QEWsZOgF1zuApvrOpNfIEWgXynRx2NgPVdB0njBkLHuczMMstiYIgxmBHorHRECm1jXSGtaATrAENmLTAUZYS5S36dXF8nLjw8ZFvCUBTY1guAIupSmuEKnWxoDgFbl91dBSyq1A5hIUqC0kSFyi+KEypU4apiRK58KGpX1gwEnwjqbqvUkcu78JLkiBuPIPHbZaVB3De6wcfTdqQHDZwsQeY1Wp0O4lgnn9Ub7PLHUaBSIQqZEhCEJEkSykQoUVIhCYCa5spyCg45nG4xrKpY4RfXjPFS0nHUGQs7rZgyazXAfMI8QrvReFLWjPOmh2XDJfOx25THwlaDKOb35KxSYAb7+yqdXEBqoYjpymz5nb68J0XR5SOfVrpABCzqtW4bw+ioUOmmPs14J5FM+KS8Hw80XlgmFdJRAyweCzKNV3xnMEFuszca28x6pv8AO5RdZFXGZQXDd7vHUq5nKXisdL4pj6h3FMSe+PwPVaHRWJa2g18R2Wkjh2ZjwuuBo4o1K0SZL5dP6ZP2C6b+a+GxtM/M60DTcegRM/s7i6PCV3VhMZW8DqVYq4cKHosjIO4KfE1RC02zvslOlGilITKJspC9BInNUeSFO5QvKAMqgrNjf8KbMlIDuRQpj410y02kaj0P9wWn0fSLWAHWFmVKJdUDHC7TLTxB1HMfhbYRD5PUgSJUipkWUiEiAlQiULNQQhCAJUVWqAkxFYNFysKtXLpDTffu2UZ5zFWOG1nEuzuGkBK+pZZ7MMRq8zx/KzusOMdRoveDoLd+2qxl3210zutnWAUeyy7+A0HvgvN8fia9QlzzlH9x+2y6vpCmKYDTd+UPqONyXvE+AA07yuA6YxpdUImADEcPcJzjlvYyz11FjDdIvpPDg8tOxBMeR1XqHUfrCcS1zakCoyNNwdCF40HZrSuw/hniHfzTRxBaee4+iXJx67gwz31XqnSgOUwe9ZNPEECBvJMHjAHdpqtvpIdmONlnUcIXOyNE2/6r2UY9VpuaUuhejiHNdY6bbFw3OsgHyWq/BvzX/pInjchsytXB4Msc0OE2y7Wga+M/RaTcJeY2895PiuuY9dsbl2TDAhkHX8BRVKkG57laxJDGlzjAAkngLkrxLrb/ABBq1ajhQd8Ono2B2zzv8qd6RO3tFPHM/UE/4wdoV820+m65M56hv+oruupvXWHNpVuQkz6peX7Px/T16m5K5qioPkSIU5bKtCoRtHihuYHWQoukKZiRI23WS2pUzgAkEm2vjIlLK6bY4eUdExubtEXCkTWWCUlWwvsJCkKQlBFQiUieglCEIWSgmuKUlZ+OxBBDQlldTZybulPpPEye5Zza8aqSqQ5+Xhc8E6s4TpfkVwZ57u3XjjqaQDGQRMQdDNijpCizEUXstcRzB2VTHUc0nfhc+iqtJEQ7IRwsPL9jv3qsMqMsY43FYioyo5ldpFQAAT/VAygjjNlzPTuJJpNpuAIY95aYAc3PBe3NuC4F0EW43K9VxeLZWGSrQFUXgywfU+qxcR1ewrzem8cWmpNiJFySY5LaZd7Y3C15PRJ0HovSP4X9Glj3V3iwaQ3m6b+Q+q2MN1XomzaDGNm5iSd7SZA8VuUuj6dJkDsgAcBa/D3ZPLLYxx0uOxma5t3qz0XiAHDKMwvcedlxVfpVzqsUyMgtLiTm5xutfDdKVaYEZS6J1IA1mRBme/ZLj9tbx2zqO+YWvuNPe2qsUiAYK5To3rAXuDH0zTcflvLSeAOx5Fbrq5MQJjzsumObLGy6cj/GLpg0cM2iz5qpv/xaJPrHqvCa3ZE7letfxNwr6r21LnK1zYDSYBAgz3zPIry2qRlcCwOlsAn5mEODg5p8C08ilReoqUa5B1hdv0D0ScTRc8ggNcG/EF8riOzPCdOB0m64SkIMwvVep+LfhsHUp9lxxNmti7BljN6m3IKvHcR5arvOp+Oe2mylXIzhsgzOZvHw08F1LXc1wXU9r6zxUykMp03UpNi95qOebcg6PErsG0TxI8SjS7qrNZuayxcKwsrluWG5Sc3iLK87Mw3dLeafWILcw1HcjRy66WQUSoqNSRKfKpkCUiCkTIspU2UI0EyCUIhZLNcVi458ku1jRbFU2Kwa+HzGJ34hYc9utNuKd7Jg22zHX3xT8QzcR4qPGYd7W9giw3/YKrhcS4ghxMj+231lcVv06J+4bUquH9II8j3hVMTTFnRHLTy284WnRwV8xdPLTw1T34LPIA8dvRObG4w6OFDiTExxv4K1h8kxliO88rLQwvRga3t3M7EhMwmELC46mbbWW2tNMsuO+Wv4t4akI0t78lT6e6DbiKRYXOYdnMMGfGx7itKkT/VHmp21R7Oq2xkrktrwnpvofEYXE0s7wWgjK6Ylo1lvctzD4x2WtVHb+EwlrdZIEgc7ld71v6KoYig4PEOaCWuFnA8OF4Gy4Dqf1XNWHve8MNyGhtxfUmZ0G3OyrLj7bcXPcZUnVjE9I1WPDsPUqmQWmG0w13e4jSV6l1fZXyTXpim79OZrrcZbZWcBQbTaGtEAbTotFrlrJJNRzZ53K7rPxOG4Lk+sXVTC4mXPaadT/wBymGyf+TRqPNdw+drhQVaQKpDx5v8AD4B/+1iKLtPnDg4b6Hktro/qcxrg7FYrNtlpyJm0ZtY7l0FbDsqVHQ2HN7u1HG2qZhWNzfDc0NOgNhqN8uk8iFPnG04Mu+vXbXoYylTaKdIQ1tgAIAVmjip19FiNAFX4ZaOAue+y3MJS4Aep+qJdpzwuHtbkOCbhjLSI+n2U1Omo6UZiPsrjJSwtYyWkRBMX1V6VWxVODm0CmBVQqeSkJSEpJQRYQkQmFhCIQsVI6ix6bIc4jTvWpinGDCyK1cNaTbzhc3yL024opdJPMxFuRd9iE2hRynYd5d/3OSYeu55N4HAWHnv4q+3DeHiuO9+nTeuk9G+4+v0VtjABsquHp5ePj+NVYLpW3HJGOV7NfG35Veq48YU9Uxrb7/dUanaKvLLQxgFSTrdOq1o1nnePVRtwTd7nvj6KKr0YzcTyLnEeRdCOPM8pGP030i+rmo0Lu3dfK0bk+CTqyDS/2nWc0R/yaLD/ABtPcthtANGVjIjawEdw0S4rA5ssSHgSHCJGxGkHf3cbztN6a+FrGBI8/sr4cCuaGPq0wA6kX82G555SbeZUuA6YDjBpPZP6tT4iZWksjK4uhY0jRPpgHUKGjUkWPgVZZBVJY56HLcQaoPZN+cnUfdU+k+jnOc1zbEa8Y1ldVlsqFVt4U+Ms01nPnLv+Of6TwbnPY+mJdYHkRoT72W+ylaSLqOtRIu2J34lT4dxjROYyUs+W5YyX6SMYqlMw8312V8BUarO2CrjKEx7cwTaWgUuKdDSoKRtoqhX0klCSUkoI9CbKEy0sykRKQlYLVsa45TAXPvwTye0Q1vPXwGq6WqbLEqOAde65vkSa3XRw3XR2GaGiACeeg/P0Upe48PD3JT6NIuvoPeg9hTCo1l2i+xOveBsFz6tnd1FXKI20CLvMcoue4flSHEfpEczc/t4Kq6tJvcp+WVnM7vWKvHftHUMlOYyEoYlhVDMJulDOKGi6kbwW3FU5IWNAdorb2bnl6qtPaHuyvi7V14MclRg7UKy3DtMEhQ029pXqI0WkTabkj8qxSdPf9UrmKNtinpK4wqDEN9lPL7XVKvigZE/t38kiV8Z0qynY31sJJUGD6cpPMAnyj6qji+jCXZiA4eP5/ZR1OjQIcwFrhOtx+yO16jraT5CgxjdCq3RVVxF/rdWcdoqiPVQYgdm2qiYEF4jS6VpVQqWUJspUyOhCYhIlyUSmygLFoCFn4yAdMx/6RzPH3qtAu4KnjhZTnOlYXtmjFOLovB9eZ/GyeamZOZBlMDI0Xl5WuuSJKLFPmUAMWT2pb11AkASc0jikc9aTJNiPdOLlE4oL9k8chYe0w4e91otsFlkq9QrgjuXXxZMs4kY3tequ0mqnRfdXqR0XRKyySwo6jJ0U7Ujyq2hQxNWR79j33HJeDMgkc+fBw+41+mn0jAaSsiliQfG3iNWn6jyU5LxXcK97eBHvh9lcHaFrHh+FSocWmR79fqtBpsniMkFGzreWyvPNlSxVObzB4/nik+I4CHHx2VF7QVXHMQnNKipXkzKmVJoSppKQvTSkQoviIQe1tOlMlJK51nSquNcMplTuKy+k6uwNypyuorGbqvhn2MKwFBRpQArAC83KduwrbqTMmBDnJTRBxUT6iHvVd7neCm3RyJC5NDvNRF5TRUvKJkfisAqSm5Q09O9WWUvfiujj3WeazhnaD2Vp0TsVlCnwV6kZhd2H+ufJcfUhVatbcFPfTPgoqlOy1RIqY+oSPe6yadAyef128dvFXMW8gwLjSPwkolZ5ataTqLWFaT2hruOP+fqtBhtqqrLG3ubqYErSRnkkdUBUVV9iDEc/eic+nF1XeJk7JiI22m0RqPeo5oNRVmVP6TYicp5cPf7KpiscBM2cJkd2pH4VF47X31oVarjANTC5bG9ZY+QSsTG46pUvJ7t/3WeXLjG+Hxcr7d3/AKqz9SF5vmdxKFH543/45+3swekzKHMlBUeTl0kc5ZOLu75Z981fe+yz36zfzWXNl0vjna1R04J+VMwpMaKeFy1qihNKlcFGQs1InJjlKQmuYlobVqojdVnPjayuvYBqmOp8UaqtoqGIH7e9lo0X89/us/4W6cyR4LXjy8U5SVsUxvKlw4j36rNp1bfZXMPUg8P8ruwylc9mmmxyZUAUbag0lSVXSFvGTMrYftd6koYURopqjZgp401S8Zs99HNpjcbeaeAAExzrJkkqySZiTyRUbwS02plWpCCcZ1pqVKZDmmOHIrAxVb4haWktc6DTMxcG9IniD8p4Fo3GXZ631S+7DIE5mcB+rmPoubodpj2bwXtB4tHbHiyT/wDRqx5Lqu/hwlx2ZXbnBqAQ4ECo2IgmweBsCbEbOjQOAELJV3DVpOaJeAcwP/qsjtA/3RruddQSYMW0NMNMtIlp4tOhPPY8wVz5TfcdfHddUzwSqL4qFGq13Hq4KcCoQnBy0mTx9ErmyrZZ4J+KqBJTWXLd9Lwmuz6JjUq4CqtNpVsLOKpCEwtUkoS1BtCWphMKdwUTmpBTyZjPBFe6tGyjLLImJ7UHm+tlISE8MzOsLC0qT4CqSi2GtqKw2tzCg/l0rKBW+Fyn0zy0tNO88lYp1iZBVVjXBTNo35LqxrKpmP4Jxao20yLqYXWiKUMUzBCRohOKZEe/ZQuCc8o1CA4DrXUayrLLOF5GvksAP7QrUwJaQ5zOEHUf2HSNpWz1zLRUJ397Lia2NcHS0wR732WPJjuu7j5JMGhjqgo1HNa49k9k7xqx3lBS4jGCrQc5ph9Mgubp2XkAub/bnLbbF7tAQBQ6TIqBlVsXY0PaL5C2abfAtY0+Pcoui6vw6rXGMt2uB0yuGV0jcQSjHCSllzWo/wCYPFC1P9LH/wAet/8AqP8AwQtPxxH5K9XzILlFmQCvMmavEzEBTUiq1T5grjCpt3TnUTsCmaFExSKomnOCSEmZLKRGkJsJ5THlOBE5t1DieAVgaqPJJR9GMPYARED13JVilUbvZMLbKFtOT6+S3w3EXVXg0R9Ux4j7qtJGimpkz36raZI0lzW9R3qSmZTDtZSObuFrEWnAAprGwiklqbR75KolIHpr3Kqa0SkpVC4pjSwDdTOcm5YTarxBKYeY9eKgdVM68VxOIF10/Wqu2pVePldJ7iuXfzU56az0KNUtMj9iNweSdWpj5m/Kdv0nh+6iTqdWLbHVR7Uuf6hV/WfMpVTtxPkhHZvaGpEIXkxvUb9VZpIQqhLlJPCVCpFNOiAlQkCuUT0IToIlHvyKEJ4FTm/KE1mp8PuhC6J7jMtL7lSs298UIW2JVK/Ue9int0QhaxFNHv1Q7dCE4ln1Pm98VZoaeKEIntS5wVXH/I7uQhUUeQ9ZPn98lz9TU++CEKM2sQu9+qVKhKex9lQhCS3/2Q==",
    },
  ],
};

const PostForm = () => {
  return (
    <Form style={{ margin: "10px 0 20px" }} encType="multipart/form-data">
      <Input.TextArea
        maxLength={140}
        placeholder="어떤 신기한 일이 있었나요?"
      />
      <div>
        <input type="file" multiple hidden />
        <Button>이미지 업로드</Button>
        <Button type="primary" style={{ float: "right" }}>
          짹쨱
        </Button>
      </div>
      <div>
        {/* 이미지 미리보기 */}
        {dummy.imagePaths.map((v, i) => {
          return (
            <div key={v} style={{ display: "inline-block" }}>
              <img
                src={"http://localhost:3065/" + v}
                style={{ width: "200px" }}
                alt={v}
              />
              <div>
                <Button>제거</Button>
              </div>
            </div>
          );
        })}
      </div>
    </Form>
  );
};

export default PostForm;
