module.exports= function($scope, $state, TestService){
		console.log('enter controller_708')
		$scope.test = TestService.getTest()
	}
