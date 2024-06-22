import Sort from '../components/sidebar/Sort';
import Filter from '../components/sidebar/Filter';
import Blogs from '../components/Blogs';

const HomePage = () => {
  return (
      <section className="wrapper">
        <aside>
          <div className="sidebar-items">
            <Sort />
            <Filter />
          </div>
        </aside>

        <div className="post-container" id="postContainer">
          <Blogs />
        </div>
      </section>
  );
};

export default HomePage;
