module.exports= function($scope, $state, TestService){
		console.log('enter controller_137')
		$scope.test = TestService.getTest()
	}
