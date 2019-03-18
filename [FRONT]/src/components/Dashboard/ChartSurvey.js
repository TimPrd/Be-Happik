import React from 'react';
import styled from 'styled-components';
import Chart from 'chart.js';
import client from '../../api';
import Theme from '../../utils/Theme';
import { Row, Col } from 'react-flexbox-grid';

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  padding: 20px;
`;


class ChartSurvey extends React.Component {

    state = {
        analytics: [],
        status: null
    };



    fetchAnalytics = async () => {

        const loggedUser = JSON.parse(localStorage.getItem('user'));

        try {
            let analyticsSurvey = await client.get(`/api/analytic/survey/response`, {
                headers: {
                    Authorization: `Bearer ${loggedUser.token}`,
                    'Content-Type': 'application/json',
                },
            });

            return analyticsSurvey;

        } catch (error) {
            this.setState({ status: false })
        }
    };

    renderChart(analytic, index) {

        var ctx = document.getElementById("surveyChart" + index)

        return new Chart(ctx, {

            type: 'pie',
            data: {
                datasets: [{

                    data: [analytic['answers'], analytic['total']],
                    backgroundColor: [Theme.colors.bluefe, Theme.colors.rose85,]
                }],

                labels: [
                    'Answered',
                    'Waiting'
                ]
            },
            options: {
                responsive: true,
                aspectRatio: 1,
                animation: {
                    animateRotate: true,
                    animateScale: true
                },
                title: {
                    display: true,
                    text: analytic['info']['title'],
                    fontSize: Theme.custom.subtitle,
                    fontColor: Theme.colors.grey5c,
                    fontStyle: 'normal',
                    fontFamily: Theme.custom.font,
                    position: 'top',
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                    },
                },

            },
        })


    }

    componentDidMount = async () => {

        var analyticsSurvey = await this.fetchAnalytics();
        if (this.state.status !== false) {

        var analytics = analyticsSurvey["data"]["surveyAnalytics"];
      
            this.setState({ analytics: analytics });

            analytics.map((analytic, index) => (

                this.renderChart(analytic, index)

            ))
        }

    }




    render() {

        if (this.state.status !== false) {

            var analytics = this.state.analytics;

            return (
                <div>
                    <Row>
                        <Col xs={12}>
                            <h3>Statistiques sur vos sondages</h3>
                        </Col>
                    </Row>

                    <Row>
                        {analytics.map((result, index) => (


                            <Col xs={12} md={6} key={index} >

                                <Canvas id={"surveyChart" + index} key={index} />

                            </Col>


                        ))}
                    </Row>
                </div>
            )

        } else {

            return false

        }
    }
}


export default ChartSurvey;
