import React from 'react';
import Paper from '@material-ui/core/Paper';
import Modal from 'react-modal';
import image01 from './portfolioList/images/01.jpg';
import image02 from './portfolioList/images/02.png';
import image03 from './portfolioList/images/03.jpg';
import image04 from './portfolioList/images/04.jpg';
import image05 from './portfolioList/images/05.jpg';
import image06 from './portfolioList/images/06.jpg';  
import './portfolio.css';
import portfolioList from './portfolioList/portfolioList';


class Portfolio extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedOption: undefined,
            
        }
        this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    }
    handlePortfolioClick = (e) => {
        
        console.log(e)
        this.setState({
            selectedOption: {...portfolioList[e]}
        })
    }

    handleOkay = () => {
        this.setState({
          selectedOption: undefined
        })
      }

    render () {
    return (
        <div>
        <div className="portfolio--root">
                    <Paper
                    className="portfolio--paper"
                    id={0}
                    rounded="true"
                    onClick={
                        (e) => {
                        this.handlePortfolioClick(e.target.id)
                        }
                    }>
                        <div id={0} className="portfolio--title">
                        <h1>{portfolioList[0].title}</h1>
                        <p className="portfolio--subtitle"> {portfolioList[0].p}</p>
                        </div>
                        <img
                            alt="post"
                            width='100%'
                            src={image01}
                            id={0}
                            
                        />
                    </Paper>

                    <Paper
                    rounded="true"
                    className="portfolio--paper"
                    id={1}
                    onClick={
                        (e) => this.handlePortfolioClick(e.target.id)
                    }>
                        <div id={1} className="portfolio--title">
                        <h1>{portfolioList[1].title}</h1>
                        <p className="portfolio--subtitle"> {portfolioList[1].p}</p>
                        </div>
                        <img
                            alt="post"
                            style={{ width: '100%' }}
                            src={image02}
                            id={1}
                        />
                    </Paper>
                
                    <Paper
                    className="portfolio--paper"
                    id={2}
                    onClick={
                        (e) => this.handlePortfolioClick(e.target.id)
                    }>
                        <div id={2} className="portfolio--title">
                        <h1>{portfolioList[2].title}</h1>
                        <p className="portfolio--subtitle"> {portfolioList[2].p}</p>
                        </div>
                        <img
                            id={2}
                            alt="post"
                            style={{ width: '100%' }}
                            src={image03}
                        />
                    </Paper>
                    
                    <Paper
                    className="portfolio--paper"
                    onClick={
                        (e) => this.handlePortfolioClick(e.target.id)
                    }>
                        <div id={3} className="portfolio--title">
                        <h1>{portfolioList[3].title}</h1>
                        <p className="portfolio--subtitle"> {portfolioList[3].p}</p>
                        </div>
                        <img
                        id={3}
                            alt="post"
                            style={{ width: '100%' }}
                            src={image04}
                        />
                    </Paper>
                
                    <Paper
                    id={4}
                    className="portfolio--paper"
                    onClick={
                        (e) => this.handlePortfolioClick(e.target.id)
                    }>
                        <div id={4} className="portfolio--title">
                        <h1>{portfolioList[4].title}</h1>
                        <p className="portfolio--subtitle"> {portfolioList[4].p}</p>
                        </div>
                        <img
                            id={4}
                            alt="post"
                            style={{ width: '100%' }}
                            src={image05}
                        />
                    </Paper>

                <Paper
                className="portfolio--paper"
                id={5}
                onClick={
                    (e) => this.handlePortfolioClick(e.target.id)
                }
                >
                    <div
                    id={5}
                    className="portfolio--title">
                    <h1>{portfolioList[5].title}</h1>
                    <p className="portfolio--subtitle"> {portfolioList[0].p}</p>
                    </div>
                    <img
                        id={5}
                        alt="post"
                        style={{ width: '100%' }}
                        src={image06}
                    />
                </Paper>
    </div>
        {/*Modal one */}

        { this.state.selectedOption &&
            
            <Modal
            isOpen={this.state.selectedOption.id === '01'}
            onRequestClose={this.handleOkay}
            contentLabel="Selected Option"
            closeTimeoutMS={200}
            className="Modal"
            ariaHideApp={false}
            onClick={
                console.log('clicked modal')
            }
            >
           

                
                <img
                    alt="post"
                    style={{ width: '100%' }}
                    height={{ height: '100%' }}
                    src={image01}
                    id={0}
                />
                <div className="modal--content">
                    <h4 className="Modal__title">{this.state.selectedOption.title}</h4>
                    <p className="modal--p">{this.state.selectedOption.p}</p>
                    <p className="modal--tech">
                     {this.state.selectedOption.description}
                    </p>
                </div>
                <div className="modal--links" > 

                    <button
                    onClick={(e) => {
                        this.handleOkay()
                    }}
                    >
                    CLOSE
                    </button>
                    <a
                    href='https://project3trip.herokuapp.com/'>
                    {this.state.selectedOption.title}
                    </a>
                    <a href="https://github.com/vandecastro95/project_3">
                    GITHUB
                    </a>
                    
                </div>
            </Modal>
        }

        {/*Modal two */}

        { this.state.selectedOption &&
            
            <Modal
            isOpen={this.state.selectedOption.id === '02'}
            onRequestClose={this.handleOkay}
            contentLabel="Selected Option"
            closeTimeoutMS={200}
            className="Modal"
            ariaHideApp={false}
            >
                <img
                    alt="post"
                    style={{ width: '100%' }}
                    height={{ height: '100%' }}
                    src={image02}
                    id={0}
                />
                <div className="modal--content">
                    <h4 className="Modal__title">{this.state.selectedOption.title}</h4>
                    <p className="modal--p">{this.state.selectedOption.p}</p>
                    <p className="modal--tech">
                     {this.state.selectedOption.description}
                    </p>
                </div>
                <div className="modal--links"> 
                    <button
                    onClick={this.handleOkay}
                    >
                    CLOSE
                    </button>
                    <a
                    href="https://indecision-vdc.herokuapp.com/"
                    >
                    {this.state.selectedOption.title}
                    </a>
                    <a
                    href="https://github.com/vandecastro95/indecisionApp"
                    >
                    GITHUB
                    </a>
                </div>
            </Modal>
        }

        {/*Modal three */}

        { this.state.selectedOption &&
            
            <Modal
            isOpen={this.state.selectedOption.id === '03'}
            onRequestClose={this.handleOkay}
            contentLabel="Selected Option"
            closeTimeoutMS={200}
            className="Modal"
            ariaHideApp={false}
            >
            <img
                    alt="post"
                    style={{ width: '100%' }}
                    height={{ height: '100%' }}
                    src={image03}
                    id={0}
                />
                <div className="modal--content">
                    <h4 className="Modal__title">{this.state.selectedOption.title}</h4>
                    <p className="modal--p">{this.state.selectedOption.p}</p>
                    <p className="modal--tech">
                     {this.state.selectedOption.description}
                    </p>
                </div>
                    <div className="modal--links"> 
                    <button
                    onClick={this.handleOkay}
                    >
                    CLOSE
                    </button>
                    <a
                    href="https://github.com/vandecastro95/FriendFinder"
                    >
                    FRIEND FINDER
                    </a>
                    <a
                    href='https://friendfinder1232.herokuapp.com/'
                    >
                    GITHUB
                    </a>
                </div>
            </Modal>
        }

        {/*Modal four */}

        { this.state.selectedOption &&
            
            <Modal
            isOpen={this.state.selectedOption.id === '04'}
            onRequestClose={this.handleOkay}
            contentLabel="Selected Option"
            closeTimeoutMS={200}
            className="Modal"
            ariaHideApp={false}
            >
                <img
                    alt="post"
                    style={{ width: '100%' }}
                    height={{ height: '100%' }}
                    src={image04}
                    id={0}
                />
                <div className="modal--content">
                    <h4 className="Modal__title">{this.state.selectedOption.title}</h4>
                    <p className="modal--p">{this.state.selectedOption.p}</p>
                    <p className="modal--tech">
                     {this.state.selectedOption.description}
                    </p>
                </div> 
                    <div className="modal--links">
                    <button
                    onClick={this.handleOkay}
                    >
                    CLOSE
                    </button>
                    <a
                    href="https://github.com/vandecastro95/Burger"
                    >
                    GITHUB
                    </a>
                </div>
            </Modal>
        }

        {/*Modal five */}

        { this.state.selectedOption &&
            
            <Modal
            isOpen={this.state.selectedOption.id === '05'}
            onRequestClose={this.handleOkay}
            contentLabel="Selected Option"
            closeTimeoutMS={200}
            className="Modal"
            ariaHideApp={false}
            >
                <img
                    alt="post"
                    style={{ width: '100%' }}
                    height={{ height: '100%' }}
                    src={image05}
                    id={0}
                />
                <div className="modal--content">
                    <h4 className="Modal__title">{this.state.selectedOption.title}</h4>
                    <p className="modal--p">{this.state.selectedOption.p}</p>
                    <p className="modal--tech">
                     {this.state.selectedOption.description}
                    </p>
                </div> 
                <div className="modal--links"> 
                    <button
                    onClick={this.handleOkay}
                    >
                    CLOSE
                    </button>
                    <a
                    href="https://github.com/vandecastro95/ben-to"
                    >
                    {this.state.selectedOption.title}
                    </a>
                    <a
                    href="https://github.com/vandecastro95/ben-to"
                    >
                    GITHUB
                    </a>
                </div>
            </Modal>
        }

        {/*Modal six */}

        { this.state.selectedOption &&
            
            <Modal
            isOpen={this.state.selectedOption.id === '06'}
            onRequestClose={this.handleOkay}
            contentLabel="Selected Option"
            closeTimeoutMS={200}
            className="Modal"
            ariaHideApp={false}
            >
                <img
                    alt="post"
                    style={{ width: '100%' }}
                    height={{ height: '100%' }}
                    src={image06}
                    id={0}
                />
                <div className="modal--content">
                    <h4 className="Modal__title">{this.state.selectedOption.title}</h4>
                    <p className="modal--p">{this.state.selectedOption.p}</p>
                    <p className="modal--tech">
                     {this.state.selectedOption.description}
                    </p>
                </div>
                <div className="modal--links"> 
                    <button
                    onClick={this.handleOkay}
                    >
                    CLOSE
                    </button>
                    <a
                    href="https://arcane-ravine-73308.herokuapp.com/"
                    >
                    {this.state.selectedOption.title}
                    </a>
                </div>
            </Modal>
        }
        </div>
    )}
    
    }



export default Portfolio;