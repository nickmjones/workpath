import React from 'react'

const Menu = () => {
  return(
    <div>
      <ul>
        <li onClick={this.handleCategory} value="arts">Arts</li>
        <li onClick={this.handleCategory} value="automobiles">Automobiles</li>
        <li onClick={this.handleCategory} value="books">Books</li>
        <li onClick={this.handleCategory} value="books">Business</li>
        <li onClick={this.handleCategory} value="fashion">Fashion</li>
        <li onClick={this.handleCategory}>Food</li>
        <li onClick={this.handleCategory}>Health</li>
        <li onClick={this.handleCategory}>Home</li>
        <li onClick={this.handleCategory}>Insider</li>
        <li onClick={this.handleCategory}>Magazine</li>
        <li onClick={this.handleCategory}>Movies</li>
        <li onClick={this.handleCategory}>National</li>
        <li onClick={this.handleCategory}>NYregion</li>
        <li onClick={this.handleCategory}>Obituaries</li>
        <li onClick={this.handleCategory}>Opinion</li>
        <li onClick={this.handleCategory}>Politics</li>
        <li onClick={this.handleCategory}>Realestate</li>
        <li onClick={this.handleCategory}>Science</li>
        <li onClick={this.handleCategory}>Sports</li>
        <li onClick={this.handleCategory}>Sunday Review</li>
        <li onClick={this.handleCategory}>Technology</li>
        <li onClick={this.handleCategory}>Theater</li>
        <li onClick={this.handleCategory}>Tmagazine</li>
        <li onClick={this.handleCategory}>Travel</li>
        <li onClick={this.handleCategory}>Upshot</li>
        <li onClick={this.handleCategory}>World</li>
      </ul>
    </div>
  )
}

export default Menu