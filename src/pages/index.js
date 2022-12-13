import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      {/* hero banner */}
      <div class="hero hero--primary">
        <div class="container">
          <h1 class="hero__title">PAYONE Docs</h1>
          <p class="hero__subtitle">
            Welcome to the PAYONE Ecommerce API Documentation
          </p>
          <div>
            <a href="/docs/category/payone">
              <button class="button button--secondary button--lg shadow--md">
                Get Started 💳
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* 2 columns */}
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="col-demo">
              <h3>Topics</h3>
              <p>
                Et voluptatem eius tenetur. Consequatur et ipsam mollitia ut eum
                ut quos doloremque. Illo consequatur exercitationem sit
                voluptas. Id fugiat quaerat corporis placeat aut omnis eum et.
                Enim et cum omnis eos neque et quae. Aut eius occaecati et
                commodi ipsam. Voluptatum eligendi quia quibusdam amet. Et
                similique libero sapiente. Qui sit deserunt ipsam iusto tempore
                est esse. Corporis ducimus quidem cum.
              </p>
              <p>
                Et voluptatem eius tenetur. Consequatur et ipsam mollitia ut eum
                ut quos doloremque. Illo consequatur exercitationem sit
                voluptas. Id fugiat quaerat corporis placeat aut omnis eum et.
                Enim et cum omnis eos neque et quae. Aut eius occaecati et
                commodi ipsam. Voluptatum eligendi quia quibusdam amet. Et
                similique libero sapiente. Qui sit deserunt ipsam iusto tempore
                est esse. Corporis ducimus quidem cum.
              </p>
            </div>
          </div>
          <div class="col">
            <div class="col-demo">
              <h3>Latest News</h3>
              <ul>
                <li>
                  Et voluptatem eius tenetur. Consequatur et ipsam mollitia ut
                  eum ut quos doloremque. Illo consequatur exercitationem sit
                  voluptas. Id fugiat quaerat corporis placeat aut omnis eum et.
                </li>
                <li>
                  Enim et cum omnis eos neque et quae. Aut eius occaecati et
                  commodi ipsam. Voluptatum eligendi quia quibusdam amet. Et
                  similique libero sapiente. Qui sit deserunt ipsam iusto
                  tempore est esse. Corporis ducimus quidem cum. Et sit enim
                  consequatur ipsam animi possimus. Quia nam est praesentium.
                </li>
                <li>
                  Sed quis deserunt exercitationem repellat ipsum ut sit.
                  Suscipit pariatur aspernatur qui. Et quis esse facilis quo
                  natus. Cupiditate eveniet corrupti aut deleniti.
                </li>
              </ul>
              <a href="/blog">
                <button class="button button--secondary button--md">
                  All News 🧾
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* a row of cards */}
        <div class="row">
          <div class="col col--4">
            <div class="col-demo">
              <div class="card-demo">
                <div class="card">
                  <div class="card__image">
                    <img
                      src="https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                      alt="Image alt text"
                      title="Logo Title Text 1"
                    />
                  </div>
                  <div class="card__body">
                    <h4>Server API</h4>
                    <small>
                      The Quaco Head Lighthouse is a well maintained lighthouse
                      close to St. Martins. It is a short, beautiful walk to the
                      lighthouse along the seashore.
                    </small>
                  </div>
                  <div class="card__footer">
                    <button class="button button--primary button--block">
                      Visit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col col--4">
            <div class="col-demo">
              <div class="card-demo">
                <div class="card">
                  <div class="card__image">
                    <img
                      src="https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                      alt="Image alt text"
                      title="Logo Title Text 1"
                    />
                  </div>
                  <div class="card__body">
                    <h4>PAYONE Link</h4>
                    <small>
                      The Quaco Head Lighthouse is a well maintained lighthouse
                      close to St. Martins. It is a short, beautiful walk to the
                      lighthouse along the seashore.
                    </small>
                  </div>
                  <div class="card__footer">
                    <button class="button button--primary button--block">
                      Visit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col col--4">
            <div class="col-demo">
              <div class="card-demo">
                <div class="card">
                  <div class="card__image">
                    <img
                      src="https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                      alt="Image alt text"
                      title="Logo Title Text 1"
                    />
                  </div>
                  <div class="card__body">
                    <h4>Integrations</h4>
                    <small>
                      The Quaco Head Lighthouse is a well maintained lighthouse
                      close to St. Martins. It is a short, beautiful walk to the
                      lighthouse along the seashore.
                    </small>
                  </div>
                  <div class="card__footer">
                    <button class="button button--primary button--block">
                      Visit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
