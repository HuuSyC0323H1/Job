import './search.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export const Search = () => {

    return (
        <>
            <div className='search_zone'>
                <span className='icon_search'>
                    <SearchOutlinedIcon size={27}/>
                </span>
                <input type="text" className='ipt_search'
                        placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'
                />
            </div>
        </>
    )
}
