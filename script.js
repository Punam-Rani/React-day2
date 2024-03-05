
let root = document.querySelector('.root');
const h1 = React.createElement('h1', { className: 'heading' }, 'Topic Covered');
const pa = React.createElement('p', { className: 'para' }, 'The following is the list of all topics we cover in the MDN');
console.log(h1);

// ReactDOM.render(h1, root);

const data = [
    {
        link: 'Getting Started with the web',
        para: 'Provides a practical introduction to web development for complete beginners'
    },
    {
        link: 'HTML - Structuring the web',
        para: 'HTML is the language that we use to structures the different parts of our content and define what there meaning and purpose. This topics teaches in details.'
    },
    {
        link: 'CSS - Styling the web',
        para: 'CSS is the language that we use to style the content as well as behavior like animation.'
    }
]

const AddData = () => {
    return (
        <div>
            {h1}
            {pa}
            {
                data.map((item, index) => {
                    return (
                        <div>
                            <a className='link' href='#'>{item.link}</a>
                            <p className='para'>{item.para}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

ReactDOM.render(<AddData />, root);