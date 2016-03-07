module.exports= function($scope, $state, TestService){
		console.log('enter controller_269')
		$scope.test = TestService.getTest()
	}
