import React from "react";
import renderer from "react-test-renderer";
import { useStaticQuery } from "gatsby";
import Index from "../../pages/index";

const data = {
  file: {
    childImageSharp: {
      fluid: {
        aspectRatio: 1.3333333333333333,
        base64:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAELklEQVQ4y33TeUzbBRQH8PdrmxiHzsS5LTBQaPvrr5Qe0P560pa2nG05AsgxpCQo1wCFrGORGWGbi/Ngy0g0kowxXSLBTTMyxMkc6sQwEBhHOctRqYthCBMnkUXo75kN2ExMfMn3309e3jcPAADu5R8Cf0SArRz50sO6a07mLFoyOUuRqewFXRJ7QW1n3VHaYIG2woLKDv87vRITpPwLfGUEYTUuDVYSHHDPlAXLxlRY0iRCDZcLE4o4YjQqDebicsATnwvu6Mz/gj0iI7iKj7NvVtXDZGFtSZezvnMl4cWGZVveiT+ic8rvWjLTl3UpGsgLB1d0FnS03IDJXVzWpEjPHpeaiMHCaugvqoYxjW0TnDKnQ09yMfubbCfcsuU3dycfQK/EiFMiA7pDDTgjM+MvKtufUxq7pjYj/2nnqXNP4E4eYJgJ3IpYaE97GVqzimBMl7gFWjLAHaUhvPYYmNLGX5ksKMep3JK12ym564sJmRuzcotvjFQxHoH6ryWu0rvIV43coXTnN8Jjo6fpOG57Yi7xiaPsMTistgICPAjhchzoTnqtFCWZqRsOZyWTX/sG0/V2HeN9Ppz5lCvFtGASDwZTeEoYgR/zpOiiNMNrZy5y1g6dhlE6dhMclZmJLdCvL7/MHWDUoZ9U5NunisCnIpVM66tO5rcQmmkMJBnlnt2+KG7IhkQouK8ODMJenuJr+VYXI9s3HBMbtsFdnaUHf98ZqcIAZYRvR5gAn7VE4g9FFegNlOA1Sy5eTK1g2sz78ZLKvn41VIcTpOrC8JN7odfPnzUdm70JzoYZiCVgwxLs4I7nl/vOtjTj+xeamKJjNZhxtBZHiirRu0eAdYXvYnLjEKafvcVYP/P8/VZVE85w5XWefWHQGxHHccft3wS7pUZWn0gHQ/IY9Rc8mW8+ybHuLT2y0ec87uuoOcmMxqQx40EyZl6oZaYFWuY7cRRzXpuy3h5hxRlKXeXh0+AS6Tmz9rxNsEscyR4hdTAoNWU18qX4XkkMVh+Ox3MxSszbG4Tfh8hwPljO9FQc9o0VV2zc3k2t/8oLvf+zUoqjPL1jPFADE5SGPb29Yb/EwBoQ6aFXGqWeEmpaLlst7R8V2Huu2Myz13iKlX5Sybj4SjzGC8MGvhSHXgjHNyXh+JVUgUui6IRVngEmxUbWo08ZFRtgkNQQ/WI9rFI6+BAbHxTEHgPpM+M6q3+rQE5e5ocbXUJN9gClrrwhVJ28xJc3Xecp2zyqeN5chBmGZSbiETggNkAvpYUeiYGYFmo5Nz0fPGz9J6BhUJsAbRQNHRQNC3w1zAbLoYtUQANfDnNUAmBKGWDOUUCT4/Evd514B077B8OJ5/yhzj8Y6gO48DlFw1WJnuiU6InrpIL4lpSzugU0u4ek2T+SCk6zkOagKpnAmAJA2+uAUS89xP4BgDrLjNX2uiEAAAAASUVORK5CYII=",
        sizes: "(max-width: 577px) 100vw, 577px",
        src: "/static/b34180dca10471d1d1cc58f9386e801c/1d32f/pokedex.png",
        srcSet:
          "/static/b34180dca10471d1d1cc58f9386e801c/69585/pokedex.png 200w,\n/static/b34180dca10471d1d1cc58f9386e801c/497c6/pokedex.png 400w,\n/static/b34180dca10471d1d1cc58f9386e801c/1d32f/pokedex.png 577w",
      },
    },
  },
};

beforeAll(() => {
  useStaticQuery.mockReturnValue(data);
});

describe("Index", () =>
  it("renders correctly", () => {
    const tree = renderer.create(<Index />).toJSON();
    expect(tree).toMatchSnapshot();
  }));
