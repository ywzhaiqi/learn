import './Home.scss'
import React from 'react'

const tags = [
  {id: '1', title: 'ABC'},
  {id: '2', title: 'Abandoned'},
  {id: '3', title: 'Abound'},
  {id: '4', title: 'Abe'},
  {id: '5', title: 'Aaron'},
  {id: '6', title: 'Abandon'},
  {id: '7', title: 'Abandoning'},
  {id: '8', title: 'Absurdly'},
]

const quotes = [
  {id: '1', title: 'Facebook'},
  {id: '2', title: 'Google'},
]

class Root extends React.Component {
  render() {
    return (
      <div>
        <div className='container'>
          <header className='header'>
            <a className='logo' href='/' >
              <img alt='logo' src='/img/logo.png'/>
            </a>
            <div className='nav'>
              <a href='/home' className='active'><span>Home</span></a>
              <a href='/authors'><span>Authors</span></a>
              <a href='/tags'><span>Tags</span></a>
              <a href='/popular'><span>Popular</span></a>
            </div>
            <div className='search'>
              <input id='search' type='text' placeholder='Search...' autocomplete='off' />
              <img src='/img/icon-search.png' />
            </div>
          </header>

          <div className='main'>
            <div className='part1'>
              <div className='left'>
              </div>
              <div className='mid'>
              </div>
              <div className='sidebar'>
              </div>
            </div>

            {quotes.map(({id, title}) =>
            <div key={id}>{title}</div>
            )}
          </div>
        </div>
        <footer className='footer'>
          <div className='links'>
            <a>Home</a>
            <a>About us</a>
            <a>Contact us</a>
            <a>Privacy</a>
          </div>
          <div>Copyright©2015-1016</div>
        </footer>
      </div>
    )
  }
}

export default Root
