module.exports= function($scope, $state, TestService){
		console.log('enter controller_174')
		$scope.test = TestService.getTest()
	}
