
// Class Handles the display of CatsFacts into the UI.
const {Component} = React

const ModalConfirmDialogHOC = (ChildComponent) =>
	class ModalConfirmDialog extends Component {
		constructor(props) {
			super(props);
			this.state = {
				message: ''
			}
		}

		handleConfirm = () => {
			this.callbackConfirm();
			$(function () {
				$("div#modalConfirmDialog").modal("hide");
			})
		};

		handleCancel = () => {
			this.callbackCancel();
		}

		showConfirmModal = (message, callbackConfirm, callbackCancel) => {
			const self = this;

			if (callbackConfirm) {
				this.callbackConfirm = callbackConfirm;
			}
			if (callbackCancel) {
				this.callbackCancel = callbackCancel;
			}

			$(function () {
				$("div#modalConfirmDialog").modal("show");
				self.setState((prevState) => ({
					...prevState,
					message: message
				}));
			})
		};

		componentDidMount() {
			$(function () {
				$("div#modalConfirmDialog").modal({
					backdrop: "static",
					keyboard: false,
					show: false
				})
			})
		}

		render() {
			return (
				<div>
					<div className="modal fade" id="modalConfirmDialog" tabIndex="-1" role="dialog"
						 aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div className="modal-dialog" role="document">
							<div className="modal-content">
								{/*<div className="modal-header">*/}
								{/*	<h5 className="modal-title" id="exampleModalLabel">{this.state.modal.title}</h5>*/}
								{/*	<button type="button" className="close" data-dismiss="modal" aria-label="Close">*/}
								{/*		<span aria-hidden="true">&times;</span>*/}
								{/*	</button>*/}
								{/*</div>*/}
								<div className="modal-body">
									<h5 className="modal-title font-weight-bold text-center">
										{this.state.message}
									</h5>
								</div>
								<div className="modal-footer">
									<button className="btn btn-sm btn-block btn-success" onClick={this.handleConfirm}>
										Yes, I do
									</button>
									<button type="button" className="btn btn-sm btn-block btn-danger" data-dismiss="modal"
											onClick={this.handleCancel}>
										Cancel
									</button>
								</div>
							</div>
						</div>
					</div>
					<ChildComponent {...this.props} showConfirmModal={this.showConfirmModal}/>
				</div>
			);
		}
	}

const ModalCatFactsViewContainerHOC = (ChildComponent) =>
	class ModalContainer extends Component {

		constructor(props) {
			super(props);
			this.state = {
				modal: {
					id: '',
					title: '',
					content: ''
				}
			}
		}

		showModal = (id, title, content) => {
			const self = this;
			$(function () {
				$("div#catFactModal").modal("show");
				self.setState((prevState) => ({
					...prevState,
					modal: {
						id: id,
						title: title,
						content: content
					}
				}))
			})
		};

		componentDidMount() {
			$(function () {
				$("div#catFactModal").modal({
					backdrop: "static",
					keyboard: false,
					show: false
				})
			})
		}

		render() {
			return (
				<div>
					<div className="modal fade" id="catFactModal" tabIndex="-1" role="dialog"
						 aria-labelledby="catFactModalLabel" aria-hidden="true">
						<div className="modal-dialog" role="document">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="catFactModalLabel">{this.state.modal.title}</h5>
									<button type="button" className="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div className="modal-body">
									{this.state.modal.content}
									<br/>
									<span className="float-left badge badge-dark mt-2">{this.state.modal.id}</span>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-sm btn-danger" data-dismiss="modal">
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
					<ChildComponent {...this.props} showModal={this.showModal}/>
				</div>
			);
		}
	}

class CatsFacts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			catFacts: []
		}
	}

	componentDidMount() {
		const {catsData} = this.props;
		this.setState((prevState) => ({
			...prevState,
			catFacts: [...catsData]
		}), () => {
			console.log("State data:", this.state.catFacts);
		})
	}

	logFactData = (fact) => {
		console.log("Fact:", fact);
	};

	getAuthorNames = (user) => {
		console.log("User:", user);
		return `${user.name.first} ${user.name.last}`;
	};

	handleCatFactDelete = (factID) => {
		this.props.showConfirmModal(`Delete this cat fact ?`, () => {
			this.setState((prevState) => ({
				...prevState,
				catFacts: prevState.catFacts.filter((fact) => fact._id !== factID)
			}));
		}, () => {

		});
	};

	render() {
		return (
			<div>
				<div className="row">
					<div className="col-12">
						<div className="card-columns">
							{
								this.state.catFacts.map((fact, idx) => (
									<div className="card zoomIn bg-dark text-white mb-3">
										<div className="p-3 mb-1">
										<span className="card-title float-left">
											Fact #{idx+1}
										</span>
											<ins className='font-weight-bold float-right'
												 style={{cursor: "pointer"}}
												 onClick={() => this.props.showModal(fact._id, fact._id, fact.text)}>
												see more
											</ins>
										</div>
										<div className="card-body">
											<p className="card-text">
												{fact.text}
											</p>
										</div>
										<div className="card-footer">
											<span className="text-muted font-weight-bold float-left">{fact.type}</span>
											<span className="badge badge-secondary ml-2">
											{fact.upvotes}
										</span>
											<button className="btn btn-sm btn-danger float-right" onClick={() => this.handleCatFactDelete(fact._id)}>
												Delete
											</button>
										</div>
									</div>
								))
							}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const CatsFactsContainer = ModalCatFactsViewContainerHOC(ModalConfirmDialogHOC(CatsFacts));