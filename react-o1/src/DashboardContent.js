import React from 'react';

function DashboardContent() {
  return (
    <main className="container my-4">
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Main Content</h2>
              <p className="card-text">This is the main content area. You can add your components and content here.</p>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-body">
              <h2 className="card-title">Recent Posts</h2>
              <p className="card-text">Facebook posts will be displayed here.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Sidebar</h3>
              <p className="card-text">This is the sidebar. You can add navigation or other content here.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DashboardContent;
