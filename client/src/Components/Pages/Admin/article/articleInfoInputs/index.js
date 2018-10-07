import React, { Component } from 'react';

import ArticleInfoInput from './articleInfoInput';
import { Container } from './styles';

class ArticleInfoInputs extends Component {

    render() {
        return (
            <Container>
                <ArticleInfoInput isTitle={true} type="text" label="Här anger du artikelrubriken." title="rubrik" name="title" />
                <ArticleInfoInput type="file" label="Lägg till omslagsbilden som kommer vara huvudbilden för artikeln." title="omslagsbild" name="thumbnail" />
                <ArticleInfoInput
                     isTitle={false}
                     type="text"
                     label="Här anger du skribent och fotograf/illustratör för artikeln."
                     titles={ ['skribent', 'fotograf', 'illustratör'] }
                     names={ ['author', 'photographer', 'illustrations'] } />
                 <ArticleInfoInput type="calendar" label="Här anges vilket publiceringsdatum som gäller." title="Publiceringsdatum – dd/mm/yy" name="date" />
            </Container>
        );
    }

}


export default ArticleInfoInputs;
