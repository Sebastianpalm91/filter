import React, { Component } from 'react';

import { Container } from './styles';

import { AdminArticleContext } from '../';
import { TextAreaInput, ThumbnailInput, TextInput, CalendarInput, Buttons } from './articleInfoInput';

class ArticleInfoInputs extends Component {

    render() {
        const { isArticle } = this.props;
        return (
            <AdminArticleContext.Consumer>
                {
                    (context) => {

                        const { handleFileUpload, handleInputChange, setDate, handleClick } = context;

                        return (
                            <Container>
                                <TextInput isTitle={true} label='Här anger du artikelrubriken.' title='rubrik' name='title' handleInputChange={handleInputChange} />
                                <ThumbnailInput
                                    label='Lägg till omslagsbilden som kommer vara huvudbilden för artikeln.'
                                    title='Omslagsbild'
                                    name="thumbnail"
                                    handleFileUpload={handleFileUpload} />
                                <TextInput
                                    handleInputChange={handleInputChange}
                                    amount={3}
                                    label='Här anger du skribent och fotograf/illustratör för artikeln.'
                                    title={ ['skribent', 'fotograft', 'Illustratör'] }
                                    name={ ['author', 'photographer', 'illustrations'] } />
                                {
                                    isArticle &&
                                            <React.Fragment>
                                                <Buttons
                                                    handleClick={handleClick}
                                                    type='subjects'
                                                    name="subject"
                                                    label='Här väljer du vilken artikeltyp som artikeln skall kunna hittas under.'
                                                    title='Artikeltyp' />
                                                <Buttons
                                                    handleClick={handleClick}
                                                    type='types'
                                                    name="type"
                                                    label='Här väljer du vilka ämnen som artikeln skall kunna hittas under.'
                                                    title='Ämnen' />
                                            </React.Fragment>

                                }
                                <CalendarInput
                                     isArticle={isArticle}
                                     label='Här anges vilket magasinsnummer publiceringsdatum och som gäller.'
                                     title="Publiceringsdatum – dd/mm/yy"
                                     setDate={setDate}
                                     handleInputChange={handleInputChange}
                                     />
                                <TextAreaInput label='Här skriver du in ingressen för artikeln som skall publiceras.' title='ingress' name='preamble' handleInputChange={handleInputChange} />
                            </Container>
                        )
                    }
                }
            </AdminArticleContext.Consumer>
        );
    }

}


export default ArticleInfoInputs;
