import React, { PureComponent } from 'react';
import { Title, Hr, BreadCrumb, ArticleImage, MainColor, SubTitle, Imginfo } from './styles'

class Latest extends PureComponent {
    render () {
        return (
            <div>
                <BreadCrumb>Reportage<MainColor> Filter #64</MainColor></BreadCrumb>
                <Hr></Hr>
                <Title>
                    Den här 23-åringen skippade gymnasiet. Nu är hans bolag värt en miljard. Det är det minst konstiga med den här historien.
                </Title>
                <ArticleImage />
                <SubTitle>
                    Så vill Theodor Forselius och ett gäng utflippade pionjärer förändra internet i grunden.
                </SubTitle>
                <Imginfo>
                    Text: CHRISTOPHER FRIMAN
                    <br />
                    Foto: MAGNUS BERGSTRÖM
                </Imginfo>
            </div>
        );
    }
}

export default Latest;
