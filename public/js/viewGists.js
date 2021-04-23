class UserGists extends React.Component {

    onButtonClick(e) {
        e.preventDefault();
        // query '/gists/user?userName=[username]
        // query '/gist/favorites'
        // merge the results (i.e. for each gist, add favorite=true if it's in the favorites)
        // set React state to show results
    }

    render() {
        return (
            <div>
                <label>Username</label>
                <input type="text"></input>
                <button type="submit" onClick={() => {}} value="View gists" />
            </div>
        )
    }  
  }

// ========================================

ReactDOM.render(
    <UserGists/>,
    document.getElementById('root')
  );