module.exports= function($scope, $state, TestService){
		console.log('enter controller_832')
		$scope.test = TestService.getTest()
	}
