
# Removed from 1300px media query

This bit of code had an hover/underline affect on desktop. I thought it was too clunky. Keeping here for backup.

@media only screen and (min-width: 1300px) {
  .menu:hover {
    color: var(--description-color);
  }

  .menu:focus, .menu:active {
    color: var(--description-color);
  }
  
  .menu::before {
    content: '';
    position: absolute;
    /* margin-left: -.15rem; */
    top: 125%;
    height: 5px;
    width: 60px;
    background-color: var(--description-color);
    -webkit-transform-origin: center top;
            transform-origin: center top;
    -webkit-transform: scale(0, 1);
            transform: scale(0, 1);
    transition: color 0.1s, -webkit-transform 0.2s ease-out;
    transition: color 0.1s, transform 0.2s ease-out;
    transition: color 0.1s, transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
  }
  
  .menu:active::before {
    background-color: var(--description-color);
  }
  
  .menu:hover::before,
  .menu:focus::before {
    -webkit-transform-origin: center top;
            transform-origin: center top;
    -webkit-transform: scale(1, 1);
            transform: scale(1, 1);
  }