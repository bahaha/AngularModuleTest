module.exports= function($scope, $state, TestService){
		console.log('enter controller_895')
		$scope.test = TestService.getTest()
	}
