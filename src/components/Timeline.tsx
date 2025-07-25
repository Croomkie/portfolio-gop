import React from "react";
import '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
    return (
        <div id="history">
            <div className="items-container">
                <h1>Career History</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: 'white', color: 'rgb(39, 40, 34)'}}
                        contentArrowStyle={{borderRight: '7px solid  white'}}
                        date="2023 - present"
                        iconStyle={{background: '#5000ca', color: 'rgb(39, 40, 34)'}}
                        icon={<FontAwesomeIcon icon={faBriefcase}/>}
                    >
                        <h3 className="vertical-timeline-element-title">Mastère - Ingénierie du Web (alternance)</h3>
                        {/*<h4 className="vertical-timeline-element-subtitle">Dallas, TX</h4>*/}
                        <p>
                            ESGI Lyon De septembre 2023 à septembre 2025
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2022 - 2023"
                        iconStyle={{background: '#5000ca', color: 'rgb(39, 40, 34)'}}
                        icon={<FontAwesomeIcon icon={faBriefcase}/>}
                    >
                        <h3 className="vertical-timeline-element-title">Bachelor - Ingénierie du Web (alternance)</h3>
                        {/*<h4 className="vertical-timeline-element-subtitle">Laie, HI</h4>*/}
                        <p>
                            Frontend Development, Backend Development, User Experience, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2020 - 2022"
                        iconStyle={{background: '#5000ca', color: 'rgb(39, 40, 34)'}}
                        icon={<FontAwesomeIcon icon={faBriefcase}/>}
                    >
                        <h3 className="vertical-timeline-element-title">BTS - SIO (Services informatiques aux
                            organisations)
                        </h3>
                        {/*<h4 className="vertical-timeline-element-subtitle">Laie, HI</h4>*/}
                        <p>
                            La Martinière-Duchère Lyon De septembre 2020 à juin 2022
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default Timeline;