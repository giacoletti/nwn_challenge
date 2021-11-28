## NWN - News Wire Network Challenge

![](./src/nwn.png)

Your challenge is to develop a feature that when the application is loaded, the user should see "Top Headlines" and be allowed to search for news that interest her/him.

1. Make use of Cypress to test your application
2. Use functional components
3. Use redux to store the news in centratized state
4. Make use of `useSelector`, `useDispatch`, `useEffect` and potentially `useState` hooks.

### User Stories

> As a user
> In order to be able to read the news
> I want to see the news feed at startup

> As a user
> In order to read relevant news
> I want to see news that is most important to me first

> As a user
> In order to be able to read other than the usual
> I want to be able to search for news

Code
-------

When the user opens the application, a list of news top headlines from all over the world is shown,
by making an API get call to the [News API](https://newsapi.org/)
The user is able to search the news by keyword in the search input in the top menu bar, a new API
call is made when the "Search" button is clicked, if text is typed in the input field next to it.

## Dependencies

- axios
- react native
- redux
- semantic-ui-react
- semantic-ui-css
- web-vitals

## Acknowledgments

- [How to Pass Data and Events Between Components in React](https://www.freecodecamp.org/news/pass-data-between-components-in-react/)
- [Thomas](https://github.com/tochman)

Improvement plans
-------

Better API calls management can be done, API calls must be controlled to avoid excessive usage of the API.
Redux implementation is missing and can be definitely done in the future.

## License

The software is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).