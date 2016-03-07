module.exports= function($scope, $state, TestService){
		console.log('enter controller_304')
		$scope.test = TestService.getTest()
	}
