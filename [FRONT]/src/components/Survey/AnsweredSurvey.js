import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { Form, Formik, FieldArray } from 'formik';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';

import { allMoods } from './surveyMock';

import client from '../../api';

import BorderedButton from '../Buttons/BorderedButton';

const AnswerContainer = styled.div`
  min-height: 110px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.04);
  text-align: left;
  padding:
    ${props => props.theme.custom.text}px
    ${props => props.theme.custom.subtitle}px;
  margin: ${props => props.theme.custom.subtitle}px 0;
`;

const SurveyTitle = styled.h1`
  font-size: ${props => props.theme.custom.subtitle}px;
  font-weight: bold;
  line-height: 1.25;
  text-align: center;
  margin: 0;
  
`;

const QuestionTitle = styled.p`
  margin: 0 0 10px;
  font-size: ${props => props.theme.custom.mediumtext}px;
  font-weight: 600;
  line-height: 1.79;
  text-align: left;
  color: #4d4d4d;
`;

const ChoiceContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointor;
  position: relative;


  & input[type="checkbox"] {
    display: none;
  }

`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ChoiceP = styled.p`
  margin: 0;
  font-size: ${props => props.theme.custom.text}px;
  line-height: 2.08;
  text-align: center;
  color: #505052;
`;

const Icon = styled.img`
  height: ${props => props.theme.custom.title}px;
  width: ${props => props.theme.custom.title}px;
`;

class AnsweredSurvey extends React.Component {
    state = {
        survey: null,
        moods: allMoods,
    };

    fetchSurvey = async () => {
        const { match } = this.props;
        const loggedUser = JSON.parse(localStorage.getItem('user'));
        const surveyId = match.params.id || null;

        try {
            let survey = await client.get(`api/survey/${surveyId}/answers`, {
                headers: {
                    Authorization: `Bearer ${loggedUser.token}`,
                    'Content-Type': 'application/json',
                },
            });



            return survey;

        } catch (error) {
            toast.error('error' + error, {
                position: toast.POSITION.TOP_RIGHT,
            });
        };
    }
        componentDidMount = async () => {
            const survey = await this.fetchSurvey();

            this.setState({ survey });
        };

        render() {
            const { survey, moods } = this.state;
            const { history } = this.props;

            return (
                <Grid>
                  {survey && (
                    <div>
                      <Formik
                        render={() => (
                          <Form>
                            <Row middle="xs">
                              <Col md={2}>
                                <BorderedButton label="Précédent" handleClick={history.goBack} type="submit" />
                              </Col>
          
                              <Col md={8}>
                                <Row>
                                  <Col xs={12}>
                                    <SurveyTitle>{survey.data['survey'].title}</SurveyTitle>
                                  </Col>
          
                                  <Col xs={6}>
                                    <p>
                                      Auteur :&nbsp;
                                      {survey.authorName}
                                    </p>
                                  </Col>
                                  <Col xs={6}>
                                    <p>
                                      Date d’expiration :&nbsp;
                                      {moment(survey.data['survey'].endDate).format('D MMMM YYYY')}
                                    </p>
                                  </Col>
                                </Row>
                              </Col>
          
                             
                            </Row>
                            <FieldArray
                              name="questions"
                              render={() => (
                                <Row>
                                  <Col xs={12}>
                                    {survey.data['answers'].map((answer, index) => (
                                      <AnswerContainer key={index.toString()}>
                                        <Row start="xs">
                                          <Col md={6}>
                                            <QuestionTitle>{answer.Question.title}</QuestionTitle>
                                          </Col>
                                        </Row>
          
                                        <Row around="xs">
                                          {moods.map((mood, newIndex) => {
          
                                            return (
                                              <Col xs={2} key={newIndex.toString()}>
                                                <ChoiceContainer className={answer.result === mood.mood ? "answer-checked" : null }>
                                                  <input
                                                    name={`question.${newIndex}`}
                                                    type="checkbox"
                                                    id={`checkbox_${index}${newIndex}`}
                                                    value={answer.result}
                                                  />
                                                  <Label htmlFor={`checkbox_${index}${newIndex}`}>
                                                    <Icon src={mood.icon} alt="poll answer" />
                                                    <ChoiceP>{mood.title}</ChoiceP>
                                                  </Label>
                                                </ChoiceContainer>
                                              </Col>
                                            );
                                          })}
                                        </Row>
                                      </AnswerContainer>
                                    ))}
                                  </Col>
                                </Row>
                              )}
                            />
                          </Form>
                        )}
                      />
                    </div>
                  )}
                </Grid>
              );
        }
    }


AnsweredSurvey.propTypes = {
    history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(AnsweredSurvey);