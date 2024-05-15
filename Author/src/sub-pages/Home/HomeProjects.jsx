import SideBar from "../../components/SideBar"
import Search from "../../assets/search.png"
import New_File from "../../assets/new_file.png"
import Open_File from "../../assets/open_file.png"
import RecentDocuments from "../../components/RecentDocuments"

export default function HomeProjects() {
    return (
        <>
        <section className="Container">
            <SideBar />
            <section className="HomeProjects">
                <div className="search">
                    <div className="left">
                        <input type="text" name="search_file" id="search_file" className="search_file" placeholder="Search..." />
                        <img src={Search} alt="icon_search" className="icon_search" />

                    </div>
                    <div className="right">
                        <button>
                            New Project
                            <img src={New_File} alt="New_File" className="file_new_open" />
                        </button>
                        <button>
                            Open Project
                            <img src={Open_File} alt="Open_File" className="file_new_open" />
                        </button>
                    </div>
                </div>
            <RecentDocuments />
            </section>
        </section>
        </>
    )
}