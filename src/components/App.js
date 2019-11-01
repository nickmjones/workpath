import React, { Component } from 'react'
import Moment from 'moment'
import MaterialIcon from 'material-icons-react'
import '../assets/styles/app.scss'

// https://api.nytimes.com/svc/topstories/v2/world.json?api-key=IzgJKf2duIUCfRU8JlkwpTeJdRxfAnQu

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      results: [],
      error: null,
      isMenuOpen: false,
      menuControl: "",
      title: "World"
    };
  }

  fetchData = (url = 'https://api.nytimes.com/svc/topstories/v2/', query = 'home', key = 'IzgJKf2duIUCfRU8JlkwpTeJdRxfAnQu') => {
    fetch(`${url}${query}.json?api-key=${key}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Oops')
        }
      })
      .then(data => this.setState({ results: data.results, isLoading: false}))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchData()
  }

  handleCategory = (e) => {
    const cat = e.target.getAttribute('data-facet');
    this.fetchData('https://api.nytimes.com/svc/topstories/v2/', cat, 'IzgJKf2duIUCfRU8JlkwpTeJdRxfAnQu');
    if (this.state.isMenuOpen === true){
      this.setState({ isMenuOpen: false })
    }
    // Do this instead of some regex nightmare
    // catch the funky categories and output them
    // to look nice
    if (cat === 'nyregion') {
      this.setState ({ title: 'NY Region'})
    } else if (cat === 'sundayreview') {
      this.setState ({ title: 'Sunday Review' })
    } else {
      this.setState ({ title: cat })
    }
  }

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }

  render() {

    const LinkList = (props) => {
      const cats = props.cats;
      const listItems = cats.map((cat) =>
        <li data-facet={cat} key={cat}>{cat}</li>
      );
      return (
        <ul className="listItems">{listItems}</ul>
      );
    }
    
    const cats = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'insider', 'magazine', 'movies', 'national', 'obituaries', 'opinion', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 'tmagazine', 'travel', 'upshot', 'world'];

    const { isLoading, results, error } = this.state;

    if (isLoading) {
      return(
        <div className="loading">Loading...</div>
      )
    }

    if (error) {
      return(
        <div className="error">{error.message}</div>
      )
    }


    return (
      <div className={this.state.isMenuOpen ? 'wrapper wrapper--hasMenu' : 'wrapper'}>
        <div className={ this.state.isMenuOpen ? 'menu menu--open' : 'menu' }>
          <div className="close" onClick={this.toggleMenu}>Close</div>
          <div className="menu__trigger" onClick={this.toggleMenu}>
            <div className="decorator"><MaterialIcon icon="menu"/></div>
          </div>
          <h5>Sections</h5>

          <span className="single" onClick={this.handleCategory} data-facet="home"><MaterialIcon icon="home"/>Home</span>
          <span className="single" onClick={this.handleCategory} data-facet="nyregion"><MaterialIcon icon="subway"/>NY Region</span>
          <span className="single" onClick={this.handleCategory} data-facet="politics"><MaterialIcon icon="how_to_vote"/>Politics</span>

          <div onClick={this.handleCategory}>
            <LinkList cats={cats} />
          </div>

          <form name="search" className="article-search">
          <MaterialIcon icon="search"/><input type="text" placeholder="Search"></input>
          </form>
        </div>
        <h4 className={this.state.isMenuOpen ? 'current-section current-section--menuPresent' : 'current-section'}>{this.state.title}</h4>
        <div className="cards">
          {results.slice(0, 10).map(result => (
            <div className="cards__card" key={result.title}>
              <a href={result.url} target="_blank"><h5>{result.title}</h5></a>
              <p>{result.abstract}</p>
              <p className="small">Published {Moment(result.published_date).format('MMMM Do YYYY, h:mm a')}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

}

export default App
