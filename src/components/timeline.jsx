import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Amazon, Seattle, WA - Software Development Engineering Intern <span>May 2020 - August 2020</span></h2>
                        <p>• Aim of the internship was to manage and deliver a project end to end.<br></br>
                          • Built, tested and deployed model to suggest the dimensions of the package required to pack given items of the order.<br></br>
                          • Designed the architecture using AWS technologies such as Lambda, SNS, SQS and etc.<br></br>
                          • Developed the code in Java, Spring framework and integrated with components to develop end to end product.<br></br>
                          • Performed integration testing and unit testing using JUnit.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>BenchPrep, Chicago, IL - Software Engineering Intern <span>May 2019 - August 2019</span></h2>
                        <p>• Goal of the project was to create a script that converts 0.5+ TB production database to approximately 50 GB data for developers to test or develop features on their local development.<br></br>
                          • The script created was made configurable so that every engineer can get the data they want.<br></br>
                          • Scripting was done in Ruby, Ruby on Rails and PostgreSQL, platform used was Benchprep API.<br></br>
                          • This script is used by every engineer on the technical team to set up local database.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Master's in Computer Science at RIT, Rochester, NY <span>August 2018 - December 2020</span></h2>
                        <p>Completed MS in CS with Big Data as the concentration. The courses taken includes <br></br>• Advanced Object Oriented Programming Concepts • Big Data Anaytics • Computational Problem Solving • Data Cleaning and Preparation • Data Cognitive Comp • Data Driven Knowledge Discovery • Foundation of Artificial Intelligence • Foundation of Computer Science Theory • Foundation of Computer Vision • Foundations of Algorithms • Introduction to Big Data • Introduction to NLP • Advance Programming Skills</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Bachelor's in Computer Application(BCA Hons.) at D.A.V.V., Indore, M.P., India <span>2014 - 2018</span></h2>
                        <p>Completed my Bachelor's  in Computer Applications. The courses I have taken includes <br></br>• Fundamental of Programming with C • Introduction to C++ • Database Management System • Web Designing</p>
                      </div>
                    </div>
                  </article>
                  {/* <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Primary and Higher Education <span>2003-2015</span></h2>
                        <p>I have completed my higher secondary education with major subjects as Physics,Chemistry & Maths with 91 merit. During my time at school, I have developed interest in solving complex problems of the fundamental physics which helped me to improve my understanding of any problem and also my mathematical skills to actually solve the problems.</p> 
                      </div>
                    </div>
                  </article> */}
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
