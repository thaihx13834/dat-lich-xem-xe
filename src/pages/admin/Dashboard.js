import React from 'react'



const Dashboard = (props) => {
  return (
    <div>
        <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId">
          Launch
        </button>
        
        <div class="modal fade" id="modalId" tabindex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                        <div class="modal-header">
                                <h5 class="modal-title" id="modalTitleId">Modal title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            Add rows here
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default Dashboard