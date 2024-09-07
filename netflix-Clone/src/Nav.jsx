import React from 'react'
import "./nav.css"

function Nav() {
  return (
    <div className='nav'>
        <img src="image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAKgAswMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwUGAgQBB//EAD4QAAICAAMBDQQJAgcAAAAAAAABAgMEBRESBhMhIjE0QWFxcnOxwTM1UZIyQlOBobLR4fAUkxUjUmJ0gpH/xAAbAQEAAwEBAQEAAAAAAAAAAAAAAQMFBAIGB//EADURAAIBAwEFBgIJBQAAAAAAAAABAgMEERIFITFBYRMUUXGhwTTRIjM1REVygYKRBkJDsfD/2gAMAwEAAhEDEQA/APxsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHcqrIrWVc0l0uLOUnJpRTbfIkhklxaeGj4DuVc4LWcJRXXFoRrsmtYQnJfFRbIyidMs4wcAk3m77Gz5GfJVzgtZwlFdcWhlBwkt7RwCRU2taqqxrusbzd9jZ8jGUT2c/AjB1KucFrOEor/dFo6VNrWqqs+RjKI0SzjBGCTebvsbPkZy4TUtlwkpP6unCMoOElxRyDuVc4LWcJxXxcWjgkhprcwDqMZTekIuT+CWolCcNNuEo68m0tANLxk5B2qrWk1VY0+RqLOAHFrigCTebdNd6s07jIxkOLXFAAAgAAA2d1cbqZ1T+jOLTMxlsZV5pTCX0ozafatTVFNiaN6z7D2JcW16/elw+hnUJ4Uo9D7vbFtqnRrr+2ST8m17/AOyTdFzOrxfRjc7zOzxX5IbouZ1eL6MbneZ2eK/JE/dyn8b/AG+x6bczwlNkq7LWpxejWw36FbnWOw+Kw8IUWbUlPVrZa4NH8SLH4DF2426ddEpRlLVPVcJX21TpsddsXGa5Uy2lRp5Uk95m7S2neuM6NSGINtZw/Hxzg0WFzPBqmmt2vb2Yx02Hy/8Ah7b7q8PU7bZbMFyvTUyNHt6u/HzNHnfu23tj+ZFVWjGM4pczS2ftStWtKtSSWYLdx8Hx39CvzvHYfFYeEaLNpxlq+K10dZc1zjXhIzm9IxrTb6kjHvkZrZwlZlsoQWspUNJfF7J6r01CMY8inY95Vua1etJLVhcOmSL/ABfA/bP5JfoV08RXic9ospltR4Fro18TyvKsclr/AE7+eP6nGV+8MP3vQsjSpxTcXnccVbaN7WqUqVxDStSfBrg+rLfdFzKvxV5Mzxod0XMq/FXkzPHq2+rKP6g+Nfkiz3P8/l4b80TbpPa4fuy9CHc/z+XhvzRNuk9rh+7L0PL+IR0Q+w5/m90evIcRvuD3pvjVPT7uj+dRX25frnO8Jf5cnvn/AF6f0IslxG8Y6Kb4tnEfp+PmaXYjt7ei2tNNeoqqN0ajxzO6ypQ2nZ04z403v8ly/VY/g8Wc4j+nwUoxek7OJH1/AzBYZ3iN/wAa4xfEq4q7en+dRXnRbw0w8zE21d94u3jhHcvf1AALzJAAANhird4w07f9C1Pl1SudFi5a5qSfxWn7nGZ+7sR3GRZJfv2Agm+NXxH6fgZSj9DUj9InWi7ru8+Djleaf/fwQ7ouZ1eL6MbneZ2eK/JDdFzOrxfRjc7zOzxX5It+7mZ+N/t9jvEZxRRdOqVdrlB6NrTTzKPH3xxOLndBNRlpony8mh7Mdl2Luxt066dYylqntJep5cVgMRha4zvjFKT0WktS+jGnHDT3mRtOtf11KNSD0Rec6ceKW8ho9vV34+Zo879229sfzIzlHt6u/HzNHnfu23tj+ZEV/rIFuyPgbry9mZh8jNerFVgla1qoVbTXYjIPkZq7/dVn/Hf5SLpZ0k/09Jx7aS5Je54nn1TTW8WcK+KKvK/eGH73oeU9WV+8cP3/AELezjCEtJn9+r3dzS7Z5w1y6ot90XMq/FXkzPGozbCWYzDxrq2dpTUuM9Oh/qVEsmxq5IwfZMqt6kVDDZobbsrirdudODawuCOtz/P5eG/NE26T2uH7svQh3Pc+l4T80TbpPa4fuy9CX8QiIfYc/wA3uiqorldfXXXwSlJJP4dZsdHpprw/Eotz2H2rJ4iS4I8WPb0/zrLaOKhLGzwq+nGCl+3kVXMtUsLkaOwKMaFv2k3jtHhfpnHuZS2Eq7Jws+nGTT7TgtM/w+94qNyXFtXD2r+IqzshLVFM+UvLd29edJ8n6cvQAA9nMAAAavNGll96bS4jKbJMXDDXzjbJRrnHlfQ0Vr4Xq+FgohQUYOLfE2bnbE6t1C4hHDj1z8i5zrG4fE4eFdFm3JT1fA+TRkeV5lTgsPKuyFkpOe1xUtORdZVA9KjHRo5FEtq13c95WFLGOhfSz6r6uHsfa0jw5jmf9dVGvedjZlta7WvR2FeBGhCLykK+17yvB05y3PovkdQlsTjJfVaZ7sXm12KolTOuuMZacK114HqV4PbhFtN8jkp3NalCUISwpceoLCeb4iWHlQ41bDhsfReummnxK8CUVLiRRuKtHPZyxniCTD2ui+FsUm4PXRkYJazuK4ycJKUeKLhZ9b04eHzM6Wfvpwq/ufsUoKu70/A0ltq/X+T0XyPXleKjg8Rvk4ykthx0j936EmbY6vGyqlVGcdhNPa0PAD32cdWvmcqvKqt3bZ+izQYHMMDhsJCpWvWMdXxHwvpKinFzhj44qfLt6y7Hy/geYHmNGMc9S+vtOvVVOO5KHDHThzNRmtUcXgJ721KUOPHR68n7GXC4HquB9QFKn2axkjaN8r2oqmjS8Ye/OfQAAtM8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9k=" alt="Netflix Logo" />
      
    </div>
  )
}

export default Nav
//data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAKgAswMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwECB//EADMQAQABAgQBCwIGAwEAAAAAAAABAgMEBRExcRITISIyNEFRgaGxcpEUFVNhwdEzQvAG/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAQFAwYHAgH/xAAwEQEAAQICCAMHBQAAAAAAAAAAAQIDBBEFEhMhMVGBsTJB0SI0cXKh4fAGFBVhkf/aAAwDAQACEQMRAD8A/GwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ2AF9ayTDV26audvdMecf0+/wAhw/6t77x/TB+5trmNA42YziI/1nh3xlicNirlmdZimeiZ8Y8DB2acRfi3VMxExM6wy60Zayr2Fe12OXtZ5dXAW35Va/Vuezji8BbsYeq5TXXMxp0Tp5vEXqJnJMuaLxNuia6o3Rv4q8BlVwAAAAAAAAAAAAAATtITtIS1mCr6vInyiYSlfar5uq3V4bTwlYKiuN7p+Gqzoy5KP/0VjSq1iIjfqVfMfygZX3yn6ZaLMLH4nB3bcdqY1p4xszuVd8p+mUyzXrWZjk1fSeG2Wk7dccKpievn69V2i5n3K5xj5hKRcz7lc4x8ww2/HCzxnu1z5Z7KMBYtFAAAAAAAAAAAAAACdpCdpCWk01txH7JuGr5yzTVO+08UOnsxwdcFXpcrtz49MKuqM4dGw9WrXH9pjPzZ/D51XTEdWqJqp4S0CBmNnW5ZxER00a0zwn/vctVZTMc3zSWH2tFFccaKonp5+vR4i5n3K5xj5hJidYRsz7lc4x8w90eOETGe7XPlnsowFi0UAAAAAAAAAAAAAAJ2kJ2kJaWnsxwfPK5u7Rc8pfVPZjg8rjWFb5ug79WMlk+LtHOW6qJ8YR8sv89humetbqmifTb20S2GYmmcljauU37UVxwmFZbno0neHDM+5XOMfMJd+nkYmryq60ImZ9yucY+YSKPFCmxkTThrlM+UT2UYCwaMAAAAAAAAAAAAAAE7SE7SEtLT2Y4PXlPZjg9VjoVPCEHJb/IzC/Zmei5MzHGJn+F8x/OTZxk3ad6Lkz7tdRVTXRTXROtNUaxP7PeJoymKuaJ+n8Tr2q7M8aZ+k/fNxxtOtuK43pn2VuZ9yuenzC5qpiqmaZ2mNFLmUTGBuRO8TET94eLM+1CVpSnKzcnnTPZSALNz4AAAAAAAAAAAAAAJ2kJ2BpaezHB6q5zXSIimz96nzOa3fC1RHrMoOxr5Nw/lsJTGWt9JQr3+a59c/LQ5Df53Bc3M9a1PJ9PBnaquVVVVO8zMu+CxlzBV1V2opnlRpMVbJF63r0ZRxUejMdThcXtKvDOcT+fFrVVnlHJw1yfCrkz66wixn17/AGsW54VS547NYxmGm1NjkVTMTExVr48Ea3YuU1xMw2HG6XwV/DV0U175ict08vgrAE9pQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//Z