const ArrowUp = () => {

    const upToTop = () => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
    }

    return (
        <div className="controls arrow-up">
          <button className="btn" onClick={ upToTop }>
            <svg className="icon-arrow" width="50" height="50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"></path></svg>
          </button>
        </div>
    );
}
 
export default ArrowUp;