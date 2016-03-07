module.exports= function($scope, $state, TestService){
		console.log('enter controller_625')
		$scope.test = TestService.getTest()
	}
