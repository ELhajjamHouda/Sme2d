import Link from "next/link";
// import '@fortawesome/fontawesome-free/css/all.min.css';

const BlogAreaList = () => {
  return (
    <section className="blog-area space-top space-extra-bottom">
      <div className="container">
        <div className="row gx-40">
          <div className="col-xxl-8 col-lg-8">
            <div className="blog-single-card">
<div
  className="blog-thumb"
  style={{
    backgroundImage: "url('assets/img/projet/projet-1.svg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px", // ajuste la hauteur selon ton besoin
    position: "relative",
    borderRadius: "5px",
  }}
>
  <div className="text-overlay">
    <div>ENTRÉE D’EAU</div>
    <div>ASPECT D’EAU À LA SORTIE DE LA STEP</div>
  </div>
</div>

                {/* <div class="blog-meta">
                  <div className="table-links">
                    <a href="/#">ENTRÉE D’EAU</a>
                    <a href="/#">ASPECT D’EAU À LA SORTIE DE LA STEP</a>
                  </div>
                </div> */}

              
              <div className="blog-content">
                <div className="tables-wrapper">
                  <div className="tables-row">
                    
                    {/* Tableau 1 */}
                    <div className="table-box">
                      <h4 className="table-title text-center">
                        Caractéristiques d’eau brute
                      </h4>
                      <table className="styled-table custom-table">
                        <thead>
                          <tr>
                            <th>Débit journalier entrant : Q</th>
                            <th>400 m³/j</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Charge entrante en DBO₅</td>
                            <td>140 kg/j</td>
                          </tr>
                          <tr>
                            <td>Charge entrante en DCO</td>
                            <td>280 kg/j</td>
                          </tr>
                          <tr>
                            <td>Charge entrante en MES</td>
                            <td>180 mg/l</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Tableau 2 */}
                    <div className="table-box">
                      <h5 className="table-title text-center">
                        Caractéristiques d’eau à la sortie
                      </h5>
                      <table className="styled-table custom-table">
                        <thead>
                          <tr>
                            <th>Paramètres physico-chimiques</th>
                            <th>Concentration maximale*</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>DBO₅</td>
                            <td>30 mg/l</td>
                          </tr>
                          <tr>
                            <td>DCO</td>
                            <td>125 mg/l</td>
                          </tr>
                          <tr>
                            <td>MES</td>
                            <td>60 mg/l</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            {/* <div className="pagination justify-content-center">
              <ul>
                <li><Link href="/blog">1</Link></li>
                <li><Link href="/blog">2</Link></li>
                <li><Link href="/blog">3</Link></li>
                <li>
                  <Link href="/blog">
                    <i className="fas fa-angle-right" />
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>

          {/* Sidebar */}
          <div className="col-xxl-4 col-lg-4">
            <aside className="sidebar-area">
              <div className="widget">
                <h3 className="widget_title">Étude de Cas</h3>
                <div className="recent-post-wrap">
                  <div className="recent-post">
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="text-inherit" href="/blog-details">
                          Client
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link href="/#">XXXX</Link>
                      </div>
                    </div>
                  </div>

                  <div className="recent-post">
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="text-inherit" href="/blog-details">
                          Type de Procédé
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link href="/#">MBBR</Link>
                      </div>
                    </div>
                  </div>

                  <div className="recent-post">
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="text-inherit" href="/blog-details">
                          Localisation du Projet
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link href="/#">Village El Aarjate</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="widget widget_tag_cloud">
                <h3 className="widget_title">Tags</h3>
                <div className="tagcloud">
                  <Link href="/blog">Mechanic</Link>
                  <Link href="/blog">Auto Fixers</Link>
                  <Link href="/blog">Car Fix</Link>
                  <Link href="/blog">Pro Auto Fix</Link>
                  <Link href="/blog">Service</Link>
                  <Link href="/blog">Auto Fix</Link>
                  <Link href="/blog">Auto Repair</Link>
                  <Link href="/blog">Masters</Link>
                  <Link href="/blog">Automotive</Link>
                </div>
              </div> */}

              <div className="widget widget_categories">
                <h3 className="widget_title">Category</h3>
                <ul>
                  <li><Link href="/blog">Precision Auto Works <span>(4)</span></Link></li>
                  <li><Link href="/blog">Mobile Car Repair <span>(5)</span></Link></li>
                  <li><Link href="/blog">Elite Automotive Service <span>(8)</span></Link></li>
                  <li><Link href="/blog">Pro Auto Fix <span>(4)</span></Link></li>
                  <li><Link href="/blog">Drive-In Garage <span>(3)</span></Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogAreaList;
